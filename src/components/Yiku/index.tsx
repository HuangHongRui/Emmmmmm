/**
 * @description 这是一个表单
 * @author Leo <xingfengshuo.leo@gmail.com>
 * @example
 */
import React, { useState, useEffect, useRef } from 'react';
import { Table, Typography } from 'antd';
import './index.sass';

interface yikuProps {
  columns: {
    dataIndex: string
  }[],
  dataSource: {}[],
  mergeColumns: string[]
}

const Yiku = (props: yikuProps) => {
  const [ mData, setmData ] = useState([]);
  const [ mColumn, setmColumn ] = useState([]);
  const { columns, dataSource, mergeColumns }: any = props;

  // REF
  const tableRef = useRef(null);
  const TableWrap = (props: any) => <table ref={tableRef} {...props} />;
  const Tr = (props: any) => {
    const { className, children } = props;
    if (className.includes('order-header')) {
      return (
        <tr className="order-header">
          <td colSpan={children.length}> 123 </td>
        </tr>
      )
    }
    else return <tr {...props}/>;
  }

  // 处理数据
  const markData = () => {
    const newAry: any = [];
    dataSource.forEach((item: any, index: number) => {
      const header = item['orderHeader'];
      const info = item['orderInfo'];
      const content = item['orderList'];
      Object.keys(content).forEach((ite: any, idx) => {
        let iteContent = content[ite];
        if (ite == 0) {
          newAry.push(Object.assign(header, {rowSpan: 1}, {key: `info-${index}-${idx} order-header`}))
          Object.assign(iteContent, info, {rowSpan: content.length})
        }
        Object.assign(iteContent, {key: `${index}-${idx}`})
        newAry.push(iteContent)
      })
    })
    setmData(newAry);
  }

  // 处理表头结构
  const markColumn = () => {
    const mColumn = columns.map((item: any) => {
      if (mergeColumns.includes(item['dataIndex'])) {
        const render = (value: any, row: any) => {
          const obj: any = { children: value, props: {} };
          if (row.rowSpan) {
            obj.props.rowSpan = row.rowSpan;
          }
          else {
            obj.props.rowSpan = 0;
          }
          return obj;
        }
        return {...item, render}
      };
      return item;
    })
    setmColumn(mColumn);
  }

  // 操作DOM订单头
  const makeOrderInfo = (): void => {
    const {current} = tableRef;
    const orderHeader = current.getElementsByClassName('order-header');
    dataSource.forEach((item: any, idx: number) => {
    // orderHeader: { numj: 1, order: 11, buyOrder: 111, createTime: 1111, mark: 11111 },
    const {numj, order, buyOrder, createTime, mark} = item.orderHeader;
      const td = orderHeader[idx] && orderHeader[idx].firstChild;
      if (!td) return;
      td.innerHTML = `
        <span> 标准订单号：${numj} </span>
        <span> 原始订单号：${order} </span>
        <span> 采购订单号：${buyOrder} </span>
        <span> 创建时间：${createTime} </span>
        <span> 备注：${mark} </span>
      `
      console.log(td)
    })
    return null;
  }

  useEffect(() => {
    markData();
  }, [])

  useEffect(() => {
    markColumn()
  }, [mData])

  useEffect(() => {
    makeOrderInfo()
  }, [mColumn])

  return (
    <div className="yiku-wrap">
      <Table
        components={{ table: TableWrap, body: {row: Tr} }}
        columns={mColumn}
        dataSource={mData}
        rowClassName={function(record, index): string {
          return `cl-${record.key}`
        }}
        onRow={record => {
          // console.log(record);
          record
          return {}
        }}
      />
    </div>
  )
}

export default Yiku;