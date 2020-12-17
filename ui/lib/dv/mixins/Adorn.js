import Box from '../packages/my-dv-box'
import Rect from './Rect'
import Color from './Color'

/**
 * 装饰组件mixin
 */
export default {
  mixins: [Rect, Color],
  inheritAttrs: false,
  components: {
    Box
  },
  /**
   * 属性参数
   * @member props
   * @property {number} [duration] 动画持续时间，单位：秒
   * @property {boolean} [reverse] 翻转 180度
   * @property {number} [opacity=1] 透明度
   * @property {string} [color=#1890FF] 颜色
   */
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
