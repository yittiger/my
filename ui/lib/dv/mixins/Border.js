import Box from '../packages/my-dv-box'
import Rect from './Rect'
import BoxContent from '../packages/my-dv-content'
import Color from './Color'
import '../style/border.scss'

export default {
  mixins: [Rect, Color],
  inheritAttrs: false,
  components: {
    Box,
    BoxContent
  },
  props: {
    fill: {
      type: String,
      default() {
        return this?.page?.settings?.fill || 'transparent'
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
