# 列表选择器

## 使用场景
快速实现列表选择模块功能。 通常用于关联数据的相互绑定。

## 安装命令
```sh
npm run widgets list-picker
```
执行命令后，工具生成在项目的 **`".my/widgets/list-picker"`** 路径下；

> 生成文件目录如下：
>
> -   **`core.vue`** （选择器组件）
> -   **`index.vue`** （选择器+表单+弹窗组件）

### 基础用法
常规使用组件
:::demo

```html
<template>
  <div > 
    <list-picker 
      ref="listPicker"
      :field-props="{type: 'popover'}"
      :list-load="caseListLoadFn"
      :options-props-map="casePropsMap"
      v-model="selects"
      @change="pickerChange"
      @on-submit="pickerSubmit" 
      @on-pickerOpen="pickerOpen"
    > 
    </list-picker> 
    <div>
      <div v-for="(item, index) in selects" :key="index" >{{item}} 
        <el-button @click="removeSel(index)">删除</el-button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>

</style>
<script>
import Mock from 'mockjs'
import ListPicker from '$ui/widgets/list-picker'
export default {
  mixins: [],
  components: {ListPicker},
  props: {
  },
  data() {
    return {
      casePropsMap: {
        label: 'caseName',
        id: 'id',
        value: 'id'
      },
      selects: []
    }
  },
  computed: {
  },
  methods: {
    caseListLoadFn(page, pageSize, filter) {
      return new Promise((resolve, reject) => {
        console.log(page, pageSize, filter)
        setTimeout(() => {
          const data = Mock.mock({
            [`list|${pageSize}`]: [
              {
                id: '@id',
                caseName: '@ctitle', 
                content: '@ctitle'
              }
            ]
          })
    
          resolve({
            total: 80,
            list: data.list
          })
        }, 300)
      })
    }, 
    removeSel(index) {
      this.selects.splice(index, 1)
    },
    pickerChange(sels) {
      console.log(sels, 'change')
    },
    pickerSubmit(sels) {
      console.log(sels, 'submit')
    },
    pickerOpen() {
      console.log('picker open')
    }
  } 
}
</script>
```html
:::


### 自定义选项内容与查询条件
:::demo 
```html
<template>
  <div > 
    <list-picker 
      ref="listPicker"
      :field-props="{type: 'dialog'}"
      :list-load="caseListLoadFn"
      :options-props-map="casePropsMap"
      v-model="selects" 
    > 
      <template v-slot:field="{selItems}">
        <div>
           选中案件： 
          <el-tag   v-for="(item, index) in selItems" :key="index" closable @close="(index) => {selects.splice(index, 1)}">{{item.caseName}}</el-tag>
          <el-button size="mini" type="primary" @click="$refs.listPicker.openPicker()">选择</el-button>
        </div>
      </template>  
      <my-filter slot="filter" is-flex label-width="60px" @submit="filterSubmitHandle" :columns="2" size="mini">
        <my-input name="caseName" label="案件名" placeholder="请输入案件名" ></my-input> 
        <my-input name="caseId" label="案件id" placeholder="请输入案件ID" ></my-input> 
      </my-filter>
      <template v-slot:option="{item}">
        <div>案件名：{{item.caseName}}, id: {{item.id}}</div>
      </template>
    </list-picker> 
  </div>
</template>
 
<script>
import Mock from 'mockjs'
import ListPicker from '$ui/widgets/list-picker'
export default {
  mixins: [],
  components: {ListPicker},
  props: {
  },
  data() {
    return {
      casePropsMap: {
        label: 'caseName',
        id: 'id',
        value: 'id'
      },
      selects: []
    }
  },
  computed: {
  },
  methods: {
    caseListLoadFn(page, pageSize, filter) {
      return new Promise((resolve, reject) => {
        console.log(page, pageSize, filter)
        setTimeout(() => {
          const data = Mock.mock({
            [`list|${pageSize}`]: [
              {
                id: '@id',
                caseName: '@ctitle', 
                content: '@ctitle'
              }
            ]
          })
    
          resolve({
            total: 80,
            list: data.list
          })
        }, 300)
      })
    },
    filterSubmitHandle(model) {
      this.$refs.listPicker.filterSubmitHandle(model)
    } 
  } 
}
</script>
```html
:::

### 表格模式
:::demo 
```html
<template>
  <div > 
    <list-picker 
      ref="listPicker"
      :field-props="{type: 'popover', 'popProps': {'width': 800}}"
      :list-load="caseListLoadFn"
      :options-props-map="casePropsMap"
      style-mode="table"
      :list-column="listColumn"
      v-model="selects"
      @change="pickerChange"
      @on-submit="pickerSubmit" 
      @on-pickerOpen="pickerOpen"
    > 
      <template v-slot:column="scope">
        <div v-if="scope.column.prop === 'caseName'" style="color: red"   >
          {{scope.row.caseName}} 
        </div>
        <div v-else>{{scope.row[scope.column.prop]}}</div>
      </template>
    </list-picker> 
    <div>
      <div v-for="(item, index) in selects" :key="index" >{{item}} 
        <el-button @click="removeSel(index)">删除</el-button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>

</style>
<script>
import Mock from 'mockjs'
import ListPicker from '$ui/widgets/list-picker'
export default {
  mixins: [],
  components: {ListPicker},
  props: {
  },
  data() {
    return {
      casePropsMap: {
        label: 'caseName',
        id: 'id',
        value: 'id'
      },
      selects: [],
      listColumn: [
        {prop: 'id', label: 'id'},
        {prop: 'caseName', label: '名称'},
        {prop: 'content', label: '内容'}
      ]
    }
  },
  computed: {
  },
  methods: { 
    caseListLoadFn(page, pageSize, filter) {
      return new Promise((resolve, reject) => {
        console.log(page, pageSize, filter)
        setTimeout(() => {
          const data = Mock.mock({
            [`list|${pageSize}`]: [
              {
                id: '@id',
                caseName: '@ctitle', 
                content: '@ctitle'
              }
            ]
          })
    
          resolve({
            total: 80,
            list: data.list
          })
        }, 300)
      })
    }, 
    removeSel(index) {
      this.selects.splice(index, 1)
    },
    pickerChange(sels) {
      console.log(sels, 'change')
    },
    pickerSubmit(sels) {
      console.log(sels, 'submit')
    },
    pickerOpen() {
      console.log('picker open')
    }
  } 
}
</script>
```
:::

### 结合表单
:::demo 
```html
<template>
  <div >
     <my-form 
      ref="form"
      @submit="handleSubmit"
      inline
      label-width="60px"
      item-width="calc(50% - 20px)"
      footer-block
      size="small"
      footer-align="right"
      :rules="rules" 
    > 
      
      <my-input name="title" label="标题"  ></my-input>
      <my-date-picker name="date" label="日期" :props="{valueFormat:'yyyy-MM-dd'}"  ></my-date-picker>
      <my-form-custom label="案件" name="case" >  
        <list-picker 
          ref="listPicker"
          :field-props="{type: 'popover', width: '100%'}"
          :list-load="caseListLoadFn"
          :options-props-map="casePropsMap"
          v-model="selects"
          @change="pickerChange" 
        > 
        </list-picker> 
      </my-form-custom>
      <my-input name="content" label="内容" width="calc(100% - 20px)" :props="{type:'textarea'}"></my-input>
    </my-form>  
     
    <div v-if="content">
      <div v-show="content.title">标题： {{content.title}}</div>
      <div v-show="content.date">日期： {{content.date}}</div>
      <div v-show="content.case">人员id： {{content.case}}</div>
      <div>
        人员标签： <el-tag size="mini" v-for="(item, index) in content.caseList" :key="index">{{item.caseName}}</el-tag>
      </div>
      <div v-show="content.content">内容： {{content.content}}</div>
    </div>    
  </div>
</template>
<style scoped lang="scss">

</style>
<script> 
import Mock from 'mockjs' 
import {cloneDeep} from '$ui/utils/util'
import ListPicker from '$ui/widgets/list-picker'
export default {
  components: {ListPicker}, 
  data() {
    return {
       casePropsMap: {
        label: 'caseName',
        id: 'id',
        value: 'id'
      }, 
      selects: [],
      rules: {
        case: {required: true, message: '标题是必填项'}
      },
      content: null     
    }
  },
  methods: {
    
    caseListLoadFn(page, pageSize, filter) {
      return new Promise((resolve, reject) => {
        console.log(page, pageSize, filter)
        setTimeout(() => {
          const data = Mock.mock({
            [`list|${pageSize}`]: [
              {
                id: '@id',
                caseName: '@ctitle', 
                content: '@ctitle'
              }
            ]
          }) 
          resolve({
            total: 80,
            list: data.list
          })
        }, 300)
      })
    }, 
    pickerChange(val) { 
      const currentModel = cloneDeep(this.$refs.form.currentModel)
      currentModel.case = val.map((item) => {
        return item.id
      }).join(',')
      this.$refs.form.currentModel = currentModel 
    },
    handleSubmit(model) {  
      const data = {...model}
      data.caseList = this.selects
      console.log(data)
      this.content = data
    }
  },
  created() {
     
  }
}
</script>

```html
:::

### 直接使用内部
使用选择器内部
:::demo

```html
<template>
  <div style="width:500px; height: 400px"> 
    <list-picker 
      ref="listPicker" 
      :list-load="caseListLoadFn"
      :options-props-map="casePropsMap"
      @on-submit="submitHandle" 
    > 
    </list-picker> 
  </div>
</template>
<style lang="scss" scoped>

</style>
<script>
import Mock from 'mockjs'
import ListPicker from '$ui/widgets/list-picker/core'
export default {
  mixins: [],
  components: {ListPicker},
  props: {
  },
  data() {
    return {
      casePropsMap: {
        label: 'caseName',
        id: 'id',
        value: 'id'
      }
    }
  },
  computed: {
  },
  methods: {
    caseListLoadFn(page, pageSize, filter) {
      return new Promise((resolve, reject) => {
        console.log(page, pageSize, filter)
        setTimeout(() => {
          const data = Mock.mock({
            [`list|${pageSize}`]: [
              {
                id: '@id',
                caseName: '@ctitle', 
                content: '@ctitle'
              }
            ]
          })
    
          resolve({
            total: 80,
            list: data.list
          })
        }, 300)
      })
    }, 
    submitHandle(sel) {
      this.$alert(sel)
    }
     
  } 
}
</script>
```html
:::


## 属性参数
组件基于my-select-field组件和my-list组件封装，
### 表单弹窗参数
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value | 用作v-model双向绑定 | array | — | [] |
| fieldProps | my-select-field组件的参数 | object | - | - |
| optionsPropsMap | 选项表单与选项列表的共同字段映射 | object | - | { label: 'name', id: 'id', value: 'id' } |
| keepPickerState | 打开选择器时是否回填当前选择数据 | boolean | - | true |

### 表单弹窗参数
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| listLoad |  | Function 
| optionsPropsMap | 选项的字段映射 | Object | - | { label: 'name', id: 'id', value: 'id' } |,
| selItemShowMax | 选中最多显示的数量 | Number | - | 5 |
| isShowResult | 是否显示选中结果 | Boolean | - | true |
| isShowSubmit | 是否显示提交按钮 | Boolean | - | true |
| isMultiSel | 是否多选 | Boolean | - | true |

### 其他参数
支持 my-table 除 loader 外其他参数

## API method
### Picker (整体组件)方法
| 参数      | 说明    |  参数      | 输出       |
|---------- |-------- |---------- |------------- |
| openPicker | 打开弹窗（dialog）的函数 | - | - |
| closePicker | 关闭弹窗（dialog）的函数 | - | - |
| filterSubmitHandle | 查询表单的提交函数 | query 表单查询数据 | - | 

### PickerCore (选择器组件) 方法
| 参数      | 说明    |  参数     | 输出       |
|---------- |-------- |---------- |------------- |
| removeItemSel | 删除选中的选项 | item选项数据 | - |
| getSelectItems | 获取选中的选项 | - | 选中数据数组 |
| setSelectItems | 设置选中的选项 | items 选项数据数组 | - |
| clearSelectItems | 清空选中的选项 | - | - |