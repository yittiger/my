<template>
  <Box class="my-dv-adorn-9"
       :class="classes"
       :style="styles"
       default-width="100px"
       default-height="100px"
       v-bind="$attrs"
       v-on="$listeners">
    <svg width="100" height="100" :style="svgStyles">
      <defs>
        <polygon :id="`polygon${_uid}`" points="15, 46.5, 21, 47.5, 21, 52.5, 15, 53.5"/>
      </defs>

      <circle
        cx="50"
        cy="50"
        r="45"
        fill="transparent"
        :stroke="dark"
        stroke-width="10"
        stroke-dasharray="80, 100, 30, 100"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 50 50;360 50 50"
          :dur="`${duration}s`"
          repeatCount="indefinite"
        />
      </circle>

      <circle
        cx="50"
        cy="50"
        r="45"
        fill="transparent"
        :stroke="light"
        stroke-width="6"
        stroke-dasharray="50, 66, 100, 66"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 50 50;-360 50 50"
          :dur="`${duration}s`"
          repeatCount="indefinite"
        />
      </circle>

      <circle
        cx="50"
        cy="50"
        r="38"
        fill="transparent"
        :stroke="fade(dark, 30)"
        stroke-width="1"
        stroke-dasharray="5, 1"
      />

      <use
        v-for="(foo, i) in new Array(20).fill(0)"
        :key="i"
        :xlink:href="`#polygon${_uid}`"
        :stroke="dark"
        :fill="Math.random() > 0.4 ? 'transparent' : light"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 50 50;360 50 50"
          :dur="`${duration}s`"
          :begin="`${i * duration / 20}s`"
          repeatCount="indefinite"
        />
      </use>

      <circle
        cx="50"
        cy="50"
        r="26"
        fill="transparent"
        :stroke="fade(dark, 30)"
        stroke-width="1"
        stroke-dasharray="5, 1"
      />
    </svg>
    <div class="my-dv-adorn-9__content" :style="{zoom:svgScale}">
      <slot></slot>
    </div>
  </Box>
</template>

<script>
  import Adorn from '../../mixins/Adorn'
  import {fade} from '../../utils/color'

  export default {
    name: 'MyDvAdorn9',
    mixins: [Adorn],
    computed: {
      svgScale() {
        return this.width / 100
      },
      svgStyles() {
        return {
          transform: `scale(${this.svgScale})`
        }
      }
    },
    methods: {
      fade
    }
  }
</script>
<style lang="scss">
  @import "../../style/vars";

  @include b(dv-adorn-9) {

    svg {
      transform-origin: left top;
      position: absolute;
      left: 0;
      top: 0;
    }
    @include e(content) {
      position: absolute;
      left: 50%;
      top: 50%;
      text-align: center;
      transform: translate(-50%, -50%);
      transform-origin: center center;
      .my-dv-box {
        position: static !important;
      }
    }
  }
</style>
