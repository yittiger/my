<template>
<!--  -->
   <my-chart theme="light" :options="options" width="500px" height="300px" ></my-chart>
</template>

<script>
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/pictorialBar'
import echarts from 'echarts/lib/echarts'
// import graphic from 'echarts/lib/component/graphic'
// const xData = ['本年话务总量', '本年人工话务量', '每万客户呼入量']
const yData = [0, 1230, 425]
export default {
  data() {
    return {
     
      options: { 
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {
          show: true
        },
        animation: false,
        xAxis: [
          {
            type: 'category',
            data: ['本年话务总量', '本年人工话务量', '每万客户呼入量'],
            axisTick: {
              alignWithLabel: true
            },
            nameTextStyle: {
              color: '#82b0ec'
            },
            axisLine: { // 隐藏横坐标
              show: false 
            },
            axisLabel: {
              // textStyle: {
              //     color: '#fff'
              // },
              margin: 30
            }
          }
        ],
        yAxis: [
          {
            show: false
          }
        ],
        series: [
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [40, 10],
            symbolOffset: [0, -6], // 上部椭圆
            symbolPosition: 'end',
            z: 12, 
            label: {
              normal: {
                show: true,
                position: 'top',
                // "formatter": "{c}%"
                fontSize: 15,
                fontWeight: 'bold',
                color: 'red' // '顶部文字颜色'
              }
            },
            color: '#2DB1EF', // 顶部颜色
            data: yData
          },
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [40, 10],
            symbolOffset: [0, 7], // 下部椭圆
            // "barWidth": "20",
            z: 12,
            color: '#2DB1EF',
            data: yData
          },
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: function (d) {
              return d > 0 ? [50, 15] : [0, 0]
            },
            symbolOffset: [0, 12], // 下部内环
            z: 10,
            itemStyle: {
              normal: {
                color: 'transparent',
                borderColor: 'red', // '内边框颜色',
                borderType: 'solid',
                borderWidth: 1
              }
            },
            data: yData
          },
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [70, 20],
            symbolOffset: [0, 18], // 下部外环
            z: 10,
            itemStyle: {
              normal: {
                color: 'transparent',
                borderColor: 'red', // '#19465D', // '外边框颜色',
                borderType: 'solid',
                borderWidth: 2
              }
            },
            data: yData
          },
          {
            type: 'bar',
            // silent: true,
            barWidth: '40',
            barGap: '10%', // Make series be overlap
            barCateGoryGap: '10%',
            itemStyle: {
              normal: { // new echarts.
                color: new echarts.graphic.LinearGradient(0, 0, 0, 0.7, [
                    {
                        offset: 0,
                        color: '#38B2E6'
                    },
                    {
                        offset: 1,
                        color: '#0B3147'
                    }
                ]),
                opacity: 0.8
              }
            },
            data: yData
          }
        ]
      }
    }
  }
}

</script>