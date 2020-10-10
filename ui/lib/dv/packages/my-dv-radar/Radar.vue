<template>
  <Box class="my-dv-chart my-dv-radar"
       default-width="400px"
       default-height="400px"
       v-bind="$attrs">
    <Loading v-if="loading" :zoom="0.6"></Loading>
    <MyChartRadar v-else
                  v-on="$listeners"
                  :debug="debug"
                  :settings="{indicator:indicator}"
                  :theme="theme"
                  :extend="options"
                  :width="`${width}px`"
                  :height="`${height}px`"
                  :data="chartData"></MyChartRadar>
  </Box>
</template>

<script>
  import {MyChartRadar} from '$ui/charts'
  import Chart from '../../mixins/Chart'
  import {darken} from '../../utils/color'
  import Loading from '../my-dv-loading'
  import merge from 'lodash/merge'

  export default {
    name: 'MyDvRadar',
    mixins: [Chart],
    components: {
      Loading,
      MyChartRadar
    },
    props: {
      indicator: {
        type: [Array, Number],
        default() {
          return 100
        }
      },
      colors: Array
    },
    computed: {
      options() {
        const extend = typeof this.extend === 'function' ? this.extend() : this.extend
        const {textColor} = this?.page?.settings || {
          textColor: '#b4e4ff'
        }
        const darkLine = darken(textColor, 60)
        return Object.freeze(merge({
          color: this.colors,
          radar: {
            name: {
              textStyle: {
                fontSize: 22,
                color: textColor,
                padding: [3, 5]
              }
            },
            splitNumber: 4,
            splitArea: {
              show: true,
              areaStyle: {
                color: ['rgba(12,62,129,0.1)', 'rgba(12,62,129,0.2)']
              }
            },
            splitLine: {
              lineStyle: {
                color: darkLine
              }
            },
            axisLine: {
              lineStyle: {
                color: darkLine
              }
            }
          }
        }, extend))
      }
    }
  }
</script>
