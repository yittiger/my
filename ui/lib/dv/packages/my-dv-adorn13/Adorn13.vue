<template>
  <Box class="my-dv-adorn-13"
       :class="classes"
       :style="styles"
       default-width="200px"
       default-height="40px"
       v-bind="$attrs"
       v-on="$listeners">
    <svg :width="`${width}px`" :height="`${height}px`">
      <path :d="path" fill="transparent" stroke-width="1" :stroke="dark"></path>
      <circle cx="16" :cy="`${height/2}`" r="4" :fill="light">
        <animate attributeName="opacity" values="1;0;1"  :dur="`${duration}s`" repeatCount="indefinite"/>
      </circle>
      <circle cx="16" :cy="`${height/2}`" r="7" fill="transparent" stroke-width="2" :stroke="light">
        <animate attributeName="opacity" values="0;1;0"  :dur="`${duration}s`" repeatCount="indefinite"/>
      </circle>
    </svg>
    <div class="my-dv-adorn-13__content" :style="{lineHeight:`${height}px`,color:light}">
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
        return `M0 1 L${width - r} 1 A ${r} ${r} 0 0 1 ${width - r} ${height - 1} L0 ${height - 1}`
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
      width: 100%;
      height: 100%;
      padding-left: 30px;
      font-size: 18px;
      font-weight: 600;
      margin-top: -2px;
      .my-dv-box {
        position: static !important;
      }
    }
  }
</style>
