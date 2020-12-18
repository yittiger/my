<template>
  <Box class="my-dv-adorn-11"
       :class="classes"
       :style="styles"
       default-width="300px"
       default-height="60px"
       v-bind="$attrs"
       v-on="$listeners">
    <svg :width="`${width}px`" :height="`${height}px`">
      <polygon
        :fill="fade(dark, 10)"
        :stroke="dark"
        :points="`20 10, 25 4, 55 4 60 10`"
      />

      <polygon
        :fill="fade(dark, 10)"
        :stroke="dark"
        :points="`20 ${height - 10}, 25 ${height - 4}, 55 ${height - 4} 60 ${height - 10}`"
      />

      <polygon
        :fill="fade(dark, 10)"
        :stroke="dark"
        :points="`${width - 20} 10, ${width - 25} 4, ${width - 55} 4 ${width - 60} 10`"
      />

      <polygon
        :fill="fade(dark, 10)"
        :stroke="dark"
        :points="`${width - 20} ${height - 10}, ${width - 25} ${height - 4}, ${width - 55} ${height - 4} ${width - 60} ${height - 10}`"
      />

      <polygon
        :fill="fade(light, 20)"
        :stroke="light"
        :points="`
          20 10, 5 ${height / 2} 20 ${height - 10}
          ${width - 20} ${height - 10} ${width - 5} ${height / 2} ${width - 20} 10
        `"
      />

      <polyline
        fill="transparent"
        :stroke="fade(light, 70)"
        :points="`25 18, 15 ${height / 2} 25 ${height - 18}`"
      />

      <polyline
        fill="transparent"
        :stroke="fade(light, 70)"
        :points="`${width - 25} 18, ${width - 15} ${height / 2} ${width - 25} ${height - 18}`"
      />
    </svg>
    <div class="my-dv-adorn-11__content">
      <slot></slot>
    </div>
  </Box>
</template>

<script>
  import Adorn from '../../mixins/Adorn'
  import {fade} from '../../utils/color'

  export default {
    name: 'MyDvAdorn11',
    mixins: [Adorn],
    data() {
      return {}
    },
    methods: {
      fade
    }
  }
</script>
<style lang="scss">
  @import "../../style/vars";

  @include b(dv-adorn-11) {
    > svg {
      position: absolute;
    }
    @include e(content) {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      .my-dv-box {
        position: static !important;
      }
    }
  }
</style>
