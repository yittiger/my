import Box from '../packages/my-dv-box'
import Rect from './Rect'

export default {
  mixins: [Rect],
  components: {
    Box
  },
  props: {
    dark: {
      type: String,
      default() {
        const {globalConfig} = this.page || {}
        return globalConfig?.dark || 'rgba(24,144,255,0.6)'
      }
    },
    light: {
      type: String,
      default() {
        const {globalConfig} = this.page || {}
        return globalConfig?.light || 'rgba(24,144,255,0.3)'
      }
    },
    duration: {
      type: Number,
      default: 3
    },
    reverse: Boolean,
    opacity: {
      type: Number,
      default: 1
    }
  },
  computed: {
    classes() {
      return {
        'my-dv-adorn': true,
        'is-reverse': this.reverse
      }
    },
    styles() {
      return {
        opacity: this.opacity
      }
    }
  }
}
