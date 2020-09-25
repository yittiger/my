export default {
  props: {
    icon: [String, Object]
  },
  computed: {
    iconProps() {
      if (!this.icon) return null
      return typeof this.icon === 'object'
        ? this.icon
        : {name: this.icon}
    }
  }
}
