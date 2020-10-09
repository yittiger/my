<template>
  <Box class="my-dv-chart my-dv-rings"
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
             :height="`${height}px`"
             :data="chartData"></MyChart>
  </Box>
</template>
<script>
  import 'echarts/lib/chart/pie'
  import 'echarts/lib/component/grid'
  import {MyChart} from '$ui/charts'
  import Chart from '../../mixins/Chart'
  import Loading from '../my-dv-loading'
  import merge from '$ui/charts/utils/extend'

  export default {
    name: 'MyDvRings',
    mixins: [Chart],
    components: {
      MyChart,
      Loading
    },
    props: {},
    data() {
      return {
        max: 80
      }
    },
    computed: {
      maxValue() {
        const {rows = []} = this.chartData
        const values = rows.map(([name, value]) => value)
        return Math.max.apply(Math.max, values)
      },
      itemSize() {
        const {rows = []} = this.chartData
        const count = rows.length
        return this.max / count
      },
      gap() {
        return this.itemSize / 2
      },
      grid() {
        const gap = this.gap
        const [top, bottom] = [10 - gap / 4, 50 + gap / 4]
        return {
          top: `${top}%`,
          bottom: `${bottom}%`,
          left: '50%',
          containLabel: false
        }
      },
      total() {
        const {rows = []} = this.chartData
        let sum = 0
        rows.forEach(n => {
          sum += n[1]
        })
        return sum
      },
      series() {
        const {itemSize, gap, max} = this
        const {rows = []} = this.chartData
        const pieSeries = []
        rows.sort(function (a, b) {
          return b[1] - a[1]
        })
        rows.forEach(([name, value], i) => {
          const radius = [max - i * itemSize + '%', max - gap - i * itemSize + '%']
          pieSeries.push({
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            radius: radius,
            center: ['50%', '50%'],
            label: {
              show: false
            },
            data: [{
              value: value,
              name,
              tooltip: {
                show: true,
                formatter: function (params) {
                  return `${params.name}: ${params.value}`
                }
              }
            }, {
              value: this.maxValue / 0.75 - value,
              name: '',
              tooltip: {
                show: false
              },
              itemStyle: {
                color: 'rgba(0,0,0,0)'
              }
            }
            ]
          })

          pieSeries.push({
            name: '',
            type: 'pie',
            silent: true,
            z: 1,
            clockWise: false,
            hoverAnimation: false,
            radius: radius,
            center: ['50%', '50%'],
            label: {
              show: false
            },
            data: [{
              value: 7.5,
              itemStyle: {
                color: 'rgba(255,255,255,0.1)'
              }
            }, {
              value: 2.5,
              name: '',
              itemStyle: {
                color: 'rgba(0,0,0,0)'
              }
            }]
          })
        })
        return pieSeries
      },
      lineYAxis() {
        const {rows = []} = this.chartData
        const colors = this?.page?.settings.colors || []
        const lineYAxis = []
        rows.forEach(([name, value], i) => {
          lineYAxis.push({
            value: i,
            textStyle: {
              rich: {
                font: {
                  color: colors[i] || 'rgba(255,255,255,0.5)',
                  padding: [0, 2],
                  fontSize: rows.length > 4 ? 14 : 16
                }
              }
            }
          })
        })
        return lineYAxis
      },
      options() {
        const extend = typeof this.extend === 'function' ? this.extend() : this.extend
        const {rows = []} = this.chartData
        const options = {
          series: this.series,
          grid: this.grid,
          tooltip: {},
          yAxis: [{
            type: 'category',
            show: true,
            inverse: true,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              formatter: function (params) {
                const [name] = rows[params];
                return `{font|●}{font|${name}}`
              },
              interval: 0,
              inside: true,
              show: true
            },
            data: this.lineYAxis
          }],
          xAxis: [{
            show: false
          }]
        }
        merge(options, extend || {})
        return Object.freeze(options)
      }
    }
  }
</script>
