<template>
  <Box class="my-dv-chart my-dv-ranking"
       default-width="600px"
       default-height="400px"
       v-bind="$attrs">
    <Loading v-if="loading" :zoom="0.6"></Loading>
    <MyChartBar v-else
                v-on="$listeners"
                :debug="debug"
                :theme="theme"
                :settings="{ direction: 'y'}"
                :extend="mergeExtend"
                :width="`${width}px`"
                :height="`${height}px`"
                :data="chartData"></MyChartBar>
  </Box>
</template>
<script>

  import {MyChartBar} from '$ui/charts'
  import Chart from '../../mixins/Chart'
  import Loading from '../my-dv-loading'
  import merge from 'lodash/merge'
  import {LinearGradient} from 'echarts/lib/util/graphic'

  export default {
    name: 'MyDvRanking',
    mixins: [Chart],
    components: {
      MyChartBar,
      Loading
    },
    props: {
      rotate: Boolean,
      cross: Boolean
    },
    computed: {
      mergeExtend() {
        const extend = typeof this.extend === 'function' ? this.extend() : this.extend
        return Object.freeze(merge({
          color: this.createLinearGradient(),
          legend: {
            show: false
          },
          grid: {
            right: 20,
            bottom: 40,
            left: 60,
            top: 20
          },
          series: {
            barCategoryGap: '50%'
          },
          yAxis: {
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
    },
    methods: {
      createLinearGradient() {
        const colors = this?.page.settings?.colors || []
        return [
          new LinearGradient(1, 0, 0, 0, [
            {offset: 0, color: colors[0]},
            {offset: 1, color: colors[1]}
          ])
        ]
      }
    }
  }
</script>
