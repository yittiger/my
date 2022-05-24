<template>
  <transition :enter-active-class="enterClass"
              :leave-active-class="leaveClass">
    <Box v-if="active"
         class="my-dv-screen"
         default-width="100%"
         default-height="100%"
         v-bind="$attrs">
      <slot></slot>
    </Box>
  </transition>
</template>

<script>
  /**
   * 场景组件，继承 my-dv-box
   * @module $ui/dv/my-dv-screen
   */
  import 'animate.css'
  import Box from '../my-dv-box'

  export default {
    name: 'MyDvScreen',
    inheritAttrs: false,
    inject: {
      page: {default: null}
    },
    components: {
      Box
    },
    /**
     * 属性参数
     * @member props
     * @property {string} [enter=slideInRight] 进入场景动画
     * @property {string} [leave=slideOutLeft] 离开场景动画
     */
    props: {
      enter: {
        type: String,
        default: 'slideInRight'
      },
      leave: {
        type: String,
        default: 'slideOutLeft'
      }
    },
    data() {
      return {}
    },
    computed: {
      enterClass() {
        return `animate__animated animate__${this.enter} animate__faster`
      },
      leaveClass() {
        return `animate__animated animate__${this.leave} animate__faster`
      },
      active() {
        const {screens, screenActiveIndex = 0} = this.page
        if (!screens) {
          return false
        }
        return screens[screenActiveIndex] === this
      }
    },
    methods: {
      register() {
        const screens = this.page?.screens
        if (screens) {
          screens.push(this)
        }
      },
      unregister() {
        let screens = this.page?.screens
        if (screens) {
          this.page.screens = screens.filter(n => n !== this)
        }
      }
    },
    created() {
      this.register()
    },
    beforeDestroy() {
      this.unregister()
    }
  }
</script>
