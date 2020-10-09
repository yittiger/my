<template>
  <Box class="my-dv-adorn-13"
       :class="classes"
       :style="styles"
       default-width="200px"
       default-height="40px"
       v-bind="$attrs"
       v-on="$listeners">
    <svg :width="`${width}px`" :height="`${height}px`">
      <path :d="path" fill="transparent" stroke-width="2" :stroke="dark"></path>
    </svg>
    <div class="my-dv-adorn-13__content" :style="{lineHeight:`${height}px`}">
      <slot></slot>
    </div>
  </Box>
</template>

<script>
  import Adorn from '../../mixins/Adorn'

  export default {
    name: 'MyDvAdorn13',
    mixins: [Adorn],
    props: {},
    computed: {
      path() {
        const {width, height} = this
        const r = height / 2
        return `M0 0 L${width - 1 - r} 0 A ${r} ${r} 0 0 1 ${width - 1 - r} ${height} L0 ${height}`
      }
    }
  }
</script>

<style lang="scss">
  @import "../../style/vars";

  @include b(dv-adorn-13) {
    @include when(reverse) {
      > svg {
        transform: rotate(180deg);
      }
    }
    @include e(content) {
      position: absolute;
      left: 0;
      top: 0;
      padding: 0 10px;
      .my-dv-box {
        position: static !important;
      }
    }
  }
</style>
