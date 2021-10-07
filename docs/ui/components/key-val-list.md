# KeyValList键值对列表
用于展示键值对数据的列表，文档 <api-link href="components/my-key-val-list">MyKeyValList</api-link>

## 代码示例

### 基础用法

使用
:::demo

```html
<template>
  <div >
    <my-key-val-list :columns="{
        xxl: 5,
        xl: 4, 
        lg: 4,
        md: 3,
        sm: 2,
        xs: 2
      }" 
      :column="column" 
      :data="data" 
    > 
      <template v-slot:titleA>
        <div style="text-align: center">
        **********************************分割线**********************************
        </div>
      </template>
      <template v-slot:name="scope">
        <my-description :title="scope.label" :width="100" align="right">
        <a>{{scope.value}}</a> 
        </my-description>  
      </template>
        
    </my-key-val-list>
  </div>
</template>
<style scoped lang="scss">

</style>
<script>
   
  export default {
     
    data() {
      return {
        column: [
          { label: '姓名', prop: 'name'},
          { label: '身份证', prop: 'id', devide: 'titleA' },
          { label: '地址', prop: 'address', span: 24}, 
          { label: '电话', prop: 'phone'},
          { label: '年龄', prop: 'age'},
          { label: '日期', prop: 'date'},
          { label: '性别', prop: 'gender'}
        ],
        data: {
          name: '王菲',
          id: '23456',
          age: '21',
          address: '广东省广州市荔湾区黄沙大道西郊游泳场三号楼12345号',
          date: '19871009',
          phone: '1234',
          gender: '男'
        }
      }
    }
  }
</script>

```

:::
