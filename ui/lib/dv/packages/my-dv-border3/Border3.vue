<template>
  <Box class="my-dv-border-3"
       default-width="400px"
       default-height="300px"
       padding="0"
       :class="classes"
       v-bind="$attrs">
    <svg :class="`my-dv-border__svg ${reverse && 'is-reverse'}`" :style="styles" :width="width" :height="height">
      <polygon :fill="fill" :points="`
        ${width - 15}, 22 170, 22 150, 7 40, 7 28, 21 32, 24
        16, 42 16, ${height - 32} 41, ${height - 7} ${width - 15}, ${height - 7}
      `"/>
      <polyline class="dv-bb4-line-1"
                :stroke="light"
                fill="transparent"
                :points="`145, ${height - 5} 40, ${height - 5} 10, ${height - 35}
          10, 40 40, 5 150, 5 170, 20 ${width - 15}, 20`"
      />
      <polyline
        :stroke="dark"
        fill="transparent"
        class="dv-bb4-line-2" :points="`245, ${height - 1} 36, ${height - 1} 14, ${height - 23}
          14, ${height - 100}`"
      />
      <polyline class="dv-bb4-line-3" fill="transparent" :stroke="light" stroke-width="3"
                :points="`7, ${height - 40} 7, ${height - 75}`"/>
      <polyline class="dv-bb4-line-4" fill="transparent" :stroke="light" stroke-width="3"
                :points="`28, 24 13, 41 13, 64`"/>
      <polyline class="dv-bb4-line-5" fill="transparent" :stroke="light" :points="`5, 45 5, 140`"/>
      <polyline class="dv-bb4-line-6" fill="transparent" :stroke="light" :points="`14, 75 14, 180`"/>
      <polyline class="dv-bb4-line-7" fill="transparent" :stroke="light" :points="`55, 11 147, 11 167, 26 250, 26`"/>
      <polyline class="dv-bb4-line-8" fill="transparent" :stroke="light" stroke-width="3" :points="`158, 5 173, 16`"/>
      <polyline class="dv-bb4-line-9" fill="transparent" :stroke="light" stroke-width="3" stroke-dasharray="100 250"
                :points="`200, 17 ${width - 10}, 17`"/>
      <polyline class="dv-bb4-line-10" fill="transparent" :stroke="light" stroke-dasharray="80 270"
                :points="`385, 17 ${width - 10}, 17`"/>
    </svg>
    <BoxContent :padding="$attrs.padding">
      <slot></slot>
    </BoxContent>
  </Box>
</template>

<script>
  import Border from '../../mixins/Border'


  export default {
    name: 'MyDvBorder3',
    mixins: [Border]
  }
</script>

<style lang="scss">
  @import "../../style/vars";

  @include b(dv-border-3) {

    .my-dv-content {
      padding: 30px 14px 14px 30px;
    }

    @include when(reverse) {
      .my-dv-content {
        padding: 14px 30px 30px 14px;
      }
    }

  }
</style>
