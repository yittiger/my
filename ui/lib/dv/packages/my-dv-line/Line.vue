<template>
  <Box class="my-dv-chart my-dv-line"
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
  /**
   * 折线图
   * @module $ui/dv/my-dv-line
   */
  import {MyChartLine} from '$ui/charts'
  import Chart from '../../mixins/Chart'
  import Loading from '../my-dv-loading'
  import merge from 'lodash/merge'

  export default {
    name: 'MyDvLine',
    mixins: [Chart],
    components: {
      MyChartLine,
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
     * @property {boolean} [area] 开启显示区域
     * @property {boolean} [rotate] 旋转类目标签
     * @property {boolean} [cross] 开启 cross tooltip
     * @property {boolean} [legend] 显示图例
     */
    props: {
      area: Boolean,
      rotate: Boolean,
      cross: Boolean,
      legend: Boolean
    },
    computed: {
      mergeExtend() {
        const extend = typeof this.extend === 'function' ? this.extend() : this.extend
        return Object.freeze(merge({
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
