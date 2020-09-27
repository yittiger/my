export default {
  props: {
    dark: {
      type: String,
      default() {
        return this?.page?.settings?.dark || 'rgba(4,165,252,0.9)'
      }
    },
    light: {
      type: String,
      default() {
        return this?.page?.settings?.light || 'rgba(24,144,255,0.3)'
      }
    }
  }
}
