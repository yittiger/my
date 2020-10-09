<template>
  <Box class="my-dv-adorn-2"
       :class="classes"
       :style="styles"
       default-width="300px"
       default-height="20px"
       v-bind="$attrs"
       v-on="$listeners">
    <svg :width="`${width}px`" :height="`${height}px`">
      <rect :x="x" :y="y" :width="w" :height="h" :fill="dark">
        <animate
          :attributeName="reverse ? 'height' : 'width'"
          from="0"
          :to="reverse ? height : width"
          :dur="`${duration}s`"
          calcMode="spline"
          keyTimes="0;1"
          keySplines=".42,0,.58,1"
          repeatCount="indefinite"
        />
      </rect>

      <rect :x="x" :y="y" :width="size" :height="size" :fill="light">
        <animate
          :attributeName="reverse ? 'y' : 'x'"
          from="0"
          :to="reverse ? height : width"
          :dur="`${duration}s`"
          calcMode="spline"
          keyTimes="0;1"
          keySplines="0.42,0,0.58,1"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  </Box>
</template>

<script>
  import Adorn from '../../mixins/Adorn'

  export default {
    name: 'MyDvAdorn2',
    mixins: [Adorn],
    props: {
      // 线条的宽度
      size: {
        type: Number,
        default: 1
      }
    },
    data() {
      return {
        w: 0,
        h: 0,
        x: 0,
        y: 0
      }
    },
    methods: {
      setData() {
        const {reverse, width, height, size} = this
        if (reverse) {
          this.w = size
          this.h = height
          this.x = (width - size) / 2
          this.y = 0
        } else {
          this.w = width
          this.h = size
          this.x = 0
          this.y = (height - size) / 2
        }
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
