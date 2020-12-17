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

  /**
   * 柱状图
   * @module $ui/dv/my-dv-bar
   */
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
     * @property {boolean} [gradient] 颜色渐变
     * @property {boolean} [legend] 显示图例
     */
    props: {
      rotate: Boolean,
      cross: Boolean,
      gradient: Boolean,
      legend: Boolean
    },
    computed: {
      mergeExtend() {
        const extend = typeof this.extend === 'function' ? this.extend() : this.extend
        const yAxis = this?.settings?.direction === 'y'
        return Object.freeze(merge({
          color: this.gradient ? this.createLinearGradient() : undefined,
          legend: this.legend
            ? {
              top: 20,
              right: 20,
              itemWidth: 10,
              itemHeight: 10,
              icon: 'rect'
            }
            : {
              show: false
            },
          grid: {
            top: this.legend ? 50 : 30,
            right: 30,
            bottom: 50,
            left: 60
          },
          series: {
            barCategoryGap: '50%'
          },
          xAxis: {
            axisLabel: {
              interval: 0,
              rotate: (this.rotate && !yAxis) ? 45 : 0
            }
          },
          yAxis: {
            axisLabel: {
              interval: 0,
              rotate: (this.rotate && yAxis) ? 45 : 0
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
        const direction = this?.settings?.direction === 'y'
          ? [1, 0, 0, 0]
          : [0, 0, 0, 1]
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
