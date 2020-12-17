<template>
  <Box class="my-dv-adorn-7"
       :class="classes"
       :style="svgStyle"
       default-width="300px"
       default-height="20px"
       v-bind="$attrs"
       v-on="$listeners">

    <svg width="21px" :height="`${height}px`">
      <polyline
        stroke-width="4"
        fill="transparent"
        :stroke="dark"
        :points="`10, 0 19, ${height/2} 10, ${height}`"
      />
      <polyline
        stroke-width="2"
        fill="transparent"
        :stroke="light"
        :points="`2, 0 11, ${height/2} 2, ${height}`"
      />
    </svg>
    <span :style="spanStyle"><slot></slot></span>
    <svg width="21px" :height="`${height}px`">
      <polyline
        stroke-width="4"
        fill="transparent"
        :stroke="dark"
        :points="`11, 0 2, ${height/2} 11, ${height}`"
      />
      <polyline
        stroke-width="2"
        fill="transparent"
        :stroke="light"
        :points="`19, 0 10, ${height/2} 19, ${height}`"
      />
    </svg>

  </Box>
</template>

<script>
  import Adorn from '../../mixins/Adorn'

  export default {
    name: 'MyDvAdorn7',
    mixins: [Adorn],
    props: {},
    computed: {
      svgStyle() {
        return {
          ...this.styles,
          'line-height': `${this.height}px`
        }
      },
      spanStyle() {
        if (this.$slots.default) return null
        return {
          width: `${this.width - 60}px`
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../../style/vars";

  @include b(dv-adorn-7) {
    text-align: center;
    svg {
      display: inline-block;
    }
    > span {
      padding: 0 10px;
      font-size: 20px;
      position: relative;
      vertical-align: top;
      display: inline-block;
      font-weight: 600;

      .my-dv-box {
        position: static !important;
      }
    }
  }
</style>
