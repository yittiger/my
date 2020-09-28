const config = {
  dark: 'rgba(24,144,255,0.6)',
  light: 'rgba(24,144,255,0.3)',
  fill: 'transparent',
  textColor: '#b4e4ff',
  colors: [
    '#1890ff',
    '#a0d911',
    '#13c2c2',
    '#fdaa09',
    '#2f54eb',
    '#52c41a',
    '#fa541c',
    '#2a71c4',
    '#f5222d',
    '#eb3197',
    '#722ed1'
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
