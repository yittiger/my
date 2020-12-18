import Box from '../packages/my-dv-box'
import Rect from './Rect'
import Color from './Color'

export default {
  mixins: [Rect, Color],
  inheritAttrs: false,
  components: {
    Box
  },
  computed: {
    svgStyle() {
      return {
        zoom: this.width / 1920
      }
    }
  }
}
