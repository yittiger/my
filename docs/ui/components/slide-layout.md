# SlideLayout 滑动布局

滑动布局是个滑动布局组件。
组件文档 <api-link href="components/my-slide-layout">MySlideLayout</api-link>

## 何时使用

通常用作页面主体框架布局

## 代码示例

### 基本用法
#### 布局一
:::demo
```html
<template>
  <div style="width: 400px; height:400px">
    <my-slide-layout type="horizontal" :edage-width="40">
      <div slot="odd" style="width: 100%; height: 100%;background: lightgreen">left</div>
      <div slot="even" style="width: 100%; height: 90%;background: pink">right</div>
    </my-slide-layout>
  </div>
</template>

<script>
import {MySlideLayout} from '$ui'

export default {
  components: {
    MySlideLayout
  }
}
</script>

<style lang="scss" scoped>

</style>

```
:::

 
#### 布局2
:::demo
```html
<template>
  <div style="width: 400px; height:400px">
    <my-slide-layout type="vertical" :edage-width="65" :range="[50, 70]">
      <div slot="odd" style="width: 100%; height: 100%;background: lightgreen">top</div>
      <div slot="even" style="width: 100%; height: 100%;background: pink">bottom</div>
    </my-slide-layout>
  </div>
</template>

<script>
import {MySlideLayout} from '$ui'

export default {
  components: {
    MySlideLayout
  }
}
</script> 

```
:::