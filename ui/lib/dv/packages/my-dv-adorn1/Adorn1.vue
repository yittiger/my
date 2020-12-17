<template>
  <Box class="my-dv-adorn-1"
       :class="classes"
       :style="styles"
       default-width="300px"
       default-height="50px"
       v-bind="$attrs"
       v-on="$listeners">
    <svg :width="`${width}px`" :height="`${height}px`">
      <template v-for="(point, i) in points">
        <rect
          v-if="Math.random() > 0.6"
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
            :values="`${dark};transparent`"
            dur="1s"
            :begin="Math.random() * 2"
            repeatCount="indefinite"
          />
        </rect>
      </template>
      <rect
        v-if="rect[0]"
        :fill="light"
        :x="rect[0][0] + halfSize"
        :y="rect[0][1] + halfSize"
        :width="size * 2"
        :height="size * 2"
      >
        <animate
          attributeName="width"
          :values="`0;${size * 2}`"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="height"
          :values="`0;${size * 2}`"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="x"
          :values="`${rect[0][0]+halfSize};${rect[0][0]+halfSize - size}`"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          :values="`${rect[0][1]+halfSize};${rect[0][1]+halfSize - size}`"
          dur="2s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        v-if="rect[1]"
        :fill="light"
        :x="rect[1][0] + size - length"
        :y="rect[1][1] + halfSize - size"
        :width="length"
        :height="size * 2"
      >
        <animate
          attributeName="width"
          :values="`0;${length};0`"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="x"
          :values="`${rect[1][0] + size};${rect[1][0] + size - length};${rect[1][0] + size}`"
          dur="2s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  </Box>
</template>

<script>
  /**
   * 装饰组件
   */
  import Adorn from '../../mixins/Adorn'

  export default {
    name: 'MyDvAdorn1',
    mixins: [Adorn],
    /**
     * 属性参数
     * @member props
     * @property {number} [duration] 动画持续时间，单位：秒
     * @property {boolean} [reverse] 翻转 180度
     * @property {number} [opacity=1] 透明度
     * @property {string} [color=#1890FF] 颜色
     * @property {number} [size=5] 格子尺寸，单位：px
     * @property {number} [gap=5] 格子间距，单位: px
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
        points: [],
        rect: []
      }
    },
    computed: {
      rows() {
        return Math.floor(this.height / (this.size + this.gap))
      },
      columns() {
        return Math.floor(this.width / (this.size + this.gap))
      },
      length() {
        return this.width / 4
      },
      halfSize() {
        return this.size / 2
      }
    },
    watch: {
      $props: {
        deep: true,
        handler() {
          this.setData()
        }
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
      createRect(points) {
        const {rows, columns} = this
        const mid = Math.floor(rows / 2)
        const rect1 = points[mid * columns - 1]
        const rect2 = points[mid * columns - 3]
        return [rect1, rect2]
      },
      setData() {
        this.points = this.createPoints()
        this.rect = this.createRect(this.points)
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

