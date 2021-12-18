# Typography 文本排版

文本的基本格式。 Typography 包含了4个子组件，分别是：

- <api-link href="components/my-typography">MyTypography</api-link> 用于显示文章容器
- <api-link href="components/my-title">MyTitle</api-link> 用于显示标题
- <api-link href="components/my-paragraph">MyParagraph</api-link> 用于显示段落
- <api-link href="components/my-text">MyText</api-link> 用于显示内联文本

## 何时使用

- 当需要展示标题、段落、列表内容时使用，如文章/博客/日志的文本样式。
- 当需要一列基于文本的基础操作时，如拷贝/省略/可编辑。

## 代码演示

### 基础

:::demo
```html
<template>
  <my-typography>
     <my-title>介绍</my-title>
     <my-paragraph>gitee Page 不能出现宣传性质的文字内容gitee Page 不能出现宣传性质的文字内容, gitee Page 不能出现宣传性质的文字内容。gitee Page 不能出现宣传性质的文字内容，gitee Page 不能出现宣传性质的文字内容。gitee Page 不能出现宣传性质的文字内容</my-paragraph>
     <my-paragraph>gitee Page 不能出现宣传性质的文字内容gitee Page 不能出现宣传性质的文字内容, gitee Page 不能出现宣传性质的文字内容。gitee Page 不能出现宣传性质的文字内容，gitee Page 不能出现宣传性质的文字内容。gitee Page 不能出现宣传性质的文字内容。基于 <my-text mark>『确定』和『自然』</my-text>的设计价值观，通过模块化的解决方案，降低冗余的生产成本，让设计者专注于更好的用户体验。</my-paragraph>
     <my-title level="2">设计资源</my-title>
     <my-paragraph>我们提供完善的设计原则、最佳实践和设计资源文件（<my-text code>Sketch</my-text> 和 <my-text code>Axure</my-text> ），来帮助业务快速设计出高质量的产品原型。</my-paragraph>
  </my-typography>
</template>

<script>
import {MyTypography, MyTitle, MyParagraph, MyText} from '$ui'
export default {
  components: {
    MyTypography,
    MyTitle,
    MyParagraph,
    MyText
  }
}
</script>

```
:::

### 标题组件

展示不同级别的标题。

:::demo
```html
<template>
  <div>
     <my-title>h1. MyWeb 4.x</my-title>
     <my-title level="2">h2. MyWeb 4.x</my-title>
     <my-title level="3">h3. MyWeb 4.x</my-title>
     <my-title level="4">h4. MyWeb 4.x</my-title>
  </div>
</template>

<script>
import { MyTitle } from '$ui'
export default {
  components: {
    MyTitle
  }
}
</script>

```
:::

### 文本组件

内置不同样式的文本。

:::demo
```html
<template>
  <div>
      <my-text>MyWeb 4.x</my-text> <br />
      <my-text type="primary">MyWeb 4.x</my-text> <br />
      <my-text type="secondary">MyWeb 4.x</my-text> <br />
      <my-text type="warning">MyWeb 4.x</my-text> <br />
      <my-text type="danger">MyWeb 4.x</my-text> <br />
      <my-text delete>MyWeb 4.x</my-text> <br />
      <my-text mark>MyWeb 4.x</my-text> <br />
      <my-text code>MyWeb 4.x</my-text> <br />
      <my-text strong>MyWeb 4.x</my-text> <br />
      <my-text underline>MyWeb 4.x</my-text> <br />
  </div>
</template>

<script>
import { MyText } from '$ui'
export default {
  components: {
    MyText
  }
}
</script>

<style style="scss" scoped>
 .my-text {
    margin-bottom: 15px;
 }
</style>

```
:::

### 可以交互

提供额外的交互能力。

:::demo
```html
<template>
  <div style="padding: 30px;">
     <my-paragraph editable>可以编辑的文本</my-paragraph>
     <my-paragraph copyable>可以复制的文本</my-paragraph>
     <my-paragraph copyable copy-text="替换的复制文本">可以替换复制的文本</my-paragraph>
  </div>
</template>

<script>
import { MyParagraph } from '$ui'
export default {
  components: {
    MyParagraph
  }
}
</script>

```
:::

### 省略号

支持多行文本省略

:::demo
```html
<template>
  <div>
     <my-paragraph ellipsis>gitee Page 不能出现宣传性质的文字内容gitee Page 不能出现宣传性质的文字内容, gitee Page 不能出现宣传性质的文字内容。gitee Page 不能出现宣传性质的文字内容，gitee Page 不能出现宣传性质的文字内容。gitee Page 不能出现宣传性质的文字内容</my-paragraph>
     <my-paragraph ellipsis :rows="2" expandable>
     gitee Page 不能出现宣传性质的文字内容gitee Page 不能出现宣传性质的文字内容, gitee Page 不能出现宣传性质的文字内容。gitee Page 不能出现宣传性质的文字内容，gitee Page 不能出现宣传性质的文字内容。gitee Page 不能出现宣传性质的文字内容。
     gitee Page 不能出现宣传性质的文字内容gitee Page 不能出现宣传性质的文字内容, gitee Page 不能出现宣传性质的文字内容。gitee Page 不能出现宣传性质的文字内容，gitee Page 不能出现宣传性质的文字内容。gitee Page 不能出现宣传性质的文字内容</my-paragraph>
  </div>
</template>

<script>
import { MyParagraph } from '$ui'
export default {
  components: {
    MyParagraph
  }
}
</script>

```
:::

### 省略Tooltip

:::demo
```html
<template>
  <div>
     <my-paragraph ellipsis tooltip>gitee Page 不能出现宣传性质的文字内容gitee Page 不能出现宣传性质的文字内容, gitee Page 不能出现宣传性质的文字内容。gitee Page 不能出现宣传性质的文字内容，gitee Page 不能出现宣传性质的文字内容。gitee Page 不能出现宣传性质的文字内容</my-paragraph>
     <my-paragraph ellipsis :rows="2" tooltip>
     gitee Page 不能出现宣传性质的文字内容gitee Page 不能出现宣传性质的文字内容, gitee Page 不能出现宣传性质的文字内容。gitee Page 不能出现宣传性质的文字内容，gitee Page 不能出现宣传性质的文字内容。gitee Page 不能出现宣传性质的文字内容。
     gitee Page 不能出现宣传性质的文字内容gitee Page 不能出现宣传性质的文字内容, gitee Page 不能出现宣传性质的文字内容。gitee Page 不能出现宣传性质的文字内容，gitee Page 不能出现宣传性质的文字内容。gitee Page 不能出现宣传性质的文字内容</my-paragraph>
  </div>
</template>

<script>
import { MyParagraph } from '$ui'
export default {
  components: {
    MyParagraph
  }
}
</script>

```
:::



