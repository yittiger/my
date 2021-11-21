# KeyValList键值对列表
用于展示键值对数据的列表，文档 <api-link href="components/my-key-val-list">MyKeyValList</api-link>

## 代码示例

### 基础用法

使用
:::demo

```html
<template>
  <div >
    <my-key-val-list :column="column" :data="data" border> </my-key-val-list>
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
          { label: '身份证', prop: 'id' },
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

### 字段插槽

使用
:::demo(slot)

```html
<template>
  <div >
    <my-key-val-list :column="column" :data="data" border>
      <template v-slot:name="scope">
        <my-description border :title="scope.label" :width="100" align="right">
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
          { label: '身份证', prop: 'id' },
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

### 分割线插槽

分割线插槽允许以一条不定义“prop”的col数据生成（以devide值作为key），或在任意一个col数据中定义 devide（在此字段后面添加分割线。）
:::demo(devide)

```html
<template>
  <div >
    <my-key-val-list :column="column" :data="data" border>
      <template v-slot:titleA>
        <my-header title="单独创建标题A" icon="el-icon-menu" theme="border-bottom" :background="false" ></my-header>
      </template> 
      <template v-slot:titleB>
        <my-header title="身份证后面的分割标题B"  theme="border-bottom" :background="false" size="small"></my-header>
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
          { label: '', prop: '', devide: 'titleA' },
          { label: '姓名', prop: 'name'},
          { label: '身份证', prop: 'id', devide: 'titleB' },
          { label: '地址', prop: 'address', span: 24}, 
          { label: '电话', prop: 'phone'},
          { label: '年龄', prop: 'age', border: false},
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