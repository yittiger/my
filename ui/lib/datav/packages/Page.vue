<template>
  <div class="my-dv-page" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
  import {addResizeListener, removeResizeListener} from 'element-ui/lib/utils/resize-event'
  import {addClass, removeClass} from 'element-ui/lib/utils/dom'
  import {debounce} from '$ui/utils/util';

  const WRAPPER_CLASS_NAME = 'my-dv-page__wrapper'
  export default {
    name: 'MyDvPage',
    provide() {
      return {
        page: this
      }
    },
    props: {
      lock: {
        type: Boolean,
        default: true
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
      }
    },
    data() {
      return {
        widthScale: 1,
        heightScale: 1
      }
    },
    watch: {
      $props: {
        deep: true,
        immediate: true,
        handler() {
          this.resize()
        }
      }
    },
    computed: {
      styles() {
        return {
          width: `${this.width}px`,
          height: `${this.height}px`,
          transform: `scaleX(${this.widthScale}) scaleY(${this.heightScale})`
        }
      }
    },
    methods: {
      resize() {
        if (!this.scale) {
          this.widthScale = 1
          this.heightScale = 1
          return
        }
        const {clientWidth, clientHeight} = document.body
        if (this.lock) {
          this.heightScale = this.widthScale = clientWidth / this.width
        } else {
          this.widthScale = clientWidth / this.width
          this.heightScale = clientHeight / this.height
        }
      }
    },
    updated() {
      addClass(document.body, WRAPPER_CLASS_NAME)
    },
    created() {
      addClass(document.body, WRAPPER_CLASS_NAME)
      this.proxyResize = debounce(this.resize, 100)
      addResizeListener(document.body, this.proxyResize)
    },
    beforeDestroy() {
      this.proxyResize && removeResizeListener(document.body, this.proxyResize)
      removeClass(document.body, WRAPPER_CLASS_NAME)
    }

  }
</script>

<style lang="scss">
  @import "../style/vars";

  @include b(dv-page) {
    position: relative;
    background: $--dv-background;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    transform-origin: 0 0;
    color: $--dv-font-color;
    font-size: 16px;

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
  }
</style>
