import Box from '../packages/my-dv-box'
import Rect from './Rect'
import BoxContent from '../packages/my-dv-content'
import '../style/border.scss'

export default {
  mixins: [Rect],
  components: {
    Box,
    BoxContent
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
    fill: {
      type: String,
      default() {
        const {globalConfig} = this.page || {}
        return globalConfig?.fill || 'transparent'
      }
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
        'my-dv-border': true,
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
