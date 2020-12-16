# Box 容器

<api-link href="dv/my-dv-box">MyDvBox</api-link>
是一个非常重要的基础组件，除了MyDvPage组件外其他组件都继承它。

## 基础用法
:::demo
```html
<template>
  <div style="height:600px">
     <my-dv-page target="parent" fit>
       <my-dv-box width="400px" height="200px" left="100px" top="100px">
          <my-panel title="标题" fit>内容</my-panel>
       </my-dv-box> 
    </my-dv-page>
  </div>
</template>
```
:::

## 自适应

根据父节点的宽高和位置定位。
:::demo
```html
<template>
  <div style="height:600px">
     <my-dv-page target="parent" fit>
       <my-dv-box fit style="background: rgba(255,0,0,0.2)"></my-dv-box> 
    </my-dv-page>
  </div>
</template>
```
:::



## 对齐方式
:::demo
```html
<template>
  <div style="height:600px">
     <my-dv-page target="parent" fit>
       <my-dv-box x-align="left" y-align="top">left top</my-dv-box> 
       <my-dv-box x-align="center" y-align="top">center top</my-dv-box>
       <my-dv-box x-align="right" y-align="top">right top</my-dv-box> 
       <my-dv-box x-align="left" y-align="middle">left middle</my-dv-box> 
       <my-dv-box x-align="center" y-align="middle">center middle</my-dv-box>
       <my-dv-box x-align="right" y-align="middle">right middle</my-dv-box> 
       <my-dv-box x-align="left" y-align="bottom">left bottom</my-dv-box> 
       <my-dv-box x-align="center" y-align="bottom">center bottom</my-dv-box>
       <my-dv-box x-align="right" y-align="bottom">right bottom</my-dv-box> 
    </my-dv-page>
  </div>
</template>
<style lang="scss" scoped>
.my-dv-box {
   background: royalblue;
   padding:20px;
   font-size:20px;
   text-align: center;
}
</style>
```
:::

## 缩放
:::demo
```html
<template>
  <div style="height:600px">
     <my-dv-page target="parent" fit>
       <my-dv-box width="100px"
                  height="100px"
                  x-align="center"
                  y-align="middle"
                  :zoom="4" 
                  style="background: rgba(255,0,0,0.2)"></my-dv-box> 
    </my-dv-page>
  </div>
</template>
```
:::


## 内联和边距

:::demo
```html
<template>
  <div style="height:600px">
     <my-dv-page target="parent" fit>
       <my-dv-box v-for="n in 20"
                  :key="n"
                  :position="false"
                  inline
                  margin="20px"
                  width="100px"
                  height="100px"
                  style="background: rgba(255,0,0,0.2)">{{n}}</my-dv-box> 
    </my-dv-page>
  </div>
</template>
```
:::


## 透明度
:::demo
```html
<template>
  <div style="height:600px">
     <my-dv-page target="parent" fit>
       <my-dv-box width="100px"
                  height="100px"
                  x-align="center"
                  y-align="middle"
                  :zoom="4" 
                  :opacity="0.1"
                  style="background: #ff0000"></my-dv-box> 
    </my-dv-page>
  </div>
</template>
```
:::


## 阴影
:::demo
```html
<template>
  <div style="height:600px">
     <my-dv-page target="parent" fit>
       <my-dv-box width="100px"
                  height="100px"
                  x-align="center"
                  y-align="middle"
                  :zoom="4" 
                  shadow
                  style="background: #2b7cd9;"></my-dv-box> 
    </my-dv-page>
  </div>
</template>
```
:::

## 排版

:::demo
```html
<template>
  <div style="height:600px">
     <my-dv-page target="parent" fit>
       <my-dv-box layout :gap="20" left="20px" top="20px" height="calc(100% - 40px)" width="30%">
          <my-dv-border2 width="100%" :weight="1"></my-dv-border2>
          <my-dv-border2 width="100%" :weight="2"></my-dv-border2>
          <my-dv-border2 width="100%" :weight="1"></my-dv-border2>
       </my-dv-box>
       <my-dv-box layout direction="column" :gap="20" right="20px" top="20px" height="calc(100% - 40px)" width="50%">
          <my-dv-border2 height="100%" :weight="1"></my-dv-border2>
          <my-dv-border2 height="100%" :weight="2"></my-dv-border2>
          <my-dv-border2 height="100%" :weight="1"></my-dv-border2>
       </my-dv-box>
    </my-dv-page>
  </div>
</template>
```
:::
