<template>
  <Box class="my-dv-chart my-dv-pie"
       default-width="400px"
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

  /**
   * 饼图
   * @module $ui/dv/my-dv-pie
   */
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
    /**
     * 属性参数
     * @member props
     * @property {Array} [columns] 数据列
     * @property {Array} [rows] 数据行
     * @property {Function} [loader] 数据加载函数，必须返回Promise
     * @property {Object} [settings] 图表的私有设置
     * @property {Object|Function} [extend] 扩展图表参数选项
     * @property {boolean} [debug] 开启打印调试信息
     * @property {boolean} [legend] 显示图例, 可选值：'v', 'h', false
     * @property {boolean} [rose] 玫瑰图
     * @property {number} [limit=100] 限制项数，超过的项合并到其他
     * @property {boolean} [colorful=true] 多色彩，false时采用单色
     * @property {number|string} [color] 单色时的颜色取色索引或色码，colorful=true才有效
     */
    props: {
      legend: {
        type: [String, Boolean],
        default: false,
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
      // 颜色，colorful=false 有效
      color: {
        type: [Number, String],
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
              color: this.colorful ? undefined : (typeof this.color === 'number' ? colors[this.color] : this.color),
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
