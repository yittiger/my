# Icon 图标

文档：<api-link href="dv/my-dv-icon">MyDvIcon</api-link>

:::tip 提示
继承 <api-link href="dv/my-dv-box">MyDvBox</api-link>
:::

## 基础用法

:::demo
```html
<template>
 <div style="height:600px;">
    <my-dv-page target="parent" fit>
        <my-dv-icon x-align="center"
                    y-align="middle" 
                    icon="el-icon-video-camera-solid"
                    :size="60"></my-dv-icon>
    </my-dv-page>
 </div>
</template>
```
:::

## 颜色
:::demo
```html
<template>
 <div style="height:600px;">
    <my-dv-page target="parent" fit>
        <my-dv-icon x-align="center"
                    y-align="middle" 
                    :icon="{name:'el-icon-video-camera-solid', theme:'primary'}"
                    :size="60"></my-dv-icon>
    </my-dv-page>
 </div>
</template>
```
:::

## SVG图标


## 颜色
:::demo
```html
<template>
 <div style="height:600px;">
    <my-dv-page target="parent" fit>
        <my-dv-icon x-align="center"
                    y-align="middle" 
                    :icon="{name:'icon-balance', svg:true, theme:'warning'}"
                    :size="60"></my-dv-icon>
    </my-dv-page>
 </div>
</template>
<script>
import '$ui/icons/balance'
export default {

}
</script>
```
:::
