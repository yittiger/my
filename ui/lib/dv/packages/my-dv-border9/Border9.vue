<template>
  <Box class="my-dv-border-9"
       default-width="400px"
       default-height="300px"
       padding="0"
       :class="classes"
       v-bind="$attrs">
    <svg class="my-dv-border__svg" :width="width" :height="height" :style="svgStyle">
      <polygon :fill="fill" :points="`
        4, 0 ${width - 4}, 0 ${width}, 4 ${width}, ${height - 4} ${width - 4}, ${height}
        4, ${height} 0, ${height - 4} 0, 4
      `"/>
    </svg>

    <svg
      width="150px"
      height="150px"
      :key="item"
      v-for="item in border"
      :class="`my-dv-border-9__${item} my-dv-border-9__item`"
    >
      <polygon
        :fill="light"
        points="40, 0 5, 0 0, 5 0, 16 3, 19 3, 7 7, 3 35, 3"
      />
    </svg>
    <BoxContent :padding="$attrs.padding">
      <slot></slot>
    </BoxContent>
  </Box>
</template>

<script>
  import Border from '../../mixins/Border'

  export default {
    name: 'MyDvBorder9',
    mixins: [Border],
    data() {
      return {
        border: ['left-top', 'right-top', 'left-bottom', 'right-bottom']
      }
    },
    computed: {
      svgStyle() {
        return {
          ...this.styles,
          'box-shadow': `inset 0 0 30px 3px ${this.dark}`,
          'border-radius': '15px'
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../../style/vars";

  @include b(dv-border-9) {
    @include e(item) {
      position: absolute;
      display: block;
    }


    @include e(right-top) {
      right: 0;
      transform: rotateY(180deg);
    }
    @include e(left-bottom) {
      bottom: 0;
      transform: rotateX(180deg);
    }
    @include e(right-bottom) {
      right: 0;
      bottom: 0;
      transform: rotateX(180deg) rotateY(180deg);
    }
  }
</style>
