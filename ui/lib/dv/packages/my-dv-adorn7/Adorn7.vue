<template>
  <Box class="my-dv-adorn-7"
       :class="classes"
       :style="svgStyle"
       default-width="300px"
       default-height="20px"
       v-bind="$attrs"
       v-on="$listeners">

    <svg width="21px" height="20px">
      <polyline
        stroke-width="4"
        fill="transparent"
        :stroke="light"
        points="10, 0 19, 10 10, 20"
      />
      <polyline
        stroke-width="2"
        fill="transparent"
        :stroke="dark"
        points="2, 0 11, 10 2, 20"
      />
    </svg>
    <span><slot></slot></span>
    <svg width="21px" height="20px">
      <polyline
        stroke-width="4"
        fill="transparent"
        :stroke="light"
        points="11, 0 2, 10 11, 20"
      />
      <polyline
        stroke-width="2"
        fill="transparent"
        :stroke="dark"
        points="19, 0 10, 10 19, 20"
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
      }
    }
  }
</script>

<style lang="scss">
  @import "../../style/vars";

  @include b(dv-adorn-7) {
    text-align: center;
    > span {
      padding: 0 10px;
      font-size: 20px;
      position: relative;
      top: -3px
    }
  }
</style>
