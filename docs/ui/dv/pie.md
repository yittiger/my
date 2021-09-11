# Pie 饼图

图表组件是基于ECharts进行封装，统一风格和简化使用。 相关概念，需参考[图表组件库](../charts/README.md)。

饼图文档 <api-link href="dv/my-dv-pie">MyDvPie</api-link>

:::tip 提示
继承 <api-link href="dv/my-dv-box">MyDvBox</api-link>
:::

## 基本setting参数

| 参数名 | 类型 | 默认值 | 描述 |
|----|----|----|----|
| center | Array | ['50%', '50%'] | 中心点位置 |
| radius | String, Number, Array | [0, '75%'] | 饼图的半径 |
| legend | String, Object | 'horizontal' | 可以传字符串'horizontal', 'vertical', 或参考echart legend的配置 |
| roseType | Boolean, String | false | 配置玫瑰图， 可传值为true, false, 'radius', 'area' |
| limit | Number |  | 限制个数，超出的合并成其他 | 
| level | Array |  | 层级 实现 多圆饼图, 二维数组 如：[['第一组A','第一组B'], ['第二组A','第二组B'], ['第三组A', '第三组B']] | 
| levelGap | Number | 10 | 层级饼图的分隔大小（占比百分比） |

## 效果演示
:::demo
```html
<template>
   <div style="height:600px">
     <my-dv-page target="parent" fit>
        <my-dv-border2 width="80%" height="80%" x-align="center" y-align="middle">
           <my-dv-pie fit :columns="columns" :rows="rows" rose></my-dv-pie>
        </my-dv-border2>
     </my-dv-page>
   </div>
</template>
<script>
export default {
  data() {
    return {
        columns: ['渠道', '访问量'],
          rows: [
              ['直接访问', 320],
              ['邮件营销', 302],
              ['联盟广告', 334],
              ['视频广告', 390],
              ['搜索引擎', 330]
          ]
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
        <my-dv-pie fit :columns="columns" :rows="rows"></my-dv-pie>
     </my-dv-page>
   </div>
</template>
<script>
export default {
  data() {
    return {
        columns: ['渠道', '访问量'],
          rows: [
              ['直接访问', 320],
              ['邮件营销', 302],
              ['联盟广告', 334],
              ['视频广告', 390],
              ['搜索引擎', 330]
          ]
    }
  }
}
</script>
```
:::

## 图例

:::demo
```html
<template>
   <div style="height:600px">
     <my-dv-page target="parent" fit>
        <my-dv-pie x-align="left" y-align="middle" :columns="columns" :rows="rows" legend="h"></my-dv-pie>
        <my-dv-pie x-align="right" y-align="middle" :columns="columns" :rows="rows" legend="v"></my-dv-pie>
     </my-dv-page>
   </div>
</template>
<script>
export default {
  data() {
    return {
        columns: ['渠道', '访问量'],
          rows: [
              ['直接访问', 320],
              ['邮件营销', 302],
              ['联盟广告', 334],
              ['视频广告', 390],
              ['搜索引擎', 330]
          ]
    }
  }
}
</script>
```
:::

# 玫瑰图

:::demo
```html
<template>
   <div style="height:600px">
     <my-dv-page target="parent" fit>
        <my-dv-pie fit :columns="columns" :rows="rows" rose :colorful="false"></my-dv-pie>
     </my-dv-page>
   </div>
</template>
<script>
export default {
  data() {
    return {
        columns: ['渠道', '访问量'],
          rows: [
              ['直接访问', 320],
              ['邮件营销', 302],
              ['联盟广告', 334],
              ['视频广告', 390],
              ['搜索引擎', 330]
          ]
    }
  }
}
</script>
```
:::

# 限制数据项

:::demo
```html
<template>
   <div style="height:600px">
     <my-dv-page target="parent" fit>
        <my-dv-pie fit :columns="columns" :rows="rows" :limit="5"></my-dv-pie>
     </my-dv-page>
   </div>
</template>
<script>
export default {
  data() {
    return {
        columns: ['渠道', '访问量'],
          rows: [
              ['直接访问', 320],
              ['邮件营销', 302],
              ['联盟广告', 334],
              ['视频广告', 390],
              ['搜索引擎', 330],
              ['其他1', 20],
              ['其他2', 10],
              ['其他3', 9],
              ['其他4', 8],
              ['其他5', 2]
          ]
    }
  }
}
</script>
```
:::
