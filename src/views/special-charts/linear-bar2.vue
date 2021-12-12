<template>
<div>
  <div style="height:500px">
     <my-dv-page target="parent" fit>
        <my-dv-line fit :columns="columns"  :rows="rows" legend :settings="settings" :extend="extend" ></my-dv-line>
     </my-dv-page>
   </div>

   
</div>
   
</template>
<script>
import {LinearGradient} from 'echarts/lib/util/graphic'
export default {
  data() {
    return {
       columns: ['月份', '访问量', '留存率'],
       rows: [
            ['一月', 100, 30],
            ['二月', 60, 20],
            ['三月', 78, 25],
            ['四月', 90, 40],
            ['五月', 110, 70],
            ['六月', 87, 60],
            ['七月', 90, 76],
            ['八月', 75, 45],
            ['九月', 63, 46],
            ['十月', 80, 70],
            ['十一月', 90, 85],
            ['十二月', 105, 96]
        ],
        settings: {
          valueAxis: ['访问量', '留存率'],
          bars: ['访问量'],
          smooth: false
      },
      extend: {
        color: ['rgba(255, 196, 53, 1)'],
        legend: {
          left: 'center'
        },
        grid: {
          right: 60
        },
        'series[0].itemStyle': { 
          normal: {
            /* 
              配置渐变色
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#05F5FF' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: 'rgba(5, 245, 255, 0.1)' // 100% 处的颜色
                  }
                ],
                global: false // 缺省为 false
              }
            */
            // 使用 “LinearGradient”函数
            color: new LinearGradient(0, 0, 0, 0.9, [
              {
                offset: 0,
                color: '#05F5FF'
              },
              {
                offset: 1,
                color: 'rgba(5, 245, 255, 0.1)' 
              }
            ])
          }
        },
        'series[1].lineStyle': { 
          normal: {
            width: 4
          }
        },
        'series[1].smooth': 0
      }
    }
  }
}
</script>