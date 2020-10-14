<template>
  <Box class="my-dv-chart my-dv-rank"
       default-width="400px"
       default-height="600px"
       v-bind="$attrs">
    <Loading v-if="loading" :zoom="0.6"></Loading>
    <MyChart v-else
             v-on="$listeners"
             :debug="debug"
             :theme="theme"
             :settings="{direction:'y'}"
             :options="mergeExtend"
             :width="`${width}px`"
             :height="`${height}px`"
    ></MyChart>
  </Box>
</template>
<script>
  /**
   * 排名
   * @module $ui/dv/my-dv-rank
   */
  import {MyChart} from '$ui/charts'
  import 'echarts/lib/chart/bar'
  import Chart from '../../mixins/Chart'
  import Loading from '../my-dv-loading'
  import merge from 'lodash/merge'
  import {LinearGradient} from 'echarts/lib/util/graphic'


  export default {
    name: 'MyDvRank',
    mixins: [Chart],
    components: {
      MyChart,
      Loading
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
     * @property {boolean} [rotate] 旋转类目标签
     * @property {boolean} [cross] 开启 cross tooltip
     */
    props: {
      rotate: Boolean,
      cross: Boolean
    },
    computed: {
      seriesData() {
        const rows = (this.chartData.rows || []).slice()
        rows.sort(function (a, b) {
          return a[1] - b[1]
        })
        return rows.map(([name, value], index) => {
          return {
            name,
            value,
            itemStyle: {
              color: this.createLinearGradient(index, rows.length)
            },
            label: {
              show: true,
              color: '#b4e4ff'
            }
          }
        })
      },
      mergeExtend() {
        const extend = typeof this.extend === 'function' ? this.extend() : this.extend
        return Object.freeze(merge({
          legend: {
            show: false
          },
          dataset: null,
          grid: {
            top: 30,
            right: 30,
            bottom: 50,
            left: 60
          },
          series: {
            barCategoryGap: '50%',
            type: 'bar',
            label: {
              position: 'right',
              show: true
            },
            data: this.seriesData
          },
          yAxis: {
            axisLabel: {
              interval: 0,
              rotate: this.rotate ? 45 : 0
            },
            type: 'category',
            axisTick: {alignWithLabel: true},
            boundaryGap: true,
            data: this.seriesData.map(n => n.name)
          },
          xAxis: {},
          tooltip: {
            axisPointer: {
              type: this.cross ? 'cross' : 'item'
            }
          }
        }, extend))
      }
    },
    methods: {
      createLinearGradient(index, total) {
        const colors = [
          ['#a4226a', '#ab181f'],
          ['#70980c', '#af620f'],
          ['#0d8888', '#398912']
        ]
        const [from, to] = colors[Math.abs(index + 1 - total)] || ['#2a39c3', '#2a71c4']
        return new LinearGradient(0, 0, 1, 0, [
          {offset: 0, color: from},
          {offset: 1, color: to}
        ])
      }
    }
  }
</script>
