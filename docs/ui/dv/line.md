# Line 折线图

图表组件是基于ECharts进行封装，统一风格和简化使用。 相关概念，需参考[图表组件库](../charts/README.md)。

折线图文档 <api-link href="dv/my-dv-line">MyDvLine</api-link>

:::tip 提示
继承 <api-link href="dv/my-dv-box">MyDvBox</api-link>
:::

## 效果演示
:::demo
```html
<template>
   <div style="height:600px">
     <my-dv-page target="parent" fit>
        <my-dv-border2 width="80%" height="80%" x-align="center" y-align="middle">
          <my-dv-line fit
                      :columns="columns"
                      :rows="rows"
                      legend
                      :settings="settings"></my-dv-line>
        </my-dv-border2>
     </my-dv-page>
   </div>
</template>
<script>
  export default {
    data() {
      return {
       columns: ['月份', '直接访问', '搜索引擎'],
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
           stack: ['直接访问', '搜索引擎']
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .my-dv-page {
    background:url("~$ui/assets/bg/02.png") no-repeat 0 0;
  }
</style>
```
:::


## 基础用法
:::demo
```html
<template>
   <div style="height:600px">
     <my-dv-page target="parent" fit>
        <my-dv-line fit :columns="columns" :rows="rows"></my-dv-line>
     </my-dv-page>
   </div>
</template>
<script>
export default {
  data() {
    return {
        columns: ['月份', '访问量'],
        rows: [
            ['一月', 100],
            ['二月', 60],
            ['三月', 78],
            ['四月', 90],
            ['五月', 110],
            ['六月', 87],
            ['七月', 90],
            ['八月', 75],
            ['九月', 63],
            ['十月', 80],
            ['十一月', 90],
            ['十二月', 105]
        ]
    }
  }
}
</script>
```
:::


## 开启区域、旋转标签、cross、图例

:::demo
```html
<template>
   <div style="height:600px">
     <my-dv-page target="parent" fit>
        <my-dv-line fit :columns="columns" :rows="rows" area rotate cross legend></my-dv-line>
     </my-dv-page>
   </div>
</template>
<script>
export default {
  data() {
    return {
        columns: ['月份', '访问量'],
        rows: [
            ['一月', 100],
            ['二月', 60],
            ['三月', 78],
            ['四月', 90],
            ['五月', 110],
            ['六月', 87],
            ['七月', 90],
            ['八月', 75],
            ['九月', 63],
            ['十月', 80],
            ['十一月', 90],
            ['十二月', 105]
        ]
    }
  }
}
</script>
```
:::


## 多条折线

:::demo
```html
<template>
   <div style="height:600px">
     <my-dv-page target="parent" fit>
        <my-dv-line fit :columns="columns" :rows="rows" legend></my-dv-line>
     </my-dv-page>
   </div>
</template>
<script>
export default {
  data() {
    return {
       columns: ['月份', '访问量', '成交量'],
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
        ]
    }
  }
}
</script>
```
:::


# 堆叠

:::demo
```html
<template>
   <div style="height:600px">
     <my-dv-page target="parent" fit>
        <my-dv-line fit :columns="columns" :rows="rows" legend :settings="settings"></my-dv-line>
     </my-dv-page>
   </div>
</template>
<script>
export default {
  data() {
    return {
       columns: ['月份', '直接访问', '搜索引擎'],
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
           stack: ['直接访问', '搜索引擎']
      }
    }
  }
}
</script>
```
:::

## 线柱混合

:::demo
```html
<template>
   <div style="height:600px">
     <my-dv-page target="parent" fit>
        <my-dv-line fit :columns="columns" :rows="rows" legend :settings="settings" :extend="extend"></my-dv-line>
     </my-dv-page>
   </div>
</template>
<script>
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
          bars: ['访问量']
      },
      extend: {
        legend: {
          left: 'center'
        },
        grid: {
          right: 60
        }
      }
    }
  }
}
</script>
```
:::


