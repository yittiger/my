import {addResizeListener, removeResizeListener} from 'element-ui/src/utils/resize-event'

export default {
  inject: ['page'],
  data() {
    return {
      width: 0,
      height: 0
    }
  },
  methods: {
    updateSize() {
      const rect = this.$el.getBoundingClientRect()
      const {widthScale, heightScale} = this.page
      this.width = rect.width / widthScale
      this.height = rect.height / heightScale
      this.$emit('resize', [this.width, this.height])
    }
  },
  mounted() {
    this.updateSize()
    addResizeListener(this.$el, this.updateSize)
  },
  beforeDestroy() {
    removeResizeListener(this.$el, this.updateSize)
  }
}
