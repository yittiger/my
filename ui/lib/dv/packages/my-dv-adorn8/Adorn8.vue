<template>
  <Box class="my-dv-adorn-8"
       :class="classes"
       :style="styles"
       default-width="300px"
       default-height="50px"
       v-bind="$attrs"
       v-on="$listeners">
    <svg :width="`${width}px`" :height="`${height}px`">
      <polyline
        :stroke="light"
        stroke-width="2"
        fill="transparent"
        :points="`${xPos(0)}, 0 ${xPos(30)}, ${height / 2}`"
      />

      <polyline
        :stroke="dark"
        stroke-width="2"
        fill="transparent"
        :points="`${xPos(20)}, 0 ${xPos(50)}, ${height / 2} ${xPos(width)}, ${height / 2}`"
      />

      <polyline
        :stroke="dark"
        fill="transparent"
        stroke-width="3"
        :points="`${xPos(0)}, ${height - 3}, ${xPos(200)}, ${height - 3}`"
      />
    </svg>
  </Box>
</template>

<script>
  import Adorn from '../../mixins/Adorn'

  export default {
    name: 'MyDvAdorn8',
    mixins: [Adorn],
    methods: {
      xPos(pos) {
        const {reverse, width} = this
        if (!reverse) return pos
        return width - pos
      }
    }
  }
</script>
