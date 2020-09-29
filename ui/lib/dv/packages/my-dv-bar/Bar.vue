<template>
  <Box class="my-dv-chart my-dv-bar"
       default-width="600px"
       default-height="400px"
       v-bind="$attrs">
    <Loading v-if="loading" :zoom="0.6"></Loading>
    <MyChartBar v-else
                v-on="$listeners"
                :debug="debug"
                :theme="theme"
                :settings="settings"
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
    name: 'MyDvBar',
    mixins: [Chart],
    components: {
      MyChartBar,
      Loading
    },
    props: {
      rotate: Boolean,
      cross: Boolean,
      gradient: Boolean
    },
    computed: {
      mergeExtend() {
        const extend = typeof this.extend === 'function' ? this.extend() : this.extend
        return Object.freeze(merge({
          color: this.gradient ? this.createLinearGradient() : undefined,
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
            barCategoryGap: '40%'
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
    },
    methods: {
      createLinearGradient() {
        const colors = this?.page.settings?.colors || []
        const direction = this?.settings?.direction === 'x'
          ? [0, 0, 0, 1]
          : [1, 0, 0, 0]
        return colors.map((color, i) => {
          const target = colors[(i + 1) % colors.length]
          return new LinearGradient(...direction, [
            {offset: 0, color: color},
            {offset: 1, color: target}
          ])
        })
      }
    }
  }
</script>
