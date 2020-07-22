<template>
  <div class="my-go-overview" :class="classes" :style="styles"></div>
</template>

<script>
  import go from '../utils/lib'

  const defaultInit = ($, go) => {
    return $(go.Overview, {
      contentAlignment: go.Spot.Center
    })
  }

  export default {
    name: 'Overview',
    inject: ['diagram'],
    props: {
      init: {
        type: Function,
        default: defaultInit
      },
      placement: {
        type: String,
        default: 'left-bottom',
        validator(val) {
          return ['left-bottom', 'left-top', 'right-top', 'right-bottom'].includes(val)
        }
      },
      width: {
        type: String,
        default: '200px'
      },
      height: {
        type: String,
        default: '160px'
      },
      margin: {
        type: Number,
        default: 10
      },
      dark: {
        type: Boolean
      }
    },
    data() {
      this.overview = null
      return {}
    },
    computed: {
      classes() {
        return {
          [`is-${this.placement}`]: !!this.placement,
          'is-dark': this.dark
        }
      },
      styles() {
        return {
          width: this.width,
          height: this.height,
          margin: `${this.margin}px`
        }
      }
    },
    mounted() {
      const parent = this?.diagram
      if (parent) {
        parent.$once('init', diagram => {
          this.overview = this.init(go.GraphObject.make, go)
          if (diagram && this.overview) {
            this.overview.div = this.$el
            this.overview.observed = diagram
          }
        })
      }
    },
    beforeDestroy() {
      if (this.overview) {
        this.overview.div = null
        this.overview.observed = null
        this.overview = null
      }

    }
  }
</script>
