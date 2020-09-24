import Box from '../packages/Box'
import Rect from './Rect'
import BoxContent from '../packages/BoxContent'

export default {
  mixins: [Rect],
  components: {
    Box,
    BoxContent
  },
  props: {
    dark: {
      type: String,
      default: 'rgba(35,95,167,0.5)'
    },
    light: {
      type: String,
      default: 'rgba(79,210,221,0.5)'
    },
    fill: {
      type: String,
      default: 'transparent'
    },
    reverse: Boolean
  },
  computed: {
    classes() {
      return {
        'my-dv-border': true,
        'is-reverse': this.reverse
      }
    }
  }
}
