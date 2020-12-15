const config = {
  color: '#1de2ff',
  fill: 'transparent',
  textColor: '#b4e4ff',
  colors: [
    '#1165b2',
    '#0d8888',
    '#398912',
    '#70980c',
    '#b17706',
    '#af620f',
    '#af3b14',
    '#ab181f',
    '#a4226a',
    '#502092',

    '#2a39c3',
    '#2a71c4',
    '#128943',
    '#49b312',
    '#b28f13',
    '#b25010',
    '#bd352c',
    '#a4224a',
    '#6a1a97',
    '#321a97',

    '#1890ff',
    '#13c2c2',
    '#52c41a',
    '#a0d911',
    '#fdaa09',
    '#fa8c16',
    '#fa541c',
    '#f5222d',
    '#eb3197',
    '#722ed1',
    '#2f54eb'
  ]
}

export default {
  props: {
    config: Object
  },
  computed: {
    settings() {
      return {
        ...config,
        ...this.config
      }
    }
  }
}
