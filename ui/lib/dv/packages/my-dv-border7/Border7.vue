<template>
  <Box class="my-dv-border-7"
       default-width="400px"
       default-height="300px"
       padding="0"
       :class="classes"
       v-bind="$attrs">
    <svg class="my-dv-border__svg" :width="width" :height="height" :style="styles">
      <defs>
        <path
          :id="`path-${_uid}`"
          :d="path"
          fill="transparent"
        />
        <radialGradient
          :id="`gradient-${_uid}`"
          cx="50%" cy="50%" r="50%"
        >
          <stop
            offset="0%" stop-color="#fff"
            stop-opacity="1"
          />
          <stop
            offset="100%" stop-color="#fff"
            stop-opacity="0"
          />
        </radialGradient>

        <mask :id="`mask-${_uid}`">
          <circle cx="0" cy="0" r="150" :fill="`url(#gradient-${_uid})`">
            <animateMotion
              :dur="`${duration}s`"
              :path="path"
              rotate="auto"
              repeatCount="indefinite"
            />
          </circle>
        </mask>
      </defs>

      <polygon :fill="fill" :points="`5, 5 ${width - 5}, 5 ${width - 5} ${height - 5} 5, ${height - 5}`"/>

      <use
        :stroke="dark"
        stroke-width="1"
        :xlink:href="`#path-${_uid}`"
      />

      <use
        :stroke="light"
        stroke-width="3"
        :xlink:href="`#path-${_uid}`"
        :mask="`url(#mask-${_uid})`"
      >
        <animate
          attributeName="stroke-dasharray"
          :from="`0, ${length}`"
          :to="`${length}, 0`"
          :dur="`${duration}s`"
          repeatCount="indefinite"
        />
      </use>
    </svg>
    <BoxContent :padding="$attrs.padding">
      <slot></slot>
    </BoxContent>
  </Box>
</template>

<script>
  import Border from '../../mixins/Border'

  export default {
    name: 'MyDvBorder7',
    mixins: [Border],
    props: {
      // 动画持续时间，单位秒
      duration: {
        type: Number,
        default: 4
      }
    },
    computed: {
      length() {
        const {width, height} = this
        return (width + height - 5) * 2
      },
      path() {
        const {reverse, width, height} = this
        if (reverse) return `M 2.5, 2.5 L 2.5, ${height - 2.5} L ${width - 2.5}, ${height - 2.5} L ${width - 2.5}, 2.5 L 2.5, 2.5`
        return `M2.5, 2.5 L${width - 2.5}, 2.5 L${width - 2.5}, ${height - 2.5} L2.5, ${height - 2.5} L2.5, 2.5`
      }
    }
  }
</script>
