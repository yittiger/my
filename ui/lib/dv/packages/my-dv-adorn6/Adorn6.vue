<template>
  <Box class="my-dv-adorn-6"
       :class="classes"
       :style="styles"
       default-width="300px"
       default-height="60px"
       v-bind="$attrs"
       v-on="$listeners">
    <svg :width="`${width}px`" :height="`${height}px`">
      <template
        v-for="(x, i) in points">
        <rect
          :key="i"
          :fill="Math.random() > 0.5 ? light : dark"
          :x="x"
          :y="(height-heights[i])/2"
          :width="size"
          :height="heights[i]"
        >
          <animate
            attributeName="y"
            :values="`${(height - minHeights[i]) / 2};${(height-heights[i]) / 2};${(height-minHeights[i]) / 2}`"
            :dur="`${randoms[i]}s`"
            keyTimes="0;0.5;1"
            calcMode="spline"
            keySplines="0.42,0,0.58,1;0.42,0,0.58,1"
            begin="0s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="height"
            :values="`${minHeights[i]};${heights[i]};${minHeights[i]}`"
            :dur="`${randoms[i]}s`"
            keyTimes="0;0.5;1"
            calcMode="spline"
            keySplines="0.42,0,0.58,1;0.42,0,0.58,1"
            begin="0s"
            repeatCount="indefinite"
          />
        </rect>
      </template>
    </svg>
  </Box>
</template>

<script>
  import Adorn from '../../mixins/Adorn'
  import {random} from '../../utils/util'

  export default {
    name: 'MyDvAdorn6',
    mixins: [Adorn],
    props: {
      size: {
        type: Number,
        default: 8
      },
      gap: {
        type: Number,
        default: 2
      }
    },
    data() {
      return {
        rows: 1,
        points: [],
        heights: [],
        minHeights: [],
        randoms: []
      }
    },
    computed: {
      columns() {
        return Math.floor(this.width / (this.size + this.gap))
      }
    },
    methods: {
      setData() {
        this.points = new Array(this.columns).fill(0).map((n, i) => i * (this.size + this.gap))

        const heights = this.heights = new Array(this.columns)
          .fill(0).map(foo =>
            Math.random() > 0.8 ? random(0.7 * this.height, this.height) : random(0.2 * this.height, 0.5 * this.height))

        this.minHeights = new Array(this.columns)
          .fill(0).map((foo, i) => heights[i] * Math.random())

        this.randoms = new Array(this.columns)
          .fill(0).map(foo => Math.random() + 1.5)
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
