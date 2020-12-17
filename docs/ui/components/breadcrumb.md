# Breadcrumb 面包屑导航

扩展 ElBreadcrumb  
文档：<api-link href="components/my-breadcrumb">MyBreadcrumb</api-link> 

# 基础用法
:::demo
```html
<template>
 <my-breadcrumb :data="menus"></my-breadcrumb>
</template>
<script>
export default {
  data() {
    return {
       menus: [
         {label: '首页', icon:'el-icon-s-home', to:'/'},
         {label: '组件库', icon:'el-icon-setting', to:'/ui/components/'},
         {label: '列表', to:'/ui/components/'},
         {label: '面包屑菜单', to:'/ui/components/breadcrumb'}
       ]
    }
  }
}
</script>
```
:::

## 扁平风格

:::demo
```html
<template>
 <my-breadcrumb :data="menus" theme="flat"></my-breadcrumb>
</template>
<script>
export default {
  data() {
    return {
       menus: [
         {label: '首页', icon:'el-icon-s-home', to:'/'},
         {label: '组件库', icon:'el-icon-setting', to:'/ui/components/'},
         {label: '列表', to:'/ui/components/'},
         {label: '面包屑菜单', to:'/ui/components/breadcrumb'}
       ]
    }
  }
}
</script>
```
:::

## 渐变

用在深色背景的页面
:::demo
```html
<template>
    <div style="padding: 30px; background: #2c3e50;">
       <my-breadcrumb :data="menus" theme="arrow"></my-breadcrumb>
    </div>
</template>
<script>
export default {
  data() {
    return {
       menus: [
         {label: '首页', icon:'el-icon-s-home', to:'/'},
         {label: '组件库', icon:'el-icon-setting', to:'/ui/components/'},
         {label: '列表', to:'/ui/components/'},
         {label: '面包屑菜单', to:'/ui/components/breadcrumb'}
       ]
    }
  }
}
</script>
```
:::


## 事件


:::demo
```html
<template>
 <my-breadcrumb :data="menus" theme="flat" :active.sync="active" @click="handleClick"></my-breadcrumb>
</template>
<script>
export default {
  data() {
    return {
       active: 0,
       menus: [ 
         {label: '首页', icon:'el-icon-s-home'},
         {label: '组件库', icon:'el-icon-setting'},
         {label: '列表'},
         {label: '面包屑菜单'}
       ]
    }
  },
  methods: {
    handleClick(item, index) {
      console.log(item.label)
    }
  }
}
</script>
```
:::




