export default {
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: 'default',
      validator(val) {
        return ['default', 'primary', 'normal', 'secondary', 'success',
          'placeholder', 'warning', 'danger'].includes(val)
      }
    }
  },
  computed: {
    textTypeClass() {
      return {
        [`is-${this.type}`]: !!this.type,
        'is-pointer': !!this.$listeners.click
      }
    }
  }
}
