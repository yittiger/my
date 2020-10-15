# Radar 雷达图

图表组件是基于ECharts进行封装，统一风格和简化使用。 相关概念，需参考[图表组件库](../charts/README.md)。

文档 <api-link href="dv/my-dv-radar">MyDvRadar</api-link>

:::tip 提示
继承 <api-link href="dv/my-dv-box">MyDvBox</api-link>
:::

## 基础用法

:::demo
```html
<template>
   <div style="height:600px">
     <my-dv-page target="parent" fit>
        <my-dv-radar fit :columns="columns" :rows="rows"></my-dv-radar>
     </my-dv-page>
   </div>
</template>
<script>
export default {
  data() {
    return {
      columns: ['指标名称', '销售', '管理', '客服', '研发', '市场'],
      rows: [
        ['预算分配', 20, 50, 80, 29, 55, 60],
        ['实际开销', 30, 60, 30, 79, 45, 80]
      ]
    }
  }
}
</script>
```
:::

## 圆形状

:::demo
```html
<template>
   <div style="height:600px">
     <my-dv-page target="parent" fit>
        <my-dv-radar fit :columns="columns" :rows="rows" circle></my-dv-radar>
     </my-dv-page>
   </div>
</template>
<script>
export default {
  data() {
    return {
      columns: ['指标名称', '销售', '管理', '客服', '研发', '市场'],
      rows: [
        ['预算分配', 20, 50, 80, 29, 55, 60],
        ['实际开销', 30, 60, 30, 79, 45, 80]
      ]
    }
  }
}
</script>
```
:::


## 定义指标最大值

:::demo
```html
<template>
   <div style="height:600px">
     <my-dv-page target="parent" fit>
        <my-dv-radar fit :columns="columns" :rows="rows" :indicator="indicator"></my-dv-radar>
     </my-dv-page>
   </div>
</template>
<script>
export default {
  data() {
    return {
      indicator: [50, 80, 100, 80, 60, 100],
      columns: ['指标名称', '销售', '管理', '客服', '研发', '市场'],
      rows: [
        ['预算分配', 20, 50, 80, 29, 55, 60],
        ['实际开销', 30, 60, 30, 79, 45, 80]
      ]
    }
  }
}
</script>
```
:::

## 颜色
:::demo
```html
<template>
   <div style="height:600px">
     <my-dv-page target="parent" fit>
        <my-dv-radar fit :columns="columns" :rows="rows" :colors="colors"></my-dv-radar>
     </my-dv-page>
   </div>
</template>
<script>
export default {
  data() {
    return {
      colors: ['red','yellow'],
      columns: ['指标名称', '销售', '管理', '客服', '研发', '市场'],
      rows: [
        ['预算分配', 20, 50, 80, 29, 55, 60],
        ['实际开销', 30, 60, 30, 79, 45, 80]
      ]
    }
  }
}
</script>
```
:::
