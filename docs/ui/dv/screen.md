# Screen 场景组件

如果大屏页面有多屏，可以添加场景组件。
组件文档 <api-link href="dv/my-dv-screen">MyDvScreen</api-link>
，该组件继承 <api-link href="dv/my-dv-box">MyDvBox</api-link>。

通常需要与指示器组件一起使用 <api-link href="dv/my-dv-indicator">MyDvIndicator</api-link>

## 基础用法
:::demo
```html
<template>
 <div style="height:600px">
   <my-dv-page target="parent" fit :active-index="index">
     <my-dv-screen>场景 一</my-dv-screen>
     <my-dv-screen>场景 二</my-dv-screen>
     <my-dv-screen>场景 三</my-dv-screen>
     <my-dv-box x-align="center" y-align="middle">
        <el-button @click="change">切换场景</el-button>
     </my-dv-box>
   </my-dv-page>
 </div>
</template>
<script>
export default {
  data(){
    return {
      index: 0
    }
  },
  methods: {
    change(){
       this.index = Math.abs(++this.index % 3)
    }
  }
}
</script>
```
:::

## 指示器

:::demo
```html
<template>
 <div style="height:600px">
   <my-dv-page target="parent" fit>
     <my-dv-screen>场景 一</my-dv-screen>
     <my-dv-screen>场景 二</my-dv-screen>
     <my-dv-screen>场景 三</my-dv-screen>
     <my-dv-indicator></my-dv-indicator>
   </my-dv-page>
 </div>
</template>
```
:::

## 垂直方向指示器
:::demo
```html
<template>
 <div style="height:600px">
   <my-dv-page target="parent" fit>
     <my-dv-screen>场景 一</my-dv-screen>
     <my-dv-screen>场景 二</my-dv-screen>
     <my-dv-screen>场景 三</my-dv-screen>
     <my-dv-indicator type="vertical"></my-dv-indicator>
   </my-dv-page>
 </div>
</template>
```
:::

## 自定义过场动画
:::demo
```html
<template>
 <div style="height:600px">
   <my-dv-page target="parent" fit>
     <my-dv-screen enter="zoomInLeft" leave="zoomOutRight">场景 一</my-dv-screen>
     <my-dv-screen enter="zoomInLeft" leave="zoomOutRight">场景 二</my-dv-screen>
     <my-dv-screen enter="zoomInLeft" leave="zoomOutRight">场景 三</my-dv-screen>
     <my-dv-indicator></my-dv-indicator>
   </my-dv-page>
 </div>
</template>
```
:::
