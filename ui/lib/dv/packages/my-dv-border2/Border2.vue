<template>
  <Box class="my-dv-border-2"
       default-width="400px"
       default-height="300px"
       padding="0"
       :class="classes"
       v-bind="$attrs">
    <svg class="my-dv-border__svg" :width="width" :height="height" :style="styles">
      <polygon :fill="fill" :points="`
        7, 7 ${width - 7}, 7 ${width - 7}, ${height - 7} 7, ${height - 7}
      `"/>
      <polyline
        :stroke="light"
        fill="transparent"
        :points="`2, 2 ${width - 2} ,2 ${width - 2}, ${height - 2} 2, ${height - 2} 2, 2`"
      />
      <polyline
        :stroke="dark"
        fill="transparent"
        :points="`6, 6 ${width - 6}, 6 ${width - 6}, ${height - 6} 6, ${height - 6} 6, 6`"
      />
      <circle :fill="light" cx="11" cy="11" r="1"/>
      <circle :fill="light" :cx="width - 11" cy="11" r="1"/>
      <circle :fill="light" :cx="width - 11" :cy="height - 11" r="1"/>
      <circle :fill="light" cx="11" :cy="height - 11" r="1"/>
    </svg>
    <BoxContent :padding="$attrs.padding">
      <slot></slot>
    </BoxContent>
  </Box>
</template>

<script>
  import Border from '../../mixins/Border'

  export default {
    name: 'MyDvBorder2',
    mixins: [Border]
  }
</script>
