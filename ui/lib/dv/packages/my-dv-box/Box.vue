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
  /**
   * 容器组件
   * @module $ui/dv/my-dv-box
   */
  export default {
    name: 'MyDvBox',
    inheritAttrs: false,
    /**
     * 属性参数
     * @member props
     * @property {string} [width] 宽度
     * @property {string} [height] 高度
     * @property {string} [left=0] 位置left
     * @property {string} [top=0] 位置top
     * @property {number} [zIndex] 层级
     * @property {string} [xAlign] 水平对齐方式，可选值：'left', 'right', 'center'
     * @property {string} [yAlign] 垂直对齐方式，可选值：'top', 'bottom', 'middle'
     * @property {string} [contentAlign=left] 内容对齐方式，可选值：'left', 'right', 'center'
     * @property {number} [zoom] 缩放，如何设置了xAlign或yAlign， scale的方式将失效，此时可以zoom实现缩放
     * @property {number} [scale] 缩放，与zoom功能一样
     * @property {boolean} [fit] 由父级适应宽高和位置，设置了 fit， width、height 将失效
     * @property {boolean} [visible=true] 是否可见
     * @property {boolean} [position=true] 开启定位，如果为false， left、top 参数失效
     * @property {string} [margin] 外边距
     * @property {boolean} [inline] 内联模式，position=false才有效
     * @property {number} [opacity=1] 透明度
     * @property {boolean} [shadow] 阴影
     */
    props: {
      width: String,
      height: String,
      defaultWidth: {
        type: String,
        default: 'auto'
      },
      defaultHeight: {
        type: String,
        default: 'auto'
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
      },
      shadow: Boolean
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
          left: xAlign ? null : left,
          top: yAlign ? null : top,
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
          'is-shadow': this.shadow,
          'is-center-middle': this.xAlign === 'center' && this.yAlign === 'middle',
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

    @include when(shadow) {
      box-shadow: $--dv-shadow-light;
    }
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
