<template>
  <Box class="my-dv-chart my-dv-line"
       default-width="600px"
       default-height="400px"
       v-bind="$attrs">
    <Loading v-if="loading" :zoom="0.6"></Loading>
    <MyChartPie v-else
                v-on="$listeners"
                :debug="debug"
                :theme="theme"
                :settings="mergeSettings"
                :extend="mergeExtend"
                :width="`${width}px`"
                :height="`${height}px`"
                :data="chartData"></MyChartPie>
  </Box>
</template>
<script>

  import {MyChartPie} from '$ui/charts'
  import Chart from '../../mixins/Chart'
  import Loading from '../my-dv-loading'
  import merge from 'lodash/merge'

  export default {
    name: 'MyDvPie',
    mixins: [Chart],
    components: {
      MyChartPie,
      Loading
    },
    props: {
      legend: {
        type: [String, Boolean],
        default: 'h',
        validator(val) {
          return ['v', 'h', false].includes(val)
        }
      },
      rose: Boolean,
      limit: {
        type: Number,
        default: 100
      },
      colorful: {
        type: Boolean,
        default: true
      },
      // 颜色索引，colorful=false 有效
      colorIndex: {
        type: Number,
        default: 0
      }
    },
    computed: {
      mergeExtend() {
        const extend = typeof this.extend === 'function' ? this.extend() : this.extend
        const colors = this.page?.settings?.colors || []
        const isV = this.legend === 'v'
        return Object.freeze(merge({
          legend: {
            show: !!this.legend,
            top: 20,
            left: isV ? undefined : 20,
            right: isV ? 20 : undefined,
            itemWidth: 10,
            itemHeight: 10,
            icon: 'rect',
            align: 'auto',
            orient: isV ? 'vertical' : 'horizontal'
          },
          series: {
            roseType: this.rose ? 'radius' : false,
            labelLine: {
              smooth: 0.2,
              length: 10,
              length2: 20
            },
            itemStyle: {
              color: this.colorful ? undefined : colors[this.colorIndex],
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }, extend))
      },
      mergeSettings() {
        const settings = this.settings
        let center = ['50%', '50%']
        switch (this.legend) {
          case 'v':
            center = ['45%', '50%']
            break
          case 'h':
            center = ['50%', '55%']
            break
        }
        return {
          center,
          radius: [0, '60%'],
          limit: this.limit,
          ...settings
        }
      }
    }
  }
</script>
