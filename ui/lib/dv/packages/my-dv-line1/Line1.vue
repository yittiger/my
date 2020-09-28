<template>
  <Box class="my-dv-chart my-dv-line1"
       default-width="600px"
       default-height="400px"
       v-bind="$attrs">
    <Loading v-if="loading" :zoom="0.6"></Loading>
    <MyChartLine v-else
                 v-on="$listeners"
                 :debug="debug"
                 :theme="theme"
                 :settings="settings"
                 :extend="mergeExtend"
                 :width="`${width}px`"
                 :height="`${height}px`"
                 :data="chartData"></MyChartLine>
  </Box>
</template>
<script>

  import {MyChartLine} from '$ui/charts'
  import Chart from '../../mixins/Chart'
  import Loading from '../my-dv-loading'
  import merge from 'lodash/merge'

  export default {
    name: 'MyDvLine1',
    mixins: [Chart],
    components: {
      MyChartLine,
      Loading
    },
    props: {
      area: Boolean,
      rotate: Boolean,
      cross: Boolean
    },
    computed: {
      mergeExtend() {
        const extend = typeof this.extend === 'function' ? this.extend() : this.extend
        return Object.freeze(merge({
          legend: {
            top: 20,
            right: 20,
            itemWidth: 10,
            itemHeight: 10,
            icon: 'rect'
          },
          grid: {
            right: 20,
            bottom: 40,
            left: 50
          },
          series: {
            barCategoryGap: '40%',
            areaStyle: this.area ? {opacity: 0.2} : undefined
          },
          xAxis: {
            axisLabel: {
              interval: 0,
              rotate: this.rotate ? 45 : 0
            }
          },
          tooltip: {
            axisPointer: {
              type: this.cross ? 'cross' : 'item'
            }
          }
        }, extend))
      }
    }
  }
</script>
