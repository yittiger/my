import {getRgbaValue} from '../utils/color'

export default {
  props: {
    color: {
      type: String,
      default() {
        return this?.page?.settings?.color || '#1890FF'
      }
    }
  },
  computed: {
    dark() {
      const color = this.color
      const colorArray = getRgbaValue(color)
      colorArray[3] = 0.3
      return `rgba(${colorArray.join(',')})`
    },
    light() {
      const color = this.color
      const colorArray = getRgbaValue(color)
      colorArray[3] = 0.6
      return `rgba(${colorArray.join(',')})`
    }
  }
}
