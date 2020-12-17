# Page 页面组件

数据可视化页面一般在浏览器中进行全屏展示，全屏容器将根据屏幕比例及当前浏览器窗口大小，自动进行缩放处理。浏览器全屏后，全屏容器将充满屏幕。
组件文档 <api-link href="dv/my-dv-page">MyDvPage</api-link>

## 基础用法

:::warning 注意
为了方便演示，增加了 `demo` 容器，在实际开发中是不需要的。
:::

:::demo
```html
<template>
<div style="height: 600px">
  <my-dv-page target="parent">
      这是一个大屏页面
  </my-dv-page>
</div>
</template>
```
:::

## 设置页面原始尺寸并拉伸缩放

默认是： 1920 * 1080

通常设置为设计图的尺寸

:::demo
```html
<template>
<div style="height: 600px">
  <my-dv-page target="parent" :lock="false" :width="400" :height="200">
      这是一个大屏页面
  </my-dv-page>
</div>
</template>
```
:::


## 设置页面背景

:::demo
```html
<template>
<div style="height: 600px">
  <my-dv-page target="parent" :lock="false">
      这是一个大屏页面
  </my-dv-page>
</div>
</template>
<style lang="scss" scoped>
  .my-dv-page {
     background:url("~$ui/assets/bg/02.png") no-repeat center center;
  }
</style>
```
:::
