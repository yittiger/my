# Starry 星空动效

文档 <api-link href="dv/my-dv-starry">MyDvStarry</api-link>

:::tip 提示
继承 <api-link href="dv/my-dv-box">MyDvBox</api-link>
:::

## 效果

:::demo
```html
<template>
<div style="height:600px">
    <my-dv-page target="parent" fit>
       <my-dv-starry :opacity="0.4"></my-dv-starry>
    </my-dv-page>
</div>
</template>
<style lang="scss">
.my-dv-page {
    background-image: radial-gradient(ellipse farthest-corner at center center, #1b44e4 0%, #020f3a 100%);
}
</style>
```
:::
