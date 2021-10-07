import responsive, {responsiveArray} from '$ui/utils/responsive'
const defaultCol = 3

export default { 
  props: {
    columns: {
      type: [Number, Object],
      default: defaultCol,
      validator(val) {
        return typeof val === 'number' ? 24 % val === 0 : true
      }
    }
  },
  data() {
    return {
      currentColumn: defaultCol,
      screens: {}
    }
  },
  watch: {
    columns: {
      immediate: true,
      handler() {
        this.setupResponsive()
        this.currentColumn = this.getResponsiveValue()
        
      }
    },
    screens() {
      this.currentColumn = this.getResponsiveValue()
    }
  }, 
  methods: {
    setupResponsive() {
      this.token && responsive.off(this.token)

      // 参数是对象类型，即开启响应式
      if (typeof this.columns !== 'object') return

      this.token = responsive.on(screens => {
        this.screens = screens
        
      })
    },
    // 获取当前响应式的列数
    getResponsiveValue() {
      const columns = this.columns
      const defaultValue = defaultCol
      
      if (!columns) return defaultValue
      // 参数是对象类型，即开启响应式
      if (typeof columns === 'object') {
        for (let i = 0; i < responsiveArray.length; i++) {
          const breakpoint = responsiveArray[i]
          if (this.screens[breakpoint]) {
            return columns[breakpoint] || defaultValue
          }
        }
      }
      // 数字类型
      return columns
    }
  },
  mounted() {
    console.log(responsiveArray)
  }
}
 