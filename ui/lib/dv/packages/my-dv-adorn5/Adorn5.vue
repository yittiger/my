<template>
  <Box class="my-dv-adorn-5"
       :class="classes"
       :style="styles"
       default-width="400px"
       default-height="40px"
       v-bind="$attrs"
       v-on="$listeners">
    <svg :width="`${width}px`" :height="`${height}px`">
      <polyline
        fill="transparent"
        :stroke="dark"
        stroke-width="3"
        :points="line1Points"
      >
        <animate
          attributeName="stroke-dasharray"
          attributeType="XML"
          :from="`0, ${line1Length / 2}, 0, ${line1Length / 2}`"
          :to="`0, 0, ${line1Length}, 0`"
          :dur="`${duration}s`"
          begin="0s"
          calcMode="spline"
          keyTimes="0;1"
          keySplines="0.4,1,0.49,0.98"
          repeatCount="indefinite"
        />
      </polyline>
      <polyline
        fill="transparent"
        :stroke="light"
        stroke-width="2"
        :points="line2Points"
      >
        <animate
          attributeName="stroke-dasharray"
          attributeType="XML"
          :from="`0, ${line2Length / 2}, 0, ${line2Length / 2}`"
          :to="`0, 0, ${line2Length}, 0`"
          :dur="`${duration}s`"
          begin="0s"
          calcMode="spline"
          keyTimes="0;1"
          keySplines=".4,1,.49,.98"
          repeatCount="indefinite"
        />
      </polyline>
    </svg>
  </Box>
</template>

<script>
  import Adorn from '../../mixins/Adorn'
  import {getPolylineLength} from '../../utils/util'

  export default {
    name: 'MyDvAdorn5',
    mixins: [Adorn],
    props: {},
    data() {
      return {}
    },
    computed: {
      line1Points() {
        const {width, height} = this
        return [
          [0, height * 0.2], [width * 0.18, height * 0.2], [width * 0.2, height * 0.4], [width * 0.25, height * 0.4],
          [width * 0.27, height * 0.6], [width * 0.72, height * 0.6], [width * 0.75, height * 0.4],
          [width * 0.8, height * 0.4], [width * 0.82, height * 0.2], [width, height * 0.2]
        ]
      },
      line2Points() {
        const {width, height} = this
        return [
          [width * 0.3, height * 0.8], [width * 0.7, height * 0.8]
        ]
      },
      line1Length() {
        return getPolylineLength(this.line1Points)
      },
      line2Length() {
        return getPolylineLength(this.line2Points)
      }
    }
  }
</script>
