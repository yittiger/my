# Text 文本

文档 <api-link href="dv/my-dv-text">MyDvText</api-link>

:::tip 提示
继承 <api-link href="dv/my-dv-box">MyDvBox</api-link>
:::

# 基础用法
:::demo
```html
<template>
 <div style="height: 200px;">
   <my-dv-page target="parent" fit>
     <my-dv-text>MyWeb产品是一个庞大且复杂的体系。
这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，
常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，
可以通过抽象得到一些稳定且高复用性的内容。</my-dv-text>
   </my-dv-page>
 </div>
</template>
```
:::

## 字体大小

:::demo
```html
<template>
 <div style="height: 300px;">
   <my-dv-page target="parent" fit>
     <my-dv-text :level="1" :position="false">MyWeb产品是一个庞大且复杂的体系。
这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，
常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，
可以通过抽象得到一些稳定且高复用性的内容。</my-dv-text>
     <my-dv-text :level="2" :position="false">MyWeb产品是一个庞大且复杂的体系。
这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，
常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，
可以通过抽象得到一些稳定且高复用性的内容。</my-dv-text>
     <my-dv-text :level="3" :position="false">MyWeb产品是一个庞大且复杂的体系。
这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，
常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，
可以通过抽象得到一些稳定且高复用性的内容。</my-dv-text>
     <my-dv-text :level="4" :position="false">MyWeb产品是一个庞大且复杂的体系。
这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，
常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，
可以通过抽象得到一些稳定且高复用性的内容。</my-dv-text>
   </my-dv-page>
 </div>
</template>
```
:::

# 颜色
:::demo
```html
<template>
 <div style="height: 500px;">
   <my-dv-page target="parent" fit>
     <my-dv-text type="default" :position="false">MyWeb产品是一个庞大且复杂的体系。</my-dv-text>
     <my-dv-text type="primary" :position="false">MyWeb产品是一个庞大且复杂的体系。</my-dv-text>
     <my-dv-text type="normal" :position="false">MyWeb产品是一个庞大且复杂的体系。</my-dv-text>
     <my-dv-text type="secondary" :position="false">MyWeb产品是一个庞大且复杂的体系。</my-dv-text>
     <my-dv-text type="success" :position="false">MyWeb产品是一个庞大且复杂的体系。</my-dv-text>
     <my-dv-text type="placeholder" :position="false">MyWeb产品是一个庞大且复杂的体系。</my-dv-text>
     <my-dv-text type="warning" :position="false">MyWeb产品是一个庞大且复杂的体系。</my-dv-text>
     <my-dv-text type="danger" :position="false">MyWeb产品是一个庞大且复杂的体系。</my-dv-text>
   </my-dv-page>
 </div>
</template>
```
:::

## 省略号

:::demo
```html
<template>
 <div style="height: 300px;">
   <my-dv-page target="parent" fit>
     <my-dv-text width="500px" ellipsis :rows="2">MyWeb产品是一个庞大且复杂的体系。
这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，
常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，
可以通过抽象得到一些稳定且高复用性的内容。</my-dv-text>
   </my-dv-page>
 </div>
</template>
```
:::
