# Fill 水位图

文档 <api-link href="dv/my-dv-fill">MyDvFill</api-link>

:::tip 提示
继承 <api-link href="dv/my-dv-box">MyDvBox</api-link>
:::

## 基础用法
:::demo
```html
<template>
 <div style="height:400px">
   <my-dv-page target="parent" fit>
      <my-dv-fill fit :value="0.58"></my-dv-fill>
   </my-dv-page>
 </div>
</template>
```
:::

## 字体大小
:::demo
```html
<template>
 <div style="height:400px">
   <my-dv-page target="parent" fit>
      <my-dv-fill fit :value="0.58" :font-size="60"></my-dv-fill>
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
      <my-dv-fill fit :value="0.58" :font-size="60" :color="2"></my-dv-fill>
   </my-dv-page>
 </div>
</template>
```
:::
