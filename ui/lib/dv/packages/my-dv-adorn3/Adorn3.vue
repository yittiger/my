<template>
  <Box class="my-dv-adorn-3"
       :class="classes"
       :style="styles"
       default-width="300px"
       default-height="20px"
       v-bind="$attrs"
       v-on="$listeners">
    <svg :width="`${width}px`" :height="`${height}px`">
      <template
        v-for="(point, i) in points"
      >
        <rect
          :key="i"
          :fill="dark"
          :x="point[0]"
          :y="point[1]"
          :width="size"
          :height="size"
        >
          <animate
            v-if="Math.random() > 0.6"
            attributeName="fill"
            :values="`${[dark, 'transparent'].join(';')}`"
            :dur="Math.random() + 1 + 's'"
            :begin="Math.random() * 2"
            repeatCount="indefinite"
          />
        </rect>
      </template>
    </svg>
  </Box>
</template>

<script>
  /**
   * 装饰组件
   */
  import Adorn from '../../mixins/Adorn'

  export default {
    name: 'MyDvAdorn3',
    mixins: [Adorn],
    /**
     * 属性参数
     * @member props
     * @property {number} [duration] 动画持续时间，单位：秒
     * @property {boolean} [reverse] 翻转 180度
     * @property {number} [opacity=1] 透明度
     * @property {string} [color=#1890FF] 颜色
     * @property {number} [size=5] 格子尺寸，单位：px
     * @property {number} [size=5] 格子间距，单位：px
     */
    props: {
      size: {
        type: Number,
        default: 5
      },
      gap: {
        type: Number,
        default: 5
      }
    },
    data() {
      return {
        points: []
      }
    },
    computed: {
      rows() {
        return Math.floor(this.height / (this.size + this.gap))
      },
      columns() {
        return Math.floor(this.width / (this.size + this.gap))
      }
    },
    methods: {
      createPoints() {
        const {rows, columns, gap, size} = this
        const grid = gap + size
        const points = new Array(rows)
          .fill(0)
          .map((foo, i) =>
            new Array(columns)
              .fill(0)
              .map((foo, j) => [
                grid * j, grid * i
              ]))

        return points.reduce((all, item) => [...all, ...item], [])
      },
      setData() {
        this.points = this.createPoints()
      }
    },
    mounted() {
      this.setData()
      this.$on('resize', this.setData)
    },
    beforeDestroy() {
      this.$off('resize', this.setData)
    }
  }
</script>
