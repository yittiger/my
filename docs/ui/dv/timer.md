# Timer 计时器

:::tip 提示
继承 <api-link href="dv/my-dv-title">MyDvTitle</api-link>、 <api-link href="components/my-Date">MyDate</api-link>
:::

## 秒表模式

:::demo
```html
<template>
    <div style="height: 100px">
      <my-dv-page target="parent" fit>
        <my-dv-timer auto></my-dv-timer>
      </my-dv-page>
    </div>
</template>
```
:::

## 倒数模式
:::demo
```html
<template>
    <div style="height: 100px">
      <my-dv-page target="parent" fit>
        <my-dv-timer target="00:01:00" countdown auto></my-dv-timer>
      </my-dv-page>
    </div>
</template>
```
:::
