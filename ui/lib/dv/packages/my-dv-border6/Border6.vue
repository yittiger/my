<template>
  <Box class="my-dv-border-6"
       default-width="400px"
       default-height="300px"
       padding="0"
       :class="classes"
       v-bind="$attrs">
    <svg class="my-dv-border__svg" :width="width" :height="height" :style="svgStyle">
      <polyline class="line-width-2" :stroke="dark" :points="`0, 25 0, 0 25, 0`"/>
      <polyline class="line-width-2" :stroke="dark" :points="`${width - 25}, 0 ${width}, 0 ${width}, 25`"/>
      <polyline class="line-width-2" :stroke="dark"
                :points="`${width - 25}, ${height} ${width}, ${height} ${width}, ${height - 25}`"/>
      <polyline class="line-width-2" :stroke="dark" :points="`0, ${height - 25} 0, ${height} 25, ${height}`"/>

      <polyline class="line-width-5" :stroke="light" :points="`0, 10 0, 0 10, 0`"/>
      <polyline class="line-width-5" :stroke="light" :points="`${width - 10}, 0 ${width}, 0 ${width}, 10`"/>
      <polyline class="line-width-5" :stroke="light"
                :points="`${width - 10}, ${height} ${width}, ${height} ${width}, ${height - 10}`"/>
      <polyline class="line-width-5" :stroke="light" :points="`0, ${height - 10} 0, ${height} 10, ${height}`"/>

    </svg>
    <BoxContent :padding="$attrs.padding">
      <slot></slot>
    </BoxContent>
  </Box>
</template>

<script>
  import Border from '../../mixins/Border'

  export default {
    name: 'MyDvBorder6',
    mixins: [Border],
    computed: {
      svgStyle() {
        return {
          ...this.styles,
          'box-shadow': 'inset 0 0 40px rgba(255,255,255,0.05)',
          background: this.fill
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../../style/vars";

  @include b(dv-border-6) {
    polyline {
      fill: none;
      stroke-linecap: round;
    }

    .line-width-2 {
      stroke-width: 3;
    }

    .line-width-5 {
      stroke-width: 6;
    }

  }
</style>
