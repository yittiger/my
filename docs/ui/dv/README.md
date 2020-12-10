# 可视化大屏


## 模板

### 模板一
:::demo
```html
<template>
  <div style="height:600px">
    <Dv01 target="parent" lock></Dv01>
 </div>
</template>
<script>
  import Dv01 from '$ui/pages/dv-01'
  export default {
    components: {
      Dv01
    }
  }
</script>
```
:::

### 模板二
:::demo
```html
<template>
  <div style="height:600px">
    <Dv02 target="parent" lock></Dv02>
 </div>
</template>
<script>
  import Dv02 from '$ui/pages/dv-02'
  export default {
    components: {
      Dv02
    }
  }
</script>
```
:::
