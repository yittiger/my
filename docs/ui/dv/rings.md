# Rings 多环图

图表组件是基于ECharts进行封装，统一风格和简化使用。 相关概念，需参考[图表组件库](../charts/README.md)。

文档 <api-link href="dv/my-dv-rings">MyDvRings</api-link>

:::tip 提示
继承 <api-link href="dv/my-dv-box">MyDvBox</api-link>
:::

# 效果演示
:::demo
```html
<template>
   <div style="height:600px">
     <my-dv-page target="parent" fit>
        <my-dv-border2 width="80%" height="80%" x-align="center" y-align="middle">
          <my-dv-rings fit :columns="columns" :rows="rows"></my-dv-rings>
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
