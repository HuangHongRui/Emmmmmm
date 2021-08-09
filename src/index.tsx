import React from "react";
import ReactDOM from "react-dom";
import Demo from "./components/Demo";
import Yiku from "./components/Yiku";
import 'antd/dist/antd.css';

import { Space } from 'antd';
import { column, data, mergeColumns, valueEnum } from './components/Yiku/config';



const actionDOM = (value: any, row: any) => {
  return(
  <Space size="middle">
    <a> 重推 </a>
    <a> 查看订单 </a>
    <a> 关闭订单 </a>
  </Space>
)}

column.push({
    title: '操作',
    key: 'action',
    align: 'center',
    dataIndex: 'action',
    render: actionDOM,
} as any)

ReactDOM.render(
  <div>
    {/* <Demo demo='123'/> */}

    <Yiku
      columns={column}
      dataSource={data}
      mergeColumns={mergeColumns}
      itemHeader={valueEnum}
    />

  </div>,
  document.getElementById("root")
);