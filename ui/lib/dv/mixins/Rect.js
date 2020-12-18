import {addResizeListener, removeResizeListener} from 'element-ui/lib/utils/resize-event'

export default {
  inject: {
    page: {default: null}
  },
  data() {
    return {
      width: 0,
      height: 0
    }
  },
  methods: {
    resize() {
      const rect = this.$el?.getBoundingClientRect()
      if (!rect) return
      const {widthScale = 1, heightScale = 1} = this.page || {}
      this.width = rect.width / widthScale
      this.height = rect.height / heightScale
      this.$emit('resize', [this.width, this.height])
    }
  },
  mounted() {
    this.resize()
    addResizeListener(this.$el, this.resize)
  },
  beforeDestroy() {
    removeResizeListener(this.$el, this.resize)
  }
}
