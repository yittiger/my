import Box from '../packages/my-dv-box'
import Rect from './Rect'
import Color from './Color'

export default {
  mixins: [Rect, Color],
  inheritAttrs: false,
  components: {
    Box
  },
  props: {
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
