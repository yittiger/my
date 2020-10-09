<template>
  <Box class="my-dv-adorn-4"
       :class="classes"
       :style="styles"
       default-width="300px"
       default-height="300px"
       v-bind="$attrs"
       v-on="$listeners">
    <div class="my-dv-adorn-4__container" :style="svgStyle" :class="svgClass">
      <svg :width="`${width}px`" :height="`${height}px`">
        <polyline
          :stroke="dark"
          :points="points"
        />
        <polyline
          class="bold-line"
          :stroke="light"
          :stroke-width="size"
          :stroke-dasharray="dashArray.join(',')"
          :stroke-dashoffset="dashOffset"
          :points="points"
        />
      </svg>
    </div>
  </Box>
</template>

<script>
  import Adorn from '../../mixins/Adorn'

  export default {
    name: 'MyDvAdorn4',
    mixins: [Adorn],
    props: {
      // 线条的宽度
      size: {
        type: Number,
        default: 3
      },
      dashArray: {
        type: Array,
        default() {
          return [20, 80]
        }
      },
      dashOffset: {
        type: Number,
        default: -30
      }
    },
    computed: {
      points() {
        return this.reverse
          ? `0, ${this.height / 2} ${this.width}, ${this.height / 2}`
          : `${this.width / 2}, 0 ${this.width / 2}, ${this.height}`
      },
      svgClass() {
        return this.reverse ? 'reverse' : 'normal'
      },
      svgStyle() {
        return {
          'animation-duration': `${this.duration}s`
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../../style/vars";

  @include b(dv-adorn-4) {

    @include e(container) {
      overflow: hidden;
    }
    .normal {
      animation: ani-height ease-in-out infinite;
    }

    .reverse {
      animation: ani-width ease-in-out infinite;
    }

    @keyframes ani-height {
      0% {
        height: 0%;
      }

      70% {
        height: 100%;
      }

      100% {
        height: 100%;
      }
    }

    @keyframes ani-width {
      0% {
        width: 0%;
      }

      70% {
        width: 100%;
      }

      100% {
        width: 100%;
      }
    }

  }
</style>
