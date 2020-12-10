<template>
  <div class="my-dv-page" :style="styles">
    <slot></slot>
    <div v-if="fullscreen" class="my-dv-page__fullscreen">
      <i v-if="isFullScreen" class="el-icon-switch-button" title="取消全屏" @click="exitFullScreen"></i>
      <i v-else class="el-icon-full-screen" title="全屏" @click="fullScreen"></i>
    </div>
  </div>
</template>

<script>
  /**
   * 页面组件
   * @module $ui/dv/my-dv-page
   */
  import {addResizeListener, removeResizeListener} from 'element-ui/lib/utils/resize-event'
  import {addClass, removeClass} from 'element-ui/lib/utils/dom'
  import {debounce} from '$ui/utils/util';
  import Config from '../../mixins/Config'
  import {fullScreen, exitFullScreen, isFullScreen} from '$ui/utils/bom'

  const WRAPPER_CLASS_NAME = 'my-dv-page__wrapper'
  export default {
    name: 'MyDvPage',
    mixins: [Config],
    provide() {
      return {
        page: this
      }
    },
    /**
     * 属性参数
     * @member props
     * @property {Boolean} [lock] 缩放锁定比例
     * @property {Boolean}  [scale=true] 开启自动缩放
     * @property {Number} [width=1920] 原始宽度
     * @property {Number} [height=1080] 原始高度
     * @property {Number} [activeIndex] 初始展示的场景索引，有MyDvScreen子组件才有效
     * @property {string|function} [target=body] 页面的参照目标元素，默认是body，支持css选择器，有一个特殊值parent取组件的父节点
     * @property {object} [config] 页面配置对象 {color, textColor, fill, colors} ，提供给子组件调用
     * @property {boolean} [fit] 自动适应父容器尺寸，设置后 width height 的参数失效
     * @property {boolean} [fullscreen] 显示全屏切换按钮
     */
    props: {
      lock: {
        type: Boolean
      },
      scale: {
        type: Boolean,
        default: true
      },
      width: {
        type: Number,
        default: 1920,
        validator(val) {
          return val > 0
        }
      },
      height: {
        type: Number,
        default: 1080,
        validator(val) {
          return val > 0
        }
      },
      activeIndex: {
        type: Number,
        default: 0
      },
      target: {
        type: [String, HTMLElement, Function],
        default() {
          return document.body
        }
      },
      fit: Boolean,
      fullscreen: Boolean
    },
    data() {
      return {
        screens: [],
        screenActiveIndex: this.activeIndex,
        widthScale: 1,
        heightScale: 1,
        isFullScreen: false
      }
    },
    watch: {
      $props: {
        deep: true,
        immediate: true,
        handler() {
          this.resize()
        }
      },
      activeIndex: {
        immediate: true,
        handler(val) {
          this.screenActiveIndex = val
        }
      }
    },
    computed: {
      styles() {
        return this.fit
          ? {
            width: '100%',
            height: '100%',
            transform: 'translateX(-50%) translateY(-50%)'
          }
          : {
            width: `${this.width}px`,
            height: `${this.height}px`,
            transform: `scaleX(${this.widthScale}) scaleY(${this.heightScale}) translateX(-50%) translateY(-50%)`
          }
      }
    },
    methods: {
      getTarget() {
        let target
        switch (typeof this.target) {
          case 'string':
            target = this.target === 'parent'
              ? this.$el.parentNode
              : document.querySelector(this.target)
            break
          case 'function':
            target = this.target()
            break
          default:
            target = this.target
            break
        }
        return target || document.body
      },
      resize() {
        if (!this.scale || this.fit) {
          this.widthScale = 1
          this.heightScale = 1
          return
        }
        const {clientWidth, clientHeight} = this.warpper || {}
        if (!clientWidth || !clientHeight) return
        if (this.lock) {
          this.heightScale = this.widthScale = clientWidth / this.width
        } else {
          this.widthScale = clientWidth / this.width
          this.heightScale = clientHeight / this.height
        }

      },
      fullScreen() {
        const el = this.getTarget()
        fullScreen(el)
        this.isFullScreen = true
      },
      exitFullScreen() {
        exitFullScreen()
        this.isFullScreen = false
      }
    },
    mounted() {
      this.warpper = this.getTarget()
      addClass(this.warpper, WRAPPER_CLASS_NAME + this._uid)
      this.proxyResize = debounce(this.resize, 100)
      addResizeListener(this.warpper, this.proxyResize)
      this.resize()
      this.isFullScreen = this.fullscreen ? isFullScreen() : false
    },
    beforeDestroy() {
      this.proxyResize && removeResizeListener(this.warpper, this.proxyResize)
      removeClass(this.warpper, WRAPPER_CLASS_NAME + this._uid)
    }

  }
</script>

<style lang="scss">
  @import "../../style/vars";

  @include b(dv-page) {
    position: relative;
    background-image: $--dv-background-image;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    transform-origin: 0 0;
    color: $--dv-font-color;
    font-size: 16px;
    top: 50%;
    left: 50%;

    @include e(wrapper) {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100vh;
      overflow: hidden;
      background: $--dv-background;

      .my-master-app {
        overflow: hidden;
      }
    }

    @include e(fullscreen) {
      position: absolute;
      z-index: 9999;
      top: 5px;
      right: 6px;
      background: $--dv-text-placeholder;
      padding: 1px 4px;
      border-radius: 3px;
      color: $--dv-text-secondary;
      opacity: 0.4;
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    }
  }


  body[class*="my-dv-page__wrapper"],
  div[class*="my-dv-page__wrapper"] {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: #000;

    .my-master-app {
      overflow: hidden;
    }
  }
</style>
