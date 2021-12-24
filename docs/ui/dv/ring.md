# Ring 圆环

图表组件是基于ECharts进行封装，统一风格和简化使用。 相关概念，需参考[图表组件库](../charts/README.md)。

饼图文档 <api-link href="dv/my-dv-ring">MyDvRing</api-link>

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
           <my-dv-ring fit :columns="columns" :rows="rows" label title="渠道统计"></my-dv-ring>
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
        <my-dv-ring fit :columns="columns" :rows="rows"></my-dv-ring>
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
        <my-dv-ring x-align="left" y-align="middle" :columns="columns" :rows="rows" legend="h"></my-dv-ring>
        <my-dv-ring x-align="right" y-align="middle" :columns="columns" :rows="rows" legend="v"></my-dv-ring>
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


## 显示标签
:::demo
```html
<template>
   <div style="height:600px">
     <my-dv-page target="parent" fit>
        <my-dv-ring fit :columns="columns" :rows="rows" label></my-dv-ring>
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

## 显示标题

:::demo
```html
<template>
   <div style="height:600px">
     <my-dv-page target="parent" fit>
        <my-dv-ring fit :columns="columns" :rows="rows" title="渠道统计"></my-dv-ring>
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

## 间隔、扩散与圆环宽度

:::demo
```html
<template>
   <div style="height:600px">
     <my-dv-page target="parent" fit> 
        <my-dv-ring fit  :columns="columns" :rows="rows" title="渠道统计" :use-gap="true" :extend="extend" :track-width="5" :blur="true"></my-dv-ring>
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
      ],
      extend: {
        color: ['#00ffff', '#00cfff', '#006ced', '#ffe000', '#ffa800', '#ff5b00', '#ff3000']
      }
    }
  }
}
</script>
```
:::
