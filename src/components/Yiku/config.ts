const column = [
  {
    title: '商品SKU1',
    dataIndex: 'skuName',
    key: 'skuName',
    align: 'center'
  },
  {
    title: 'SKU编码',
    dataIndex: 'skuCode',
    key: 'skuCode',
    align: 'center'
  },
  {
    title: '数量',
    dataIndex: 'num',
    key: 'num',
    align: 'center'
  },
  {
    title: '单价',
    dataIndex: 'price',
    key: 'price',
    align: 'center'
  },
  {
    title: '订单支付金额',
    dataIndex: 'paySum',
    key: 'paySum',
    align: 'center'
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    align: 'center'
  },
  {
    title: '售后',
    dataIndex: 'sale',
    key: 'sale',
    align: 'center',
  },
  {
    title: '订单渠道',
    dataIndex: 'qudao',
    key: 'qudao',
    align: 'center'
  },
  {
    title: '渠道结算金额',
    dataIndex: 'jine',
    key: 'jine',
    align: 'center'
  },
  {
    title: '异常内容',
    dataIndex: 'err',
    key: 'err',
    align: 'center'
  },
  // {
  //   title: '操作',
  //   key: 'action',
  //   dataIndex: 'action',
  //   // render: (text: any, record:any) => (
  //   //   <Space size="middle">
  //   //     <a>Invite {record.name}</a>
  //   //     <a>Delete</a>
  //   //   </Space>
  //   // ),
  // },
];

const mergeColumns = [ 'paySum', 'status', 'sale', 'qudao', 'jine', 'err', 'action' ];

const data1 = [
  {
    orderHeader: { numj: 1, order: 11, buyOrder: 111, createTime: 1111, mark: 11111 },
    orderInfo: { paySum: 5, status: 6, sale: 6, qudao: 6, jine: 6, err: 6 },
    orderList: [
      { skuName: 3, skuCode: 2, num: 3, price: 4 },
      { skuName: 3, skuCode: 2, num: 3, price: 4 },
      { skuName: 3, skuCode: 2, num: 3, price: 4 },
    ]
  },
  {
    orderHeader: { numj: 1, order: 11, buyOrder: 111, createTime: 1111, mark: 11111 },
    orderInfo: { paySum: 5, status: 6, sale: 6, qudao: 6, jine: 6, err: 66 },
    orderList: [
      { skuName: 3, skuCode: 2, num: 3, price: 4 },
      { skuName: 3, skuCode: 2, num: 3, price: 4 },
      { skuName: 3, skuCode: 2, num: 3, price: 4 },
    ]
  },
]

// mergeRow: 合并行数
// 依赖 sid
const data = [
  { key: 1, pid:1, mergeRow: 1, header: true, numj: 1, order: 11, buyOrder: 111, createTime: 1111, mark: 11111 },
  { key: 2, pid:1, sid: 11, mergeRow: 3, skuName: 3, skuCode: 2, num: 3, price: 4, paySum: 5, status: 6, sale: 6, qudao: 6, jine: 6, err: 6 },
  { key: 3, pid:1, sid: 12, skuName: 3, skuCode: 2, num: 3, price: 4 },
  { key: 4, pid:1, sid: 13, skuName: 3, skuCode: 2, num: 3, price: 4 },

  { key: 5, pid:2, header: true, mergeRow: 1, numj: 1, order: 11, buyOrder: 111, createTime: 1111, mark: 11111 },
  { key: 6, pid:2, sid: 21, mergeRow: 2, skuName: 1, skuCode: 1, num: 3, price: 4, paySum: 5, status: 6, sale: 6, qudao: 6, jine: 6, err: 6 },
  { key: 7, pid:2, sid: 22, skuName: 2, skuCode: 2, num: 3, price: 4 },
]

const valueEnum= {
  numj: '标准订单号',
  order: '原始订单号',
  buyOrder: '采购订单号',
  createTime: '创建时间',
  mark: '备注'
}

export { column, data, mergeColumns, valueEnum };