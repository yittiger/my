<template>
  <Box class="my-dv-starry"
       default-width="100%"
       default-height="100%"
       v-on="$listeners"
       v-bind="$attrs">
    <canvas ref="canvas" :width="width" :height="height"></canvas>
  </Box>
</template>

<script>
  /**
   * 星空动效
   * @module $ui/dv/my-dv-starry
   */
  import Box from '../my-dv-box'
  import Rect from '../../mixins/Rect'
  import Starry from '../../utils/Starry'

  export default {
    name: 'MyDvStarry',
    mixins: [Rect],
    components: {
      Box
    },
    /**
     * 属性参数
     * @member props
     * @property {number} [amount=300] 星星数量
     */
    props: {
      amount: {
        type: Number,
        default: 300
      }
    },
    mounted() {
      this.starry = new Starry(this.$refs.canvas, this)
      this.starry.run()
    },
    beforeDestroy() {
      this.starry && this.starry.destroy()
    }
  }
</script>

