# Number 数字

:::tip 提示
继承 <api-link href="dv/my-dv-title">MyDvTitle</api-link>、 <api-link href="components/my-Number">MyNumber</api-link>
:::

## 基础用法
:::demo
```html
<template>
    <div style="height: 100px">
      <my-dv-page target="parent" fit>
        <my-dv-number :value="1434329"></my-dv-number>
      </my-dv-page>
    </div>
</template>
```
:::


## 显示趋势
:::demo
```html
<template>
    <div style="height: 100px">
      <my-dv-page target="parent" fit>
        <my-dv-number :value="1434329" trend="up" :position="false" inline></my-dv-number>
        <my-dv-number :value="1434329" trend="down" :position="false" inline></my-dv-number>
        <my-dv-number value="2002" trend="-" :position="false" inline></my-dv-number>
      </my-dv-page>
    </div>
</template>
<style lang="scss" scoped>
.my-dv-number {
  margin-right: 20px;
}
</style>
```
:::

## 精度
:::demo
```html
<template>
    <div style="height: 100px">
      <my-dv-page target="parent" fit>
        <my-dv-number value="3345.2474914" :precision="1" :position="false" inline></my-dv-number>
        <my-dv-number value="3345.2474914" :precision="2" :position="false" inline></my-dv-number>
        <my-dv-number value="3345.2474914" :precision="3" :position="false" inline></my-dv-number>
      </my-dv-page>
    </div>
</template>
<style lang="scss" scoped>
.my-dv-number {
  margin-right: 20px;
}
</style>
```
:::

## 前缀后缀
:::demo
```html
<template>
    <div style="height: 100px">
      <my-dv-page target="parent" fit>
        <my-dv-number value="3345.2474914" :precision="2" prefix="￥" suffix="万"></my-dv-number>
      </my-dv-page>
    </div>
</template>
<style lang="scss" scoped>
.my-dv-number {
  margin-right: 20px;
}
</style>
```
:::

## 百分比显示
:::demo
```html
<template>
    <div style="height: 100px">
      <my-dv-page target="parent" fit>
        <my-dv-number value="0.23233322" percentage :position="false"></my-dv-number>
        <my-dv-number value="0.23233322" percentage :precision="2" :position="false"></my-dv-number>
      </my-dv-page>
    </div>
</template>
<style lang="scss" scoped>
.my-dv-number {
  margin-right: 20px;
}
</style>
```
:::

## 颜色
:::demo
```html
<template>
    <div style="height: 100px">
      <my-dv-page target="parent" fit>
        <my-dv-number value="3345" type="primary" :position="false" inline></my-dv-number>
        <my-dv-number value="3345" type="success" :position="false" inline></my-dv-number>
        <my-dv-number value="3345" type="warning" :position="false" inline></my-dv-number>
        <my-dv-number value="3345" type="danger" :position="false" inline></my-dv-number>
        <my-dv-number value="3345" type="normal" :position="false" inline></my-dv-number>
        <my-dv-number value="3345" type="secondary" :position="false" inline></my-dv-number>
      </my-dv-page>
    </div>
</template>
<style lang="scss" scoped>
.my-dv-number {
  margin-right: 20px;
}
</style>
```
:::

## 动效
:::demo
```html
<template>
    <div style="height: 100px">
      <my-dv-page target="parent" fit>
        <my-dv-number :value="value" type="primary"  count-up :position="false" inline></my-dv-number>
        <my-dv-number :value="value" type="success" :count-up="{startVal: 1000}" :position="false" inline></my-dv-number>
        <my-dv-number :value="value" type="warning" :count-up="{duration: 5}" :position="false" inline></my-dv-number>
       <my-dv-box top="50px">
        <el-button @click="start">开始动画</el-button>
      </my-dv-box> 
     </my-dv-page>
    </div>
</template>
<script>
export default {
  data() {
    return {
      value: 12343
    }
  },
  methods: {
    start() {
      this.value = Math.random()* 10000
    }
  }
}
</script>
<style lang="scss" scoped>
.my-dv-number {
  margin-right: 20px;
}
</style>
```
:::
