<template>
  <Box class="my-dv-indicator"
       v-bind="boxProps">
    <div class="my-dv-indicator__dots">
      <div v-for="(item,index) in screens"
           :key="item._uid"
           @click="change(index)"
           class="my-dv-indicator__item"
           :class="{'is-active':activeIndex===index}"></div>
    </div>

  </Box>
</template>

<script>
  /**
   * 场景指示器组件
   * @module $ui/dv/my-dv-indicator
   */
  import Box from '../my-dv-box'

  export default {
    name: 'MyDvIndicator',
    components: {
      Box
    },
    inheritAttrs: false,
    inject: {
      page: {default: null}
    },
    /**
     * 属性参数
     * @member props
     * @property {string} [type=horizontal] 类型，可选 'horizontal', 'vertical'
     * @property {number} [interval=10000] 自动切换间隔时间，单位毫秒
     * @property {boolean} [auto] 开启自动切换
     */
    props: {
      type: {
        type: String,
        default: 'horizontal',
        validator() {
          return ['horizontal', 'vertical']
        }
      },
      interval: {
        type: Number,
        default: 10 * 1000
      },
      auto: Boolean
    },
    computed: {
      screens() {
        return this.page?.screens || []
      },
      activeIndex() {
        return this.page?.screenActiveIndex
      },
      boxProps() {
        const map = {
          horizontal: {
            width: '100%',
            height: '40px',
            xAlign: 'center',
            yAlign: 'bottom'
          },
          vertical: {
            width: '40px',
            height: '100%',
            xAlign: 'right',
            yAlign: 'middle'
          }
        }
        return {
          ...map[this.type],
          ...this.$attrs
        }
      }
    },
    methods: {
      change(index) {
        if (this.page) {
          this.page.screenActiveIndex = Math.abs(index % this.screens.length)
        }
      },
      autoChange() {
        clearInterval(this.timer)
        let index = this.activeIndex
        this.timer = setInterval(() => {
          this.change(++index)
        }, this.interval)
      }
    },
    mounted() {
      this.auto && this.autoChange()
    },
    beforeDestroy() {
      clearInterval(this.timer)
    }
  }
</script>

<style lang="scss">
  @import "../../style/vars";

  @include b(dv-indicator) {
    pointer-events: none;
    @include e(dots) {
      text-align: center;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    @include e(item) {
      pointer-events: auto;
      width: 14px;
      height: 14px;
      font-size: 0;
      display: inline-block;
      border-radius: 100%;
      background: rgba(255, 255, 255, 0.3);
      margin: 6px 8px;
      cursor: pointer;
      box-shadow: $--dv-shadow-light;
      &:hover {
        background: rgba(255, 255, 255, 0.6);
      }
      @include when(active) {
        background: $--dv-primary;
        opacity: 0.8;
      }
    }
  }
</style>
