<template>
  <Box class="my-dv-border-4"
       default-width="400px"
       default-height="300px"
       padding="0"
       :class="classes"
       v-bind="$attrs">
    <svg class="my-dv-border__svg" :width="width" :height="height" :style="styles">
      <polygon :fill="fill" :points="`
        10, 22 ${width - 22}, 22 ${width - 22}, ${height - 86} ${width - 84}, ${height - 24} 10, ${height - 24}
      `"/>

      <polyline
        class="dv-bb5-line-1"
        fill="transparent"
        :stroke="light"
        :points="`8, 5 ${width - 5}, 5 ${width - 5}, ${height - 100}
          ${width - 100}, ${height - 5} 8, ${height - 5} 8, 5`"
      />
      <polyline
        class="dv-bb5-line-2"
        fill="transparent"
        :stroke="dark"
        :points="`3, 5 ${width - 20}, 5 ${width - 20}, ${height - 60}
          ${width - 74}, ${height - 5} 3, ${height - 5} 3, 5`"
      />
      <polyline class="dv-bb5-line-3" stroke-width="5" :stroke="dark" :points="`50, 13 ${width - 35}, 13`"/>
      <polyline class="dv-bb5-line-4" stroke-width="2" :stroke="dark" :points="`15, 20 ${width - 35}, 20`"/>
      <polyline class="dv-bb5-line-5" stroke-width="2" :stroke="dark"
                :points="`15, ${height - 20} ${width - 110}, ${height - 20}`"/>
      <polyline class="dv-bb5-line-6" stroke-width="5" :stroke="dark"
                :points="`15, ${height - 13} ${width - 110}, ${height - 13}`"/>
    </svg>
    <BoxContent :padding="$attrs.padding">
      <slot></slot>
    </BoxContent>
  </Box>
</template>

<script>
  import Border from '../../mixins/Border'

  export default {
    name: 'MyDvBorder4',
    mixins: [Border]
  }
</script>

<style lang="scss">
  @import "../../style/vars";

  @include b(dv-border-4) {
    .my-dv-content {
      padding: 30px 20px;
    }
  }
</style>
