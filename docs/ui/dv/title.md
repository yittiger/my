# Title 标题

文档 <api-link href="dv/my-dv-title">MyDvTitle</api-link>

:::tip 提示
继承 <api-link href="dv/my-dv-box">MyDvBox</api-link>
:::

## 基础用法
:::demo
```html
<template>
 <div style="height: 200px;">
   <my-dv-page target="parent" fit>
     <my-dv-title>标题文本</my-dv-title>
   </my-dv-page>
 </div>
</template>
```
:::

## 尺寸

:::demo
```html
<template>
 <div style="height: 300px;">
   <my-dv-page target="parent" fit>
     <my-dv-title :level="1" :position="false">标题文本</my-dv-title>
     <my-dv-title :level="2" :position="false">标题文本</my-dv-title>
     <my-dv-title :level="3" :position="false">标题文本</my-dv-title>
     <my-dv-title :level="4" :position="false">标题文本</my-dv-title>
     <my-dv-title :level="5" :position="false">标题文本</my-dv-title>
     <my-dv-title :level="6" :position="false">标题文本</my-dv-title>
   </my-dv-page>
 </div>
</template>
```
:::

## 颜色

:::demo
```html
<template>
 <div style="height: 200px;">
   <my-dv-page target="parent" fit>
     <my-dv-title type="default" :position="false" inline>标题文本</my-dv-title>
     <my-dv-title type="primary" :position="false" inline>标题文本</my-dv-title>
     <my-dv-title type="normal" :position="false" inline>标题文本</my-dv-title>
     <my-dv-title type="secondary" :position="false" inline>标题文本</my-dv-title>
     <my-dv-title type="success" :position="false" inline>标题文本</my-dv-title>
     <my-dv-title type="placeholder" :position="false" inline>标题文本</my-dv-title>
     <my-dv-title type="warning" :position="false" inline>标题文本</my-dv-title>
     <my-dv-title type="danger" :position="false" inline>标题文本</my-dv-title>
   </my-dv-page>
 </div>
</template>
<style type="scss" scoped>
 .my-dv-title {
    margin: 20px;
 }
</style>
```
:::

## 带图标

:::demo
```html
<template>
 <div style="height: 300px;">
   <my-dv-page target="parent" fit>
     <my-dv-title icon="el-icon-s-platform" :position="false">标题文本</my-dv-title>
     <my-dv-title icon="el-icon-s-platform" :level="2" :position="false">标题文本</my-dv-title>
     <my-dv-title icon="el-icon-s-platform" :level="3" :position="false">标题文本</my-dv-title>
     <my-dv-title icon="el-icon-s-platform" :level="4" :position="false">标题文本</my-dv-title>
     <my-dv-title icon="el-icon-s-platform" :level="5" :position="false">标题文本</my-dv-title>
     <my-dv-title icon="el-icon-s-platform" :level="6" :position="false">标题文本</my-dv-title>
   </my-dv-page>
 </div>
</template>
```
:::


## 带阴影

:::demo
```html
<template>
 <div style="height: 200px;">
   <my-dv-page target="parent" fit>
     <my-dv-title type="default" :position="false" inline shadow>标题文本</my-dv-title>
     <my-dv-title type="primary" :position="false" inline shadow>标题文本</my-dv-title>
     <my-dv-title type="normal" :position="false" inline shadow>标题文本</my-dv-title>
     <my-dv-title type="secondary" :position="false" inline shadow>标题文本</my-dv-title>
     <my-dv-title type="success" :position="false" inline shadow>标题文本</my-dv-title>
     <my-dv-title type="placeholder" :position="false" inline shadow>标题文本</my-dv-title>
     <my-dv-title type="warning" :position="false" inline shadow>标题文本</my-dv-title>
     <my-dv-title type="danger" :position="false" inline shadow>标题文本</my-dv-title>
   </my-dv-page>
 </div>
</template>
<style type="scss" scoped>
 .my-dv-title {
    margin: 20px;
 }
</style>
```
:::
