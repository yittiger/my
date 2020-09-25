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
    props: {
      width: String,
      height: String,
      left: {
        type: [String, Number],
        default: 0
      },
      top: {
        type: [String, Number],
        default: 0
      },
      zIndex: Number,
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
      // 如果设置 x-align 或 y-align ，scale将失效
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
      }
    },
    computed: {
      styles() {
        const {position, fit, width, height, left, top, zIndex, zoom, scale, xAlign, yAlign} = this
        return {
          position: position ? 'absolute' : 'static',
          width: fit ? '100%' : width,
          height: fit ? '100%' : height,
          zoom,
          left: xAlign ? null : (fit ? 0 : left),
          top: yAlign ? null : (fit ? 0 : top),
          transform: scale ? `scale(${scale})` : null,
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
