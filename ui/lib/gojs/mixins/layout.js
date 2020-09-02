import * as layouts from '../layouts/index'

// import go from '../utils/lib'

export default {
  props: {
    onLayoutChange: Function
  },
  methods: {
    layout(type, options) {
      const handler = layouts[type]
      if (handler) {
        this.loading = true
        const setLayout = () => {
          const animatable = this.diagram.animationManager.isEnabled
          if (this.nodes.length > 0 && animatable) {
            this.diagram.animationManager.isEnabled = false
          }
          this.commit(() => {
            this.diagram.layout = handler(options)
            this.load()
            this.onLayoutChange && this.onLayoutChange(type, options)
          })
          this.diagram.zoomToFit()
          this.diagram.animationManager.isEnabled = animatable
          this.loading = false
        }
        clearTimeout(this._layoutId)
        this._layoutId = setTimeout(setLayout, 100)

      }
    }
  }
}
