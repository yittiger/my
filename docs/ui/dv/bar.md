# Bar 柱状图


图表组件是基于ECharts进行封装，统一风格和简化使用。 相关概念，需参考[图表组件库](../charts/README.md)。

柱状图文档 <api-link href="dv/my-dv-bar">MyDvBar</api-link>

:::tip 提示
继承 <api-link href="dv/my-dv-box">MyDvBox</api-link>
:::

## 基本setting参数

| 参数名 | 类型 | 默认值 | 描述 |
|----|----|----|----|
| direction | String | 'x' | 排列方向，即类别在哪个轴上，值为'x' / 'y' |
| label | String, Object, Array |   | 数据项的标签设置，字符类型设置position， 对象与原生series.label设置一致 |
| valueAxis | String, Object, Array |   | 值类型轴配置, 可以参考echart的 “yAxis”的配置，如果是Array时，可以与“columns”数组的元素对应 |
| stack | Object, Array |   | 数据堆叠，同个类目轴上系列配置相同的stack值可以堆叠放置，如 ['name1', 'name2']  或  {'name': ['name1', 'name2']}，参考series.stack | 
| lines | String, Array |   | 改成线条显示的系列 |   
| smooth | Boolean, Number | 0.5 | 线条平滑，只对折线图有效 |    


## 效果演示
:::demo
```html
<template>
   <div style="height:600px">
     <my-dv-page target="parent" fit>
        <my-dv-border2 width="80%" height="80%" x-align="center" y-align="middle">
           <my-dv-bar fit :columns="columns" :rows="rows" legend></my-dv-bar>
        </my-dv-border2>
     </my-dv-page>
   </div>
</template>
<script>
export default {
  data() {
    return {
      columns: ['星期', '直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
      rows: [
          ['周一', 320, 302, 301, 334, 390, 330, 320],
          ['周二', 120, 132, 101, 134, 90, 230, 210],
          ['周三', 220, 182, 191, 234, 290, 330, 310],
          ['周四', 150, 212, 201, 154, 190, 330, 410],
          ['周五', 320, 132, 401, 334, 290, 330, 320]
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

## 基本用法
:::demo
```html
<template>
   <div style="height:600px">
     <my-dv-page target="parent" fit>
        <my-dv-bar fit :columns="columns" :rows="rows"></my-dv-bar>
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

## 旋转标签、cross、图例、渐变颜色

:::demo
```html
<template>
   <div style="height:600px">
     <my-dv-page target="parent" fit>
        <my-dv-bar fit :columns="columns" :rows="rows" rotate cross gradient legend></my-dv-bar>
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

## 多组柱
:::demo
```html
<template>
   <div style="height:600px">
     <my-dv-page target="parent" fit>
        <my-dv-bar fit :columns="columns" :rows="rows" legend></my-dv-bar>
     </my-dv-page>
   </div>
</template>
<script>
export default {
  data() {
    return {
      columns: ['星期', '直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
      rows: [
          ['周一', 320, 302, 301, 334, 390, 330, 320],
          ['周二', 120, 132, 101, 134, 90, 230, 210],
          ['周三', 220, 182, 191, 234, 290, 330, 310],
          ['周四', 150, 212, 201, 154, 190, 330, 410],
          ['周五', 320, 132, 401, 334, 290, 330, 320]
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
        <my-dv-bar fit :columns="columns" :rows="rows" :settings="settings" legend></my-dv-bar>
     </my-dv-page>
   </div>
</template>
<script>
export default {
  data() {
    return {
      columns: ['星期', '直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
      rows: [
          ['周一', 320, 302, 301, 334, 390, 330, 320],
          ['周二', 120, 132, 101, 134, 90, 230, 210],
          ['周三', 220, 182, 191, 234, 290, 330, 310],
          ['周四', 150, 212, 201, 154, 190, 330, 410],
          ['周五', 320, 132, 401, 334, 290, 330, 320]
      ],
      settings: {
        stack: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
      }
    }
  }
}
</script>
```
:::
