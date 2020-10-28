<template>
  <Box class="my-dv-tags"
       default-width="400px"
       default-height="400px"
       v-bind="$attrs">
    <MyTagCanvas v-if="data.length && width && height"
                 v-on="$listeners"
                 :options="canvasOptions"
                 :data="tags"></MyTagCanvas>
  </Box>
</template>

<script>
  import {MyTagCanvas} from '$ui'
  import Box from '../my-dv-box'
  import Rect from '../../mixins/Rect'

  export default {
    name: 'MyDvTags',
    mixins: [Rect],
    components: {
      Box,
      MyTagCanvas
    },
    props: {
      data: {
        type: Array,
        default() {
          return []
        }
      },
      options: Object,
      randomColor: Boolean,
      dataHelper: Function
    },
    computed: {
      tags() {
        const colors = this?.page?.settings?.colors || []
        const length = colors.length
        const randomColor = this.randomColor
        const dataHelper = this.dataHelper
        return this.data.map((n, index) => {
          const isObject = typeof n === 'object'
          return {
            color: randomColor ? colors[Math.floor(Math.random() * length)] : (colors[0] || '#1890ff'),
            text: !isObject ? n : '',
            ...(isObject ? n : null),
            ...(dataHelper ? dataHelper(n, index) : null)
          }
        })
      },
      canvasOptions() {
        const {width, height} = this
        return Object.freeze({
          maxSpeed: 0.02,
          minSpeed: 0.01,
          textColour: null,
          textHeight: 14,
          fadeIn: 300,
          depth: 0.97,
          minBrightness: 0.2,
          wheelZoom: false,
          noTagsMessage: false,
          reverse: true,
          shuffleTags: true,
          shadowOffset: [1, 1],
          stretchX: width / 150,
          stretchY: height / 150,
          initial: [0.01, 0.01],
          clickToFront: 600,
          shadow: 'rgba(255,255,255,0.2)',
          noMouse: false,
          noSelect: false,
          ...this.options
        })
      }
    }
  }
</script>
