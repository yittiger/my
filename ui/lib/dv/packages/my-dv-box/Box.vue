<template>
  <div v-if="visible"
       class="my-dv-box"
       :class="classes"
       :style="styles"
       v-on="$listeners">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'MyDvBox',
    inheritAttrs: false,
    props: {
      width: String,
      height: String,
      defaultWidth: {
        type: String,
        default: '300px'
      },
      defaultHeight: {
        type: String,
        default: '200px'
      },
      left: {
        type: [String, Number],
        default: 0
      },
      top: {
        type: [String, Number],
        default: 0
      },
      zIndex: [Number, String],
      xAlign: {
        type: String,
        validator(val) {
          return ['left', 'right', 'center'].includes(val)
        }
      },
      yAlign: {
        type: String,
        validator(val) {
          return ['top', 'bottom', 'middle'].includes(val)
        }
      },
      contentAlign: {
        type: String,
        default: 'left',
        validator(val) {
          return ['left', 'right', 'center'].includes(val)
        }
      },
      zoom: Number,
      // 如果设置 x-align 或 y-align ，scale将失效, 此时可以通过设置zoom实现缩放
      scale: Number,
      // 设置了 fit， width、height 、top、left 将失效
      fit: Boolean,
      visible: {
        type: Boolean,
        default: true
      },
      // 启用定位
      position: {
        type: Boolean,
        default: true
      },
      margin: String,
      inline: Boolean,
      opacity: {
        type: Number,
        default: 1
      }
    },
    computed: {
      styles() {
        const {
          inline, margin, position, fit, width, height, left,
          top, zIndex, zoom, scale, xAlign, yAlign, defaultWidth, defaultHeight
        } = this
        return {
          position: position ? 'absolute' : 'static',
          width: fit ? '100%' : width || defaultWidth,
          height: fit ? '100%' : height || defaultHeight,
          zoom,
          left: xAlign ? null : (fit ? 0 : left),
          top: yAlign ? null : (fit ? 0 : top),
          transform: scale ? `scale(${scale})` : null,
          display: inline ? 'inline-block' : 'block',
          opacity: this.opacity,
          margin,
          zIndex
        }
      },
      classes() {
        return {
          [`is-${this.xAlign}`]: !!this.xAlign,
          [`is-${this.yAlign}`]: !!this.yAlign,
          'is-center-middle': !!this.xAlign && !!this.yAlign,
          [`is-content-align-${this.contentAlign}`]: !!this.contentAlign
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../../style/vars";

  @include b(dv-box) {
    position: absolute;
    text-align: left;
    display: inline-block;
    @include when(left) {
      left: 0;
    }
    @include when(right) {
      right: 0;
    }
    @include when(center) {
      transform: translateX(-50%);
      left: 50%;
    }
    @include when(top) {
      top: 0;
    }
    @include when(bottom) {
      bottom: 0;
    }
    @include when(middle) {
      transform: translateY(-50%);
      top: 50%;
    }
    @include when(center-middle) {
      transform: translate(-50%, -50%) !important;
    }

    @include when(content-align-right) {
      text-align: right;
    }
    @include when(content-align-center) {
      text-align: center;
    }
  }
</style>
