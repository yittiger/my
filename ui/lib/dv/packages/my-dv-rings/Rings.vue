<template>
  <DvChart class="my-dv-rings" :options="optionsFunc" v-bind="{...$props,...$attrs}"></DvChart>
</template>
<script>
  /**
   * 多环图
   * @module $ui/dv/my-dv-ring
   */
  import 'echarts/lib/chart/pie'
  import 'echarts/lib/component/grid'
  import DvChart from '../my-dv-chart'
  import Chart from '../../mixins/Chart'
  import merge from '$ui/charts/utils/extend'

  export default {
    name: 'MyDvRings',
    mixins: [Chart],
    components: {
      DvChart
    },
    /**
     * 属性参数
     * @member props
     * @property {Array} [columns] 数据列
     * @property {Array} [rows] 数据行
     * @property {Function} [loader] 数据加载函数，必须返回Promise
     * @property {Object} [settings] 图表的私有设置
     * @property {Object|Function} [extend] 扩展图表参数选项
     * @property {boolean} [debug] 开启打印调试信息
     */
    props: {},
    data() {
      return {
        max: 80
      }
    },
    methods: {
      maxValue({rows = []}) {
        if (rows.length === 0) return 0
        const values = rows.map(([name, value]) => value)
        return Math.max.apply(Math.max, values)
      },
      itemSize({rows = []}) {
        const count = rows.length
        return count > 0 ? this.max / count : this.max
      },
      gap(data) {
        return this.itemSize(data) / 2
      },
      grid(data) {
        const gap = this.gap(data)
        const [top, bottom] = [10 - gap / 4, 50 + gap / 4]
        return {
          top: `${top}%`,
          bottom: `${bottom}%`,
          left: '50%',
          containLabel: false
        }
      },
      total({rows = []}) {
        let sum = 0
        rows.forEach(n => {
          sum += n[1]
        })
        return sum
      },
      series(data) {
        const itemSize = this.itemSize(data)
        const gap = this.gap(data)
        const max = this.max
        const rows = (data.rows || []).slice()
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
              value: this.maxValue(data) / 0.75 - value,
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
      lineYAxis({rows = []}) {
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
      optionsFunc(data) {
        const extend = typeof this.extend === 'function' ? this.extend() : this.extend
        const rows = data.rows || []
        const options = {
          series: this.series(data),
          grid: this.grid(data),
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
                const [name, value] = rows[params];
                return `{font|●}{font|${name}: }${value}`
              },
              interval: 0,
              inside: true,
              show: true
            },
            data: this.lineYAxis(data)
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
