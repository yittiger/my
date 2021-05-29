# SlideLayout 滑动布局

滑动布局是个滑动布局组件。
组件文档 <api-link href="components/my-slide-layout">MySlideLayout</api-link>

## 何时使用

通常用需要动态改变宽高的布局

## 代码示例

### 基本用法
#### 布局一
:::demo
```html
<template>
  <div style="width: 400px; height:400px">
    <my-slide-layout type="horizontal" :edage-width="40">
      <div slot="odd" style="width: 100%; height: 100%;background: lightgreen">left</div>
      <div slot="even" style="width: 100%; height: 100%;background: pink">right</div>
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
  <div style="width: 100%; height:600px">
    <my-slide-layout type="vertical" :edage-width="60" :range="[50, 80]"  @on-resize="handle">
      <div slot="odd" style="width: 100%; height: 100%">
        <my-map height="100%"></my-map>
      </div>
      <div slot="even" style="width: 100%; height: 100%;background: pink">
         <my-table size="mini" :columns="columns" :data="list" fit></my-table>
      </div>
    </my-slide-layout>
  </div>
</template>

<script>
import {MySlideLayout} from '$ui'
import Mock from 'mockjs'
export default {
  components: {
    MySlideLayout
  },
  data() {
    return {
      columns: [
          { type: 'index', label:'#' },
          { label: '姓名', prop: 'name'},
          { label: '身份证', prop: 'id'},
          { label: '年龄', prop: 'age'},
          { label: '地址', prop: 'address'},
          { label: '日期', prop: 'date'}
      ],
      list: []
    }
  },
  methods: {
    mock(limit) {
      return Mock.mock({
        [`list|${limit}`]: [
            {
              id: '@id',
              name: '@cname',
              'age|10-100': 18,
              address: '@ctitle',
              date: '@date(yyyy-MM-dd)'
            }
        ]
      })
    },
    handle(e) {
      console.log(e)
    }
  },
  created() {
    this.list = this.mock(20).list
  }
}
</script> 

```
:::