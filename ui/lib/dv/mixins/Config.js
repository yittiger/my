const config = {
  dark: 'rgba(24,144,255,0.6)',
  light: 'rgba(24,144,255,0.3)',
  fill: 'transparent',
  colors: []
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
