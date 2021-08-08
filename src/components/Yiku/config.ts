const column = [
  {
    title: '商品SKU1',
    dataIndex: 'skuName',
    key: 'skuName',
  },
  {
    title: 'SKU编码',
    dataIndex: 'skuCode',
    key: 'skuCode',
  },
  {
    title: '数量',
    dataIndex: 'num',
    key: 'num',
  },
  {
    title: '单价',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: '订单支付金额',
    dataIndex: 'paySum',
    key: 'paySum',
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '售后',
    dataIndex: 'sale',
    key: 'sale',
  },
  {
    title: '订单渠道',
    dataIndex: 'qudao',
    key: 'qudao',
  },
  {
    title: '渠道结算金额',
    dataIndex: 'jine',
    key: 'jine',
  },
  {
    title: '异常内容',
    dataIndex: 'err',
    key: 'err',
  },
  {
    title: '操作',
    key: 'action',
    dataIndex: 'action',
    // render: (text: any, record:any) => (
    //   <Space size="middle">
    //     <a>Invite {record.name}</a>
    //     <a>Delete</a>
    //   </Space>
    // ),
  },
];

const mergeColumns = [ 'paySum', 'status', 'sale', 'qudao', 'jine', 'err', 'action' ];

const data = [
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

const datax= [
    { pid: 566, num: 1, order: 11, buyOrder: 111, createTime: 1111, mark: 11111 },
    { pid: 566, kuName: 4, skuCode: 2, num: 3, price: 4, paySum: 5, status: 6, sale: 6, qudao: 6, jine: 6, err: 6, action: 6 },
    { pid: 566, kuName: 5, skuCode: 2, num: 3, price: 4 },
    { pid: 566, kuName: 9, skuCode: 2, num: 3, price: 4 },
    { pid: 666, num: 1, order: 11, buyOrder: 111, createTime: 1111, mark: 11111 },
    { pid: 666, kuName: 1, skuCode: 2, num: 3, price: 4, paySum: 5, status: 6, sale: 6, qudao: 6, jine: 6, err: 6, action: 6 },
    { pid: 666, kuName: 2, skuCode: 2, num: 3, price: 4 },
    { pid: 666, kuName: 3, skuCode: 2, num: 3, price: 4 },
]

export { column, data, mergeColumns };