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
    provide() {
      return {
        layoutVm: this.layout ? this : null
      }
    },
    inject: {
      layoutVm: {default: null}
    },
    /**
     * 属性参数
     * @member props
     * @property {string} [width] 宽度
     * @property {string} [height] 高度
     * @property {string} [left=0] 位置left
     * @property {string} [top=0] 位置top
     * @property {string} [right=0] 位置right
     * @property {string} [bottom=0] 位置bottom
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
     * @property {string} [padding] 内边距, 子组件需要position=false才有效
     * @property {boolean} [inline] 内联模式，position=false才有效
     * @property {number} [opacity=1] 透明度
     * @property {boolean} [shadow] 阴影
     * @property {boolean} [layout] 开启布局
     * @property {number} [weight=1] 排版占比，layout=true有效
     * @property {number} [gap=0] 间距，layout=true有效
     * @property {string} [direction=row] 排版方向，可选 'row', 'column'， layout=true有效
     * @property {boolean} [free] 不受父布局控制
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
        type: [String, Number]
      },
      top: {
        type: [String, Number]
      },
      right: [String, Number],
      bottom: [String, Number],
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
      padding: String,
      inline: Boolean,
      opacity: {
        type: Number,
        default: 1
      },
      shadow: Boolean,
      layout: Boolean,
      weight: {
        type: Number,
        default: 1
      },
      gap: {
        type: Number,
        default: 0
      },
      direction: {
        type: String,
        default: 'row',
        validator(v) {
          return ['row', 'column'].includes(v)
        }
      },
      free: Boolean
    },
    data() {
      return {
        boxes: []
      }
    },
    computed: {
      layoutSize() {
        const {weight, layoutVm, free} = this
        if (layoutVm && !free) {
          const {gap, direction, total, boxCount, boxes} = layoutVm
          const index = boxes.findIndex(n => n === this)
          const gapCount = boxCount - 1
          const size = `(100% - ${gap * gapCount}px) * ${weight} / ${total}`
          const diffWeight = boxes.filter((n, i) => i < index).reduce((t, n) => (t + n.weight), 0)
          const diffLen = `(100% - ${gap * gapCount}px) * ${diffWeight} / ${total} +  ${index * gap}px`
          if (direction === 'row') {
            return {
              height: `calc(${size})`,
              top: `calc(${diffLen})`
            }
          } else {
            return {
              width: `calc(${size})`,
              left: `calc(${diffLen})`
            }
          }
        }
        return null
      },
      styles() {
        const {
          inline, margin, padding, position, fit, width, height, left,
          top, right, bottom, zIndex, zoom, scale, xAlign, yAlign, defaultWidth, defaultHeight
        } = this
        return {
          position: position ? 'absolute' : 'relative',
          width: fit ? '100%' : width || defaultWidth,
          height: fit ? '100%' : height || defaultHeight,
          zoom,
          left: xAlign ? null : left,
          top: yAlign ? null : top,
          right: xAlign ? null : right,
          bottom: yAlign ? null : bottom,
          transform: scale ? `scale(${scale})` : null,
          display: inline ? 'inline-block' : 'block',
          opacity: this.opacity,
          margin,
          padding,
          zIndex,
          ...this.layoutSize
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
      },
      total() {
        return this.boxes.reduce((t, n) => (t + n.weight), 0)
      },
      boxCount() {
        return this.boxes.length
      }
    },
    methods: {
      registerBox(box) {
        this.boxes.push(box)
      },
      unregisterBox(box) {
        this.boxes = this.boxes.filter(n => n !== box)
      }
    },
    created() {
      if (this.layoutVm && !this.free) {
        this.layoutVm.registerBox(this)
      }
    },
    beforeDestroy() {
      if (this.layoutVm && !this.free) {
        this.layoutVm.unregisterBox(this)
      }
    }
  }
</script>

<style lang="scss">
  @import "../../style/vars";

  @include b(dv-box) {
    position: absolute;
    text-align: inherit;
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
