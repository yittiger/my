<template>
  <div class="my-go-overview" :class="classes" :style="styles"></div>
</template>

<script>
  import go from '../utils/lib'
  import creator from '../utils/creator'

  const defaultOptions = function () {
    return {
      contentAlignment: go.Spot.Center
    }
  }

  export default {
    name: 'Overview',
    inject: ['myDiagram'],
    props: {
      options: {
        type: [Object, Function]
      },
      placement: {
        type: String,
        default: 'right-bottom',
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
      const parent = this?.myDiagram
      if (parent) {
        parent.$once('ready', diagram => {
          this.overview = typeof this.options === 'function'
            ? this.options(creator({
              name: go.Overview,
              props: defaultOptions()
            }))
            : creator({
              name: go.Overview,
              props: {
                ...defaultOptions(),
                ...this.options
              }
            })
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
