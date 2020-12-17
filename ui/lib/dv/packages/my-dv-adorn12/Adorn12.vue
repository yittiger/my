<template>
  <Box class="my-dv-adorn-12"
       :class="classes"
       :style="styles"
       default-width="300px"
       default-height="300px"
       v-bind="$attrs"
       v-on="$listeners">
    <svg :width="`${width}px`" :height="`${height}px`">
      <defs>
        <g :id="`g${_uid}`">
          <path
            :stroke="pathColor[i]"
            :stroke-width="width / 2"
            fill="transparent"
            v-for="(d, i) in path"
            :key="i"
            :d="d"
          />
        </g>

        <radialGradient
          :id="`gradient${_uid}`"
          cx="50%" cy="50%" r="50%"
        >
          <stop offset="0%" stop-color="transparent" stop-opacity="1"/>
          <stop offset="100%" :stop-color="fade(dark, 30)" stop-opacity="1"/>
        </radialGradient>
      </defs>

      <circle
        v-for="(r,i) in circle"
        :key="i"
        :r="r"
        :cx="x"
        :cy="y"
        :stroke="dark"
        :stroke-width="0.5"
        fill="transparent"
      />

      <circle
        r="1"
        :cx="x"
        :cy="y"
        stroke="transparent"
        :fill="`url(#gradient${_uid})`"
      >
        <animate
          attributeName="r"
          :values="`1;${width / 2}`"
          :dur="`${haloDuration}s`"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="1;0"
          :dur="`${haloDuration}s`"
          repeatCount="indefinite"
        />
      </circle>

      <circle
        r="2"
        :cx="x"
        :cy="y"
        :fill="dark"
      />

      <g v-if="split">
        <polyline
          v-for="(p,i) in splitLinePoints"
          :key="i"
          :points="p"
          :stroke="dark"
          :stroke-width="0.5"
          opacity="0.5"
        />
      </g>

      <path
        v-for="(d,i) in arc"
        :key="`p${i}`"
        :d="d"
        :stroke="dark"
        stroke-width="2"
        fill="transparent"
      />

      <use :xlink:href="`#g${_uid}`">
        <animateTransform
          attributeName="transform"
          type="rotate"
          :values="`0, ${x} ${y};360, ${x} ${y}`"
          :dur="`${duration}s`"
          repeatCount="indefinite"
        />
      </use>
    </svg>
  </Box>
</template>

<script>
  import Adorn from '../../mixins/Adorn'
  import {getCircleRadianPoint} from '../../utils/util'
  import {fade} from '../../utils/color'

  export default {
    name: 'MyDvAdorn12',
    mixins: [Adorn],
    props: {
      haloDuration: {
        type: Number,
        default: 2
      },
      split: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        segment: 30,
        sectorAngle: Math.PI / 3,
        ringNum: 3,
        ringWidth: 1
      }
    },
    computed: {
      x() {
        return this.width / 2
      },
      y() {
        return this.height / 2
      },
      path() {
        const {x, y, width, segment, sectorAngle} = this

        const startAngle = -Math.PI / 2
        const angleGap = sectorAngle / segment
        const r = width / 4
        let lastEndPoints = getCircleRadianPoint(x, y, r, startAngle)

        return new Array(segment)
          .fill('')
          .map((_, i) => {
            const endPoints = getCircleRadianPoint(x, y, r, startAngle - (i + 1) * angleGap).map(_ => _.toFixed(5))
            const d = `M${lastEndPoints.join(',')} A${r}, ${r} 0 0 0 ${endPoints.join(',')}`
            lastEndPoints = endPoints
            return d
          })
      },
      pathColor() {
        const {dark, segment} = this
        const colorGap = 100 / (segment - 1)
        return new Array(segment)
          .fill(dark)
          .map((_, i) => fade(dark, (100 - i * colorGap) * 0.4))
      },
      circle() {
        const {ringNum, width, ringWidth} = this
        const radiusGap = (width / 2 - ringWidth / 2) / ringNum
        return new Array(ringNum)
          .fill(0)
          .map((_, i) => radiusGap * (i + 1)).filter(n => n >= 0)
      },
      splitLinePoints() {
        const {x, y, width} = this
        const angleGap = Math.PI / 6
        const r = width / 2
        return new Array(6)
          .fill('')
          .map((_, i) => {
            const startAngle = angleGap * (i + 1)
            const endAngle = startAngle + Math.PI
            const startPoint = getCircleRadianPoint(x, y, r, startAngle)
            const endPoint = getCircleRadianPoint(x, y, r, endAngle)
            return `${startPoint.join(',')} ${endPoint.join(',')}`
          })
      },
      arc() {
        const {x, y, width} = this
        const angleGap = Math.PI / 6
        const r = width / 2 - 1
        return new Array(4)
          .fill('')
          .map((_, i) => {
            const startAngle = angleGap * (3 * i + 1)
            const endAngle = startAngle + angleGap
            const startPoint = getCircleRadianPoint(x, y, r, startAngle)
            const endPoint = getCircleRadianPoint(x, y, r, endAngle)
            return `M${startPoint.join(',')} A${x}, ${y} 0 0 1 ${endPoint.join(',')}`
          })
      }
    },
    methods: {
      fade
    }
  }
</script>
