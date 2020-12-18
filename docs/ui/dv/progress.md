# Progress 进度

进度时圆环图表的一个变种，文档 <api-link href="dv/my-dv-progress">MyDvProgress</api-link>

:::tip 提示
继承 <api-link href="dv/my-dv-box">MyDvBox</api-link>
:::


## 基础用法
:::demo
```html
<template>
   <div style="height:400px">
     <my-dv-page target="parent" fit>
        <my-dv-progress fit :value="65"></my-dv-progress>
     </my-dv-page>
   </div>
</template>

```
:::

## 标题文字

:::demo
```html
<template>
   <div style="height:400px">
     <my-dv-page target="parent" fit>
        <my-dv-progress fit :value="65" title="读取进度" :font-size="32"></my-dv-progress>
     </my-dv-page>
   </div>
</template>

```
:::

## 颜色

:::demo
```html
<template>
   <div style="height:400px">
     <my-dv-page target="parent" fit>
        <my-dv-progress x-align="left" y-align="middle" :value="10" :color="1"></my-dv-progress>
        <my-dv-progress x-align="center" y-align="middle" :value="30" :color="2"></my-dv-progress>
        <my-dv-progress x-align="right" y-align="middle" :value="87" color="yellow"></my-dv-progress>
     </my-dv-page>
   </div>
</template>

```
:::
