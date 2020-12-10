# Menu 导航菜单

菜单组件 <api-link href="dv/my-dv-menu">MyDvMenu</api-link>

:::tip 提示
继承 <api-link href="dv/my-dv-box">MyDvBox</api-link>
:::

##  基础用法
:::demo
```html
<template>
  <div style="height:400px">
    <my-dv-page target="parent" fit>
      <my-dv-menu :data="items"  x-align="center" y-align="middle"></my-dv-menu>
    </my-dv-page>
  </div>
</template>
<script>


  export default {
    data() {
      return {
        items: [
          {
            text: '基础数据',
            icon: 'el-icon-setting'
          },
          {
            text: '高级视图'
          },
          {
            text: '系统设置'
          }
        ]
      }
    }
  }
</script>
```
:::

## 水平翻转

:::demo
```html
<template>
  <div style="height:400px">
    <my-dv-page target="parent" fit>
      <my-dv-menu :data="items" reverse  x-align="center" y-align="middle"></my-dv-menu>
    </my-dv-page>
  </div>
</template>
<script>


  export default {
    data() {
      return {
        items: [
          {
            text: '基础数据',
            icon: 'el-icon-setting'
          },
          {
            text: '高级视图'
          },
          {
            text: '系统设置'
          }
        ]
      }
    }
  }
</script>
```
:::
