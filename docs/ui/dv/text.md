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
     <my-dv-text>gitee Page 不能出现宣传性质的文字内容gitee Page 不能出现宣传性质的文字内容, gitee Page 不能出现宣传性质的文字内容。gitee Page 不能出现宣传性质的文字内容，gitee Page 不能出现宣传性质的文字内容。gitee Page 不能出现宣传性质的文字内容。</my-dv-text>
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
     <my-dv-text :level="1" :position="false">gitee Page 不能出现宣传性质的文字内容gitee Page 不能出现宣传性质的文字内容, gitee Page 不能出现宣传性质的文字内容。gitee Page 不能出现宣传性质的文字内容，gitee Page 不能出现宣传性质的文字内容。gitee Page 不能出现宣传性质的文字内容。</my-dv-text>
     <my-dv-text :level="2" :position="false">gitee Page 不能出现宣传性质的文字内容
       gitee Page 不能出现宣传性质的文字内容, gitee Page 不能出现宣传性质的文字内容。gitee Page 不能出现宣传性质的文字内容，gitee Page 不能
       出现宣传性质的文字内容。gitee Page 不能出现宣传性质的文字内容。</my-dv-text>
     <my-dv-text :level="3" :position="false">gitee Page 不能出现宣传性质的文字内容gitee Page 
       不能出现宣传性质的文字内容, gitee Page 不能出现宣传性质的文字内容。gitee Page 不能出现宣传性质的文字内容，
       gitee Page 不能出现宣传性质的文字内容。gitee Page 不能出现宣传性质的文字内容。</my-dv-text>
     <my-dv-text :level="4" :position="false">gitee Page 不能出现宣传性质的文字内容gitee Page
        不能出现宣传性质的文字内容, gitee Page 不能出现宣传性质的文字内容。gitee Page 不能出现宣传性质的文字内容，gitee Page 不能出现宣传
        性质的文字内容。gitee Page 不能出现宣传性质的文字内容。</my-dv-text>
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
     <my-dv-text type="default" :position="false">gitee Page 不能出现宣传性质的文字内容。</my-dv-text>
     <my-dv-text type="primary" :position="false">gitee Page 不能出现宣传性质的文字内容。</my-dv-text>
     <my-dv-text type="normal" :position="false">gitee Page 不能出现宣传性质的文字内容。</my-dv-text>
     <my-dv-text type="secondary" :position="false">gitee Page 不能出现宣传性质的文字内容。</my-dv-text>
     <my-dv-text type="success" :position="false">gitee Page 不能出现宣传性质的文字内容。</my-dv-text>
     <my-dv-text type="placeholder" :position="false">gitee Page 不能出现宣传性质的文字内容。</my-dv-text>
     <my-dv-text type="warning" :position="false">gitee Page 不能出现宣传性质的文字内容。</my-dv-text>
     <my-dv-text type="danger" :position="false">gitee Page 不能出现宣传性质的文字内容。</my-dv-text>
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
     <my-dv-text width="500px" ellipsis :rows="2">gitee Page 不能出现宣传性质的文字内容gitee Page 不能出现宣传性质的文字内容, gitee Page
        不能出现宣传性质的文字内容。gitee Page 不能出现宣传性质的文字内容，gitee Page 不能出现宣传性质的文字内容。gitee Page 不能出现宣传性质的文字内容。。</my-dv-text>
   </my-dv-page>
 </div>
</template>
```
:::
