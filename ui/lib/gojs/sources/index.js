export const sources = [
  {
    name: '社交',
    source: [
      'QQ1.png',
      'QQ2.png',
      'QQ群1.png',
      'QQ群2.png',
      '人人.png',
      '微信1.png',
      '微信2.png',
      '微博.png',
      '手机.png',
      '朋友圈.png',
      '易信.png',
      '电话.png',
      '阿里旺旺.png',
      '陌陌.png',
      '飞信.png'
    ]
  },
  {
    name: '人员',
    source: [
      '账户.png',
      '身份证.png',
      '一群人1.png',
      '一群人2.png',
      '一群人3.png',
      '一群人4.png',
      '人员1.png',
      '人员2.png',
      '人员3.png',
      '人员4.png',
      '女士1.png',
      '女士2.png',
      '家族.png',
      '揽件人.png',
      '男士1.png',
      '男士2.png',
      '逃犯.png'
    ]
  },
  {
    name: '交易',
    source: ['ATM.png', '信用卡.png', '支付宝.png', '现金.png', '银行卡.png']
  },
  {
    name: '活动',
    source: [
      'completed.png',
      '个人电脑.png',
      '位置1.png',
      '位置2.png',
      '信息.png',
      '包裹.png',
      '收发地址.png',
      '文档.png',
      '查询.png',
      '档案.png',
      '汽车.png',
      '银行.png',
      '邮件.png',
      '飞机.png',
      '驾照.png'
    ]
  },
  {
    name: '设施',
    source: ['公司.png', '公寓.png', '电信基站.png', '物流点部.png', '酒店.png']
  }
]

export function getSources({
  groups = sources,
  column = 3,
  rowHeight = 120,
  params = {}
}) {
  const arr = []
  if (groups instanceof Array) {
    groups.forEach(cate => {
      const height = Math.ceil(cate.source.length / column) * rowHeight
      arr.push({
        name: cate.name,
        height,
        source: cate.source.map(pic => {
          const name = pic.replace(/\.[\w]+$/, '')
          return {
            pic,
            text: name,
            ...(typeof params === 'function' ? params(name) : params)
          }
        })
      })
    })
  }
  return arr
}
