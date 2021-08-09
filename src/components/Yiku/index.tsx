/**
 * @description 这是一个表单
 * @author Leo <xingfengshuo.leo@gmail.com>
 * @param mergeColumns Array  // 合并
 * @param dataSource Array    // 主数据
 * @param columns Array       // 头数据
 * @param itemHeader Obejct   // 信息头文案字段
 */
import React, { useState, useEffect, useRef } from 'react';
import { Table } from 'antd';
import './index.sass';

interface yikuProps {
  columns: { dataIndex: string }[],
  dataSource: {}[],
  mergeColumns: string[]
  itemHeader: {}
}

const Yiku = (props: yikuProps) => {
  const [ mData, setmData ] = useState([]);
  const [ mColumn, setmColumn ] = useState([]);
  const { columns, dataSource, mergeColumns, itemHeader }: any = props;

  // REF
  const tableRef = useRef(null);
  const TableWrap = (props: any) => <table ref={tableRef} {...props} />;
  const Tr = (props: any) => {
    const { className, children } = props;
    if (className.includes('item-header')) {
      return <tr className="item-header"> <td colSpan={children.length}></td> </tr>
    } else return <tr {...props}/>;
  }

  // 合并 - 处理表头结构
  const markColumn = () => {
    console.log(1);
    const mColumn = columns.map((item: any) => {
      // 是否在合并的列表总
      const itemData =  item['dataIndex'];
      if (mergeColumns.includes(itemData)) {
          const render = (value: any, row: any) => {
            let text = value
            if (row.sid && itemData === 'action' && item.render){
              text = item.render()
            }
            const obj: any = { children: text, props: {} };
            if (row.mergeRow) {
              obj.props.rowSpan = row.mergeRow;
            }
            else {
              obj.props.rowSpan = 0;
            }
            return obj;
          }
          return { ...item, render }
      };
      return item;
    })
    setmColumn(mColumn);
  }

  // 操作DOM订单头
  const makeOrderInfo = (): void => {
    const { current } = tableRef;
    const orderHeader = current.getElementsByClassName('item-header');
    if (!orderHeader && !itemHeader) return;
    const headerAry = dataSource.filter((item: {header: boolean}) => { return item.header })
    headerAry.forEach((item: any, idx: number) => {
    // orderHeader: { numj: 1, order: 11, buyOrder: 111, createTime: 1111, mark: 11111 },
    const keyAry = itemHeader && Object.keys(itemHeader);
      const td = orderHeader[idx] && orderHeader[idx].firstElementChild;
      if (!td) return;
      const node = keyAry.map((keyItem: string) => {
        return `<span class='item-header-info'>${itemHeader[keyItem]}：${item[keyItem]}</span>`
      })
      td.innerHTML = node;
    })
    return null;
  }

  const rowCN = function (record: {header: boolean}): string {
    if (record.header) {
      return `item-header`
    }
  }

  useEffect(() => {
    markColumn()
  }, [])

  useEffect(() => {
    makeOrderInfo()
  }, [mColumn])

  return (
    <div className="yiku-wrap">
      <Table
        components={{
          table: TableWrap,
          body: {row: Tr}
        }}
        dataSource={dataSource}
        columns={mColumn}
        rowClassName={rowCN}
      />
    </div>
  )
}

export default Yiku;