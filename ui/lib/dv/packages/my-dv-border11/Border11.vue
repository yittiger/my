<template>
  <Box class="my-dv-border-11"
       default-width="400px"
       default-height="300px"
       padding="0"
       :class="classes"
       v-bind="$attrs">
    <svg class="my-dv-border__svg" :width="width" :height="height" :style="styles">
      <path
        :fill="fill"
        :stroke="dark"
        :d="`
          M 5 20 L 5 10 L 12 3  L 60 3 L 68 10
          L ${width - 20} 10 L ${width - 5} 25
          L ${width - 5} ${height - 5} L 20 ${height - 5}
          L 5 ${height - 20} L 5 20
        `"
      />

      <path
        fill="transparent"
        stroke-width="3"
        stroke-linecap="round"
        stroke-dasharray="10, 5"
        :stroke="light"
        :d="`M 16 9 L 61 9`"
      />

      <path
        fill="transparent"
        :stroke="dark"
        :d="`M 5 20 L 5 10 L 12 3  L 60 3 L 68 10`"
      />

      <path
        fill="transparent"
        :stroke="dark"
        :d="`M ${width - 5} ${height - 30} L ${width - 5} ${height - 5} L ${width - 30} ${height - 5}`"
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
    name: 'MyDvBorder11',
    mixins: [Border]
  }
</script>

<style lang="scss">
  @import "../../style/vars";

  @include b(dv-border-11) {

  }
</style>
