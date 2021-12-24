<template>
  <Box class="my-dv-chart"
       default-width="400px"
       default-height="400px"
       v-bind="$attrs">
    <Loading v-if="loading" :zoom="0.6"></Loading>
    <MyChart v-else
             v-on="$listeners"
             :debug="debug"
             :theme="theme"
             :options="currentOptions"
             :extend="extend"
             :width="`${width}px`"
             :height="`${height}px`"></MyChart>
  </Box>
</template>
<script>
  import {MyChart} from '$ui/charts'
  import Chart from '../../mixins/Chart'
  import Loading from '../my-dv-loading'
  import merge from 'lodash/merge'
  import setExtend from '$ui/charts/utils/extend'
  export default {
    name: 'MyDvChart',
    mixins: [Chart],
    components: {
      MyChart,
      Loading
    },
    props: {
      options: [Object, Function]
    },
    data() {
      return {
        currentOptions: null
      }
    },
    watch: {
      chartData: {
        immediate: true,
        handler(val) {
          this.mergeOptions(val)
        }
      },
      options: {
        handler(val) {
          this.mergeOptions(this.chartData)
        }
      }
    },
    methods: {
      mergeOptions(data) {
        const opts = typeof this.options === 'function'
          ? this.options(data)
          : (this.options || {})
        setExtend(opts, this.extend || {})
        this.currentOptions = Object.freeze(merge({}, this.currentOptions, opts))
      }
    }
  }
</script>
