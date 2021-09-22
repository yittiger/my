# SvgLine

一个简易的svg折线动画效果（常用于两个无关联的dom节点连线）

文档 <api-link href="components/my-svg-line">my-svg-line</api-link> 

## 代码示例

### 基础用法

:::demo
```html
<template>
<div class="warp" >
  <div style="height: 100px; width: 380px">
    <my-svg-line type="left-top" :angle="130.5" :during="3"></my-svg-line>
  </div>
</div>
</template>
<script>
import {MySvgLine} from '$ui'
export default {
  components: {
    MySvgLine
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

### 其他用法

:::demo
```html
<template>
<div class="warp" >
  <div style="height: 380px; width: 380px; border: 1px dashed">
    <my-svg-line type="right-bottom" 
    :angle="134" :during="3" 
    :track-size="10"
    :node-size="6"
    track-color="rgba(85, 203, 252, 0.4)"
    point-color="rgba(53, 109, 249, 0.8)" 
    ></my-svg-line>
  </div>
</div>
</template>
<script>
import {MySvgLine} from '$ui'
export default {
  components: {
    MySvgLine
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