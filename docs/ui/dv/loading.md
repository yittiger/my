# Loading 加载

数据尚未加载完成时，可以显示Loading效果，增强用户体验。文档 
<api-link href="dv/my-dv-loading">MyDvLoading</api-link>。

:::tip 提示
组件继承 <api-link href="dv/my-dv-box">MyDvBox</api-link>
:::

## 基础用法
:::demo
```html
<template>
 <div style="height:600px;">
    <my-dv-page target="parent" fit>
       <my-dv-loading></my-dv-loading>
    </my-dv-page>
 </div>
</template>
```
:::

## 提示文本

:::demo
```html
<template>
 <div style="height:600px;">
    <my-dv-page target="parent" fit>
       <my-dv-loading :zoom="2">正在拼命加载中...</my-dv-loading>
    </my-dv-page>
 </div>
</template>
```
:::
