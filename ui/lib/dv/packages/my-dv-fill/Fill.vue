<template>
  <Box class="my-dv-chart my-dv-fill"
       default-width="400px"
       default-height="400px"
       v-bind="$attrs">
    <MyChartFill v-on="$listeners"
                 :debug="debug"
                 :theme="theme"
                 :extend="options"
                 :width="`${width}px`"
                 :height="`${height}px`"
                 :data="values"></MyChartFill>
  </Box>
</template>


<script>
  /**
   * 水位图
   * @module $ui/dv/my-dv-fill
   */
  import {MyChartFill} from '$ui/charts'
  import Chart from '../../mixins/Chart'
  import merge from 'lodash/merge'

  export default {
    name: 'MyDvFill',
    mixins: [Chart],
    components: {
      MyChartFill
    },
    /**
     * 属性参数
     * @member props
     * @property {number} [value=0] 水位值，取值 0~1
     * @property {Number|String} [color=0] 颜色
     * @property {Number} [fontSize=24] 字体大小
     *
     */
    props: {
      value: {
        type: Number,
        default: 0
      },
      color: {
        type: [Number, String],
        default: 0
      },
      fontSize: {
        type: Number,
        default: 24
      }
    },
    computed: {
      values() {
        return [1, 1, 1, 1, 1].map(n => this.value * n)
      },
      options() {
        const extend = typeof this.extend === 'function' ? this.extend() : this.extend
        const colors = this?.page?.settings?.colors || []
        const color = typeof this.color === 'number'
          ? (colors[this.color] || '#1890FF')
          : this.color
        return Object.freeze(merge({
          series: {
            color: [color],
            radius: '80%',
            backgroundStyle: {
              borderWidth: 2,
              borderColor: color,
              color: null
            },
            outline: {
              itemStyle: {
                borderWidth: 5,
                borderColor: color,
                borderType: 'dashed'
              }
            },
            label: {
              normal: {
                textStyle: {
                  fontSize: this.fontSize,
                  color: color
                }
              }
            }
          }
        }, extend))
      }
    }
  }
</script>

