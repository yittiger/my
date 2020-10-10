<template>
  <Box class="my-dv-chart my-dv-progress"
       default-width="400px"
       default-height="400px"
       v-bind="$attrs">
    <MyChart v-on="$listeners"
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
  import {MyChart} from '$ui/charts'
  import Chart from '../../mixins/Chart'

  import merge from 'lodash/merge'

  export default {
    name: 'MyDvProgress',
    mixins: [Chart],
    components: {
      MyChart
    },
    props: {
      radius: {
        type: Number,
        default: 60
      },
      title: String,
      total: {
        type: Number,
        default: 100
      },
      value: {
        type: Number,
        default: 0
      },
      fontSize: {
        type: Number,
        default: 16
      },
      precision: {
        type: Number,
        default: 0
      },
      color: {
        type: [Number, String],
        default: 0
      }
    },
    data() {
      return {
        currentValue: 0,
        animation: false
      }
    },
    watch: {
      value: {
        immediate: true,
        handler(val) {
          clearTimeout(this.timer)
          this.timer = setTimeout(() => {
            this.animation = true
            this.currentValue = val
          }, 200)
        }
      }
    },
    computed: {
      percent() {
        return (this.currentValue * 100 / this.total).toFixed(this.precision)
      },
      seriesData() {
        const colors = this?.page?.settings?.colors || []
        const color = typeof this.color === 'number'
          ? (colors[this.color] || '#1890FF')
          : this.color
        return [
          {
            name: 'total',
            value: this.total - this.currentValue,
            itemStyle: {
              normal: {
                shadowBlur: 1,
                shadowColor: 'rgba(255,255,255,.4)',
                color: 'rgba(1,15,80,.4)'
              }
            }
          },
          {
            name: 'value',
            value: this.currentValue,
            itemStyle: {
              normal: {
                shadowBlur: 1,
                shadowColor: color,
                color: color
              }
            }
          }
        ]
      },
      options() {
        const extend = typeof this.extend === 'function' ? this.extend() : this.extend
        const fontSize = this.fontSize
        const center = ['50%', '50%']
        const radius = this.radius
        return Object.freeze(merge({
          animation: this.animation,

          title: [{
            text: `${this.percent}%`,
            x: 'center',
            y: 'center',
            textStyle: {
              fontSize: fontSize * 1.5
            }
          }, {
            text: this.title,
            x: 'center',
            y: `${50 + radius / 2 + 2}%`,
            textStyle: {
              fontSize
            }
          }],
          legend: {
            show: false
          },
          tooltip: {
            show: false
          },
          series: [
            {
              type: 'pie',
              data: this.seriesData,
              z: 3,
              center: center,
              radius: [`${radius - 15}%`, `${radius}%`],
              hoverAnimation: false,
              clockwise: true,
              avoidLabelOverlap: false,
              hoverOffset: 15,
              label: {
                show: false
              }
            },
            {
              name: '第一层环',
              type: 'pie',
              z: 2,
              tooltip: {
                show: false
              },
              center: center,
              radius: [`${radius + 2}%`, `${radius + 5}%`],
              hoverAnimation: false,
              clockWise: false,
              itemStyle: {
                normal: {
                  shadowBlur: 1,
                  shadowColor: 'rgba(255,255,255,.1)',
                  color: 'rgba(1,15,80,.2)'
                }
              },
              label: {
                show: false
              },
              data: [100]
            }
          ]
        }, extend))
      }
    }
  }
</script>
