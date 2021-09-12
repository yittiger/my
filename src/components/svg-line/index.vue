<template>
  <svg :width="`${widthProxy}px`" :height="`${heightProxy}px`" 
  :viewBox="viewBox"
  style="border: 1px solid green">
     
    <path :d="nodePaths" fill="transparent" stroke="blue" :stroke-width="trackSize"/>

    <circle :cx="0" :cy="0" :r="nodeSize" stroke="none" fill="red"> 
      <!-- :path="nodePaths"    -->
      <animateMotion
          :path="nodePaths"   
                begin="0s" dur="5s" repeatCount="indefinite"
                ></animateMotion>
    </circle>
  </svg>
</template>
<script>
// 参数（夹角）
const turnPointCalc = function (deg, w, h) {
  const calcDeg = (90 - (180 - deg)) * Math.PI / 180
  const leng = Math.tan(calcDeg) * h
  return leng
}

export default {
  components: {},
  props: {
    type: {
      type: String,
      default: 'left-top', 
      validator(val) {
        return ['left-top', 'right-top', 'left-bottom', 'right-bottom'].includes(val)
      }
    },
    angle: {
      type: Number,
      default: 90,
      validator(val) {
        return Math.max(90, Math.min(val, 180))
      }
    },
    trackColor: {
      type: String,
      default: 'blue'
    },
    pointColor: {
      type: String,
      default: 'red'
    },
    trackSize: {
      type: Number,
      default: 2
    },
    nodeSize: {
      type: Number,
      default: 3,
      validator(val) {
        return Math.max(2, val)
      }
    },
    width: {
      type: Number,
      default: 200
    },
    height: {
      type: Number,
      default: 50
    }
  },
  data() {
    return {
      widthProxy: this.width,
      heightProxy: this.height
      // line1Points: [
      //   [2, 2],
      //   [LeftTopCalc(120, 200, 50), 2],
      //   [200 - 2, 50 - 2]
      // ]
    }
  },
  computed: {
    halfNodeSize() {
      return Math.max(this.trackSize, this.nodeSize) / 2
    },
    viewBox() {
      return [0, -3, this.widthProxy - 2, this.heightProxy + 2]
    },
    nodeStart() {
      switch (this.type) {
        case 'left-top':
          return [0, 0] 
        case 'right-top':
          return [this.widthProxy, 0] 
        case 'left-bottom':
          return [0, this.heightProxy] 
        case 'right-bottom':
          return [this.widthProxy, this.heightProxy]     
        default:
          return [0, 0]
      }
    },
    linePoints() {
       
      if (this.type === 'left-top') {
        const d = turnPointCalc(this.angle, this.widthProxy, this.heightProxy)
        const turnPoint = [this.widthProxy - d, 0]
        return [[0, 0], turnPoint, [this.widthProxy, this.heightProxy]]
      } else if (this.type === 'right-top') {
        const d = turnPointCalc(this.angle, this.widthProxy, this.heightProxy)
        const turnPoint = [d, 0]
        return [[this.widthProxy, 0], turnPoint, [0, this.heightProxy]]
      } else if (this.type === 'left-bottom') {
        const d = turnPointCalc(this.angle, this.widthProxy, this.heightProxy)
        const turnPoint = [this.widthProxy - d, this.heightProxy - this.nodeSize - this.halfNodeSize]
         return [[0, this.heightProxy - this.nodeSize - this.halfNodeSize], turnPoint, [this.widthProxy, 0]]
      } else if (this.type === 'right-bottom') {
        const d = turnPointCalc(this.angle, this.widthProxy, this.heightProxy)
        const turnPoint = [d, this.heightProxy - this.nodeSize - this.halfNodeSize] 
         return [
           [this.widthProxy - this.nodeSize - this.halfNodeSize, this.heightProxy - this.nodeSize - this.halfNodeSize], 
           turnPoint, 
           [0, 0]
          ]
      } else {
         return [[0, 0], [this.widthProxy, this.heightProxy]]
      }
    },
    nodePaths() { 
      return this.linePoints.map((item, index) => {
        if (index === 0) {
          return `M${item[0]},${item[1]}`
        } else {
          return `L${item[0]},${item[1]}`
        }
      }).join(' ')
    }
  },
  methods: {
    turnPointCalc,
    // LeftTopCalc,
    setData() {
      const {width, height, size} = this
       
      this.w = width
      this.h = size
      this.x = 0
      this.y = (height - size) / 2
      
    }

  },
  created() {
  },
  mounted() {
    console.log(this.angle)
    console.log(turnPointCalc(90, 200, 50))
    console.log(this.viewBox)
    console.log(this.nodeStart)
    console.log(this.linePoints)
    console.log(this.nodePaths)
  }
}
</script>
<style lang="scss" scoped>
</style>