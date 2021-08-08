const headerData = [
  {
    title: '生成异常',
    dataIndex: 'error',
  },
  {
    title: '订单接口推送异常',
    dataIndex: 'orderError',
  },
  {
    title: '待重推订单',
    dataIndex: 'waitOrder',
  },
  {
    title: '申报异常',
    dataIndex: 'applyError',
  },
  {
    title: '清关异常',
    dataIndex: 'clearanceError',
  },
  {
    title: '物流接口回传异常',
    dataIndex: 'callbackError',
  },
  {
    title: '物流异常',
    dataIndex: 'logisticeError',
  },
  {
    title: '签收异常',
    dataIndex: 'signError',
  },
  {
    title: '操作',
    dataIndex: 'action',
  }
];

const bodyData = [
  {
    orderHeader: { num: 1, order: 11, buyOrder: 111, createTime: 1111, mark: 11111 },
    orderSame: { orderPay: '$43', status: '代付款', sales: '无', chanel: '渠道', settle: '$99', content: '异常内容' },
    orderList: [
      {title: '商品1',sku: '编码', num: '2', price: '$123'},
      {title: '商品2',sku: '编码', num: '2', price: '$123'},
      {title: '商品3',sku: '编码', num: '2', price: '$123'}
    ]
  },
  // [{
  //   key: '1',
  //   name: '胡彦斌',
  //   age: 32,
  //   address: '西湖区湖底公园1号',
  // },
  // {
  //   key: '2',
  //   name: '胡彦祖',
  //   age: 42,
  //   address: '西湖区湖底公园1号',
  // }],
]


export { headerData, bodyData };





// <table>
//   {/* 头部 */}
//   <thead>
//     <tr>
//       {headerData.map(item => <th key={item.dataIndex} children={item.title} />)}
//     </tr>
//   </thead>

//   {/* 内容 */}
//   <tbody>

//     {bodyData.map(pItem => {
//       const { orderList, orderSame }: any = pItem;
//       const len = orderList.length;

//       return orderList.map((cItem: { [x: string]: React.ReactNode; }, idx: number) => {
//         return (
//           <tr>
//             {Object.keys(cItem).map(ccItem => {
//               return <td children={cItem[ccItem]}/>
//             })}
//             {!idx && Object.keys(orderSame).map(sameItem => {
//               return <td rowSpan={len} children={orderSame[sameItem]}/>
//             })}
//           </tr>
//         )

//       })

//     })}

//   </tbody>
// </table>