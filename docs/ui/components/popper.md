# Popper

基于ele-popper 和 svgline 封装的popper组件

文档 <api-link href="components/my-popper">my-popper</api-link> 

## 代码示例

### 基础用法

:::demo(mypopper-1)
```html
<template>
<div class="warp" >
  <my-popper placement="right-start" :svg-width="120" :svg-height="30" :svg-props="{'angle': 140}">
    <div style="width: 140px; height: 60px; border: 1px solid skyblue; "></div>
    <el-button slot="reference">click 激活</el-button>
  </my-popper>
</div>
</template>
<script>
import {MyPopper} from '$ui'
export default {
  components: {
    MyPopper
  }
}
</script> 
<style lang="scss" scoped>
.warp{
  height: 400px;
  display: flex; 
  flex-flow: column;
  align-items: center;
  justify-content: center;
}
</style> 
</template>
```
:::