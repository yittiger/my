<template>
  <Box class="my-dv-border-5" :class="classes" v-bind="$attrs">
    <svg class="my-dv-border__svg" :width="width" :height="height" :style="styles">
      <polygon :fill="fill" :points="`
        9, 7 ${width - 9}, 7 ${width - 9}, ${height - 7} 9, ${height - 7}
      `"/>

      <circle :fill="dark" cx="5" cy="5" r="2"/>
      <circle :fill="dark" :cx="width - 5" cy="5" r="2"/>
      <circle :fill="dark" :cx="width - 5" :cy="height - 5" r="2"/>
      <circle :fill="dark" cx="5" :cy="height - 5" r="2"/>
      <polyline :stroke="light" :points="`10, 4 ${width - 10}, 4`"/>
      <polyline :stroke="light" :points="`10, ${height - 4} ${width - 10}, ${height - 4}`"/>
      <polyline :stroke="light" :points="`5, 70 5, ${height - 70}`"/>
      <polyline :stroke="light" :points="`${width - 5}, 70 ${width - 5}, ${height - 70}`"/>
      <polyline :stroke="light" :points="`3, 10, 3, 50`"/>
      <polyline :stroke="light" :points="`7, 30 7, 80`"/>
      <polyline :stroke="light" :points="`${width - 3}, 10 ${width - 3}, 50`"/>
      <polyline :stroke="light" :points="`${width - 7}, 30 ${width - 7}, 80`"/>
      <polyline :stroke="light" :points="`3, ${height - 10} 3, ${height - 50}`"/>
      <polyline :stroke="light" :points="`7, ${height - 30} 7, ${height - 80}`"/>
      <polyline :stroke="light" :points="`${width - 3}, ${height - 10} ${width - 3}, ${height - 50}`"/>
      <polyline :stroke="light" :points="`${width - 7}, ${height - 30} ${width - 7}, ${height - 80}`"/>
    </svg>
    <BoxContent>
      <slot></slot>
    </BoxContent>
  </Box>
</template>

<script>
  import Border from '../../mixins/Border'

  export default {
    name: 'MyDvBorder5',
    mixins: [Border]
  }
</script>

<style lang="scss">
  @import "../../style/vars";

  @include b(dv-border-5) {
    > polyline {
      fill: none;
    }
  }
</style>
