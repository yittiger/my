# 图表类插件集合1
本章中提供echart图标的特效参考案例，部分为组件可安装使用，部分为案例代码（自行copy）

## 伪立体柱状图组件

```sh 
// 安装命令
npm run widgets charts/column-bar
```
组件使用如下：
:::demo

```html
<template>
<div>
  <div>
  类型： <my-radio v-model="type" :options="[{label: '方', value: 'diamond'}, {label: '圆', value: 'circle'}]"></my-radio>  
  </div>
   <div>
    颜色： <el-color-picker v-model="color" > </el-color-picker>  
  </div>
  <column-bar height="300px" :type="type" :color="color" :data="data" :bar-width="40" bottom-color="white" top-color="white" :extend="extend"></column-bar> 
</div>
</template> 
<script>
import ColumnBar from '$ui/widgets/charts/column-bar/index' // 实际开发时，自行引入安装于项目中的组件
export default {
  components: {
    ColumnBar
  },
  data() {
    return {
      type: 'circle',
      color: '#409EFF',
      data: {
        yData: [
          70, 
          1230,
          425, 
          290, 
          140
        ],
        xData: ['本年话\n务总量', '本年人工\n话务量', '每万客户\n呼入量', '每万客户\n呼出量', '每万客户\n呼入']
      }, 
      extend: {
        title: {
          text: 'ECharts 入门示例'
        }
      } 
    }
  }
}

</script>
```html
:::

## 柱状渐变

无插件，代码如下 [参考案例](https://www.makeapie.com/editor.html?c=xoK1R_BnCa) 

:::demo

```html
<template>
 
<div style="height:400px">
  <my-dv-page target="parent" fit>
  <!-- <my-dv-title>标题文本</my-dv-title> -->
    <my-dv-line fit :columns="columns"  :rows="rows" legend :settings="settings" :extend="extend" ></my-dv-line>
  </my-dv-page>
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
              JSON 方式 配置渐变色
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
```html
:::