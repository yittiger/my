<template>
  <Box class="my-dv-chart my-dv-pictorial"
       default-width="600px"
       default-height="400px"
       v-bind="$attrs">
    <Loading v-if="loading" :zoom="0.6"></Loading>
    <MyChart v-else
             v-on="$listeners"
             :debug="debug"
             :theme="theme"
             :options="options"
             :width="`${width}px`"
             :height="`${height}px`"></MyChart>
  </Box>
</template>

<script>
  /**
   * 象形柱状图
   * @module $ui/dv/my-dv-pictorial
   */
  import 'echarts/lib/chart/pictorialBar'
  import {MyChart} from '$ui/charts'
  import Chart from '../../mixins/Chart'
  import Loading from '../my-dv-loading'
  import merge from 'lodash/merge'

  export default {
    name: 'MyDvPictorial',
    mixins: [Chart],
    components: {
      MyChart,
      Loading
    },
    /**
     * 属性参数
     * @member props
     * @property {boolean|object} [label] Label配置
     * @property {Function} [symbol] 定义图标
     * @property {number|string} [color=0] 颜色
     */
    props: {
      label: [Boolean, Object],
      symbol: Function,
      color: {
        type: [Number, String],
        default: 0
      }
    },
    computed: {
      items() {
        const rows = (this.chartData?.rows || []).slice(0)
        rows.sort((a, b) => {
          return b[1] - a[1]
        })
        return rows
      },
      xAxisData() {
        const rows = this.items || []
        return rows.map(row => row[0])
      },
      itemData() {
        const rows = this.items || []
        return rows.map(row => row[1])
      },
      itemLabel() {
        return this.label
          ? {
            show: true,
            position: 'top',
            fontSize: 16,
            ...this.label
          }
          : null
      },
      colors() {
        const colors = this?.page?.settings?.colors || []
        const color = typeof this.color === 'number'
          ? (colors[this.color] || '#1890FF')
          : this.color
        return [color, color]
      },
      symbolData() {
        if (this.symbol) {
          const rows = this.items || []
          return rows.map((row, index) => {
            return {
              value: row[1],
              ...this.symbol(row, index)
            }
          })
        }
        return []
      },
      options() {
        const extend = typeof this.extend === 'function' ? this.extend() : this.extend
        return Object.freeze(merge({
          color: this.colors,
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'none'
            },
            formatter: function (params) {
              return params[0].name + ': ' + params[0].value;
            }
          },
          xAxis: {
            data: this.xAxisData,
            axisTick: {show: false},
            axisLine: {show: false}
          },
          yAxis: {
            splitLine: {show: false},
            axisTick: {show: false},
            axisLine: {show: false},
            axisLabel: {show: false}
          },
          series: [
            {
              name: 'hill',
              type: 'pictorialBar',
              barCategoryGap: '-130%',
              symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
              itemStyle: {
                opacity: 0.5
              },
              label: this.itemLabel,
              emphasis: {
                itemStyle: {
                  opacity: 1
                }
              },
              data: this.itemData,
              z: 2
            },
            {
              name: 'glyph',
              type: 'pictorialBar',
              barGap: '-100%',
              symbolPosition: 'end',
              symbolSize: 40,
              symbolOffset: [0, '-120%'],
              data: this.symbolData
            }
          ]
        }, extend))
      }
    }
  }
</script>

