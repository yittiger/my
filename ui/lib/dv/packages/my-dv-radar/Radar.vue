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
  /**
   * 雷达图
   * @module $ui/dv/my-dv-radar
   */
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
    /**
     * 属性参数
     * @member props
     * @property {Array} [columns] 数据列
     * @property {Array} [rows] 数据行
     * @property {Function} [loader] 数据加载函数，必须返回Promise
     * @property {Object} [settings] 图表的私有设置
     * @property {Object|Function} [extend] 扩展图表参数选项
     * @property {boolean} [debug] 开启打印调试信息
     * @property {number|number[]} [indicator=100] 指示器最大值
     * @property {boolean} [circle] 圆形状
     * @property {string[]} [colors] 颜色
     */
    props: {
      indicator: {
        type: [Array, Number],
        default() {
          return 100
        }
      },
      circle: Boolean,
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
            shape: this.circle ? 'circle' : null,
            radius: '60%',
            name: {
              textStyle: {
                fontSize: 16,
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
