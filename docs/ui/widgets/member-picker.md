# 仿钉钉人员选择器

## 样例：

![cover](/my/img/dw.jpg)

## 安装命令

```sh
npm run widgets member-picker
```

执行命令后，工具生成在项目的 **`".my/widgets/member-picker"`** 路径下；

> 生成文件目录如下：
>
> -   **`auto-complete.vue`**
> -   **`core.vue`** （选择器组件）
> -   **`index.vue`** （结合选择器的表单组件）
> -   **`input-area.vue`**
> -   **`org-list.vue`**
>     
> MemberPicker 提供两个引用方式：
> - 引用 “index.vue” , 结合了表单 和 弹窗 的选择器功能，可以直接使用
> - 引用 “core.vue”, 选择器核心功能（弹窗内），可以自行使用

## 代码示例

### 基础用法
引用 “index.vue”
:::demo

```html
<template>
  <div >
    <member-picker 
      :field-props-map="{name: 'name', id: 'id'}" 
      type="dialog"  
      :multiple="true" 
      :load-org="createOrgTree" 
      :load-user="loadUserByOrg" 
      :search-person="searchPersonByText" 
      v-model="selectPersons" 
      :props="{collapseTags:true}"
    >  <!-- :props="{...}" 为 my-tag-input 参数 -->
    </member-picker>  
    <hr> 
    <div> 
      <my-list :data="selectPersons" border split stripe>
        <template v-slot="{item, index}">
          <div class="item">
            <el-button type="danger" icon="el-icon-delete" circle @click="removeItem(item, index)"></el-button>
            <my-key-val-list :column="column" :data="item" border> </my-key-val-list>
          </div>
        </template>  
      </my-list> 
    </div> 
  </div>
</template>
<style scoped lang="scss">

</style>
<script>
import MemberPicker from '$ui/widgets/member-picker' // 此处为文档引用，正式使用请在项目中组件路径中引入
import Mock from 'mockjs'
import CityData from '$docs/data/CITY.json'
import {create as createTree} from '$ui/utils/tree'
export default {
  components: {
    MemberPicker
  },
  data() {
    return {
      selectPersons: [],  
      column: [
        { label: '姓名', prop: 'name'},
        { label: '身份证', prop: 'id' },
        { label: '年龄', prop: 'age' },
        { label: '部门', prop: 'department' },
        { label: '其他', prop: 'other' },
        { label: '其他2', prop: 'other2' }
      ]   
    }
  },
  methods: {
    mockUser(limit) {
      return Mock.mock({
        [`list|${limit}`]: [
          {
            id: '@id',
            name: '@cname',
            'age|10-100': 18,
            department: '@ctitle', 
            other1: '@ctitle',
            other2: '@ctitle'
          }
        ]
      })
    },
    createOrgTree() {
      return new Promise((resolve) => {
        const tree = createTree(CityData.data, '100000') // 100000
        // console.log(tree)
        resolve(tree)
      })
    },
    loadUserByOrg(org) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const num = Math.round(Math.random() * 15)
          const users = this.mockUser(num).list
          resolve(users)
        }, 500)
      })
    },
    searchPersonByText(text) { 
      return new Promise((resolve) => {
        setTimeout(() => {
          const num = 2 + Math.round(Math.random() * 4)
          const users = this.mockUser(num).list
          resolve(users)
        }, 500)
      })
    },
    removeItem(item, index) {
      this.selectPersons.splice(index, 1)
    }
  }
}
</script>
```
:::

### 表单用法
引用 “index.vue”； 在my-form 使用时，需结合“my-form-custom” 容器， 且手动设置 width="100%"。并监听“change”事件与“my-form”进行数据绑定
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
      <my-form-custom label="人员" name="persons" > 
        <member-picker 
          width="100%" 
          :field-props-map="{name: 'name', id: 'id'}" 
          type="popover"  
          :multiple="true" 
          :load-org="createOrgTree" 
          :load-user="loadUserByOrg" 
          :search-person="searchPersonByText" 
          v-model="selectPersons" 
          @change="pickerChange">  
        </member-picker>  
       </my-form-custom>
      <my-input name="content" label="内容" width="calc(100% - 20px)" :props="{type:'textarea'}"></my-input>
    </my-form>  
     
    <div v-if="content">
      <div v-show="content.title">标题： {{content.title}}</div>
      <div v-show="content.date">日期： {{content.date}}</div>
      <div v-show="content.persons">人员id： {{content.persons}}</div>
      <div>
        人员标签： <el-tag size="mini" v-for="(item, index) in content.personList" :key="index">{{item.name}}</el-tag>
      </div>
      <div v-show="content.content">内容： {{content.content}}</div>
    </div>    
  </div>
</template>
<style scoped lang="scss">

</style>
<script>
import MemberPicker from '$ui/widgets/member-picker' // 此处为文档引用，正式使用请在项目中组件路径中引入
import Mock from 'mockjs'
import CityData from '$docs/data/CITY.json'
import {create as createTree} from '$ui/utils/tree'
import {cloneDeep} from '$ui/utils/util'
export default {
  components: {
    MemberPicker
  },
  data() {
    return {
      selectPersons: [], 
      rules: {
        persons: {required: true, message: '标题是必填项'}
      },
      content: null     
    }
  },
  methods: {
    mockUser(limit) {
      return Mock.mock({
        [`list|${limit}`]: [
          {
            id: '@id',
            name: '@cname',
            'age|10-100': 18,
            department: '@ctitle', 
            other1: '@ctitle',
            other2: '@ctitle'
          }
        ]
      })
    },
    createOrgTree() {
      return new Promise((resolve) => {
        const tree = createTree(CityData.data, '100000')
        resolve(tree)
      })
    },
    loadUserByOrg(org) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const num = Math.round(Math.random() * 15)
          const users = this.mockUser(num).list
          resolve(users)
        }, 500)
      })
    },
    searchPersonByText(text) { 
      return new Promise((resolve) => {
        setTimeout(() => {
          const num = 2 + Math.round(Math.random() * 4)
          const users = this.mockUser(num).list
          resolve(users)
        }, 500)
      })
    },
    pickerChange(val) {
      const currentModel = cloneDeep(this.$refs.form.currentModel)
      currentModel.persons = val.map((item) => {
        return item.id
      }).join(',')
      this.$refs.form.currentModel = currentModel 
    },
    handleSubmit(model) { 
      
      const data = {...model}
      data.personList = this.selectPersons
      console.log(data)
      this.content = data
    }
  }
}
</script>
```
:::

### 自定义选中结果
引用 “index.vue”， 自定义选中结果 需要手动调用member-picker的 "openPicker"打开弹窗 和 “selRemove” 删除选中
:::demo

```html
<template>
  <div >
    <member-picker 
      ref="memberPicker"
      :field-props-map="{name: 'name', id: 'id'}" 
      type="dialog"  
      :multiple="true" 
      :load-org="createOrgTree" 
      :load-user="loadUserByOrg" 
      :search-person="searchPersonByText" 
      v-model="selectPersons" 
      :props="{collapseTags:true}"
    >  <!-- :props="{...}" 为 my-tag-input 参数 -->
      <template v-slot:field="{selItems}">
      <div>
        选中人员： 
        <el-tag  v-for="(item, index) in selItems" :key="index" closable @close="$refs.memberPicker.selRemove(index)">{{item.name}}</el-tag>
        <el-button size="mini" type="primary" @click="$refs.memberPicker.openPicker()">选择</el-button>
      </div>
      </template>  
    </member-picker>  
   
  </div>
</template>
<style scoped lang="scss">

</style>
<script>
import MemberPicker from '$ui/widgets/member-picker' // 此处为文档引用，正式使用请在项目中组件路径中引入
import Mock from 'mockjs'
import CityData from '$docs/data/CITY.json'
import {create as createTree} from '$ui/utils/tree'
export default {
  components: {
    MemberPicker
  },
  data() {
    return {
      selectPersons: []
    }
  },
  methods: {
    mockUser(limit) {
      return Mock.mock({
        [`list|${limit}`]: [
          {
            id: '@id',
            name: '@cname',
            'age|10-100': 18,
            department: '@ctitle', 
            other1: '@ctitle',
            other2: '@ctitle'
          }
        ]
      })
    },
    createOrgTree() {
      return new Promise((resolve) => {
        const tree = createTree(CityData.data, '100000') // 100000
        // console.log(tree)
        resolve(tree)
      })
    },
    loadUserByOrg(org) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const num = Math.round(Math.random() * 15)
          const users = this.mockUser(num).list
          resolve(users)
        }, 500)
      })
    },
    searchPersonByText(text) { 
      return new Promise((resolve) => {
        setTimeout(() => {
          const num = 2 + Math.round(Math.random() * 4)
          const users = this.mockUser(num).list
          resolve(users)
        }, 500)
      })
    }
  }
}
</script>
```
:::

### 单独pickerCore组件的用法

引用 “core.vue”
:::demo

```html
<template>
  <div >
    获取数据方式： <el-radio-group v-model="useEvent">
      <el-radio :label="false">使用api</el-radio>
      <el-radio :label="true">使用event</el-radio> 
    </el-radio-group>
    <div>
      <el-button size="mini" type="primary" @click="visible = true">打开选择器</el-button>
      <div v-show="selectPersons.length">
        选择人员： <el-tag v-for="item in selectPersons" :key="item.id">{{item.name}}</el-tag>
      </div>  
      <div v-show="selectDepts.length">
        选择部门： <el-tag v-for="item in selectDepts" :key="item.id">{{item.label}}</el-tag>
      </div>
    </div>  
    <my-dialog :visible.sync="visible" target="body" title="标题文字" width="700px" height="500px" :footer="!useEvent" @submit="getResult">
      <member-picker-core 
        ref="picker" 
        :submit-btn="useEvent" 
        :show-org-list="true" 
        :multiple="true" 
        :load-org="createOrgTree" 
        :load-user="loadUserByOrg" 
        :search-person="searchPersonByText" 
        @submit="showResult"
      ></member-picker-core>
    </my-dialog> 
  </div>
</template>
<style scoped lang="scss">

</style>
<script>
import MemberPickerCore from '$ui/widgets/member-picker/core' // 此处为文档引用，正式使用请在项目中组件路径中引入
import Mock from 'mockjs'
import CityData from '$docs/data/CITY.json'
import {create as createTree} from '$ui/utils/tree'
export default {
  components: {
    MemberPickerCore
  },
  data() {
    return {
      useEvent: true,
      visible: false,
      selectPersons: [],
      selectDepts: []   
    }
  },
  methods: {
    mockUser(limit) {
      return Mock.mock({
        [`list|${limit}`]: [
          {
            id: '@id',
            name: '@cname',
            'age|10-100': 18,
            department: '@ctitle', 
            other1: '@ctitle',
            other2: '@ctitle'
          }
        ]
      })
    },
    createOrgTree() {
      return new Promise((resolve) => {
        const tree = createTree(CityData.data, '100000') // 100000
        console.log(tree)
        resolve(tree)
      })
    },
    loadUserByOrg(org) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const num = Math.round(Math.random() * 15)
          const users = this.mockUser(num).list
          resolve(users)
        }, 500)
      })
    },
    searchPersonByText(text) { 
      return new Promise((resolve) => {
        setTimeout(() => {
          const num = 1 + Math.round(Math.random() * 4)
          const users = this.mockUser(num).list
          resolve(users)
        }, 500)
      })
    },
    showResult(targets, dept) {
      this.visible = false
      // console.log(targets, dept)
      this.selectPersons = targets
      this.selectDepts = dept
    },
    getResult() {
      this.visible = false
      const targets = this.$refs.picker.getSelctPersons()
      const dept = this.$refs.picker.getSelectDept()
      // console.log(targets, dept)
      this.selectPersons = targets
      this.selectDepts = dept
    }
  }
}
</script>
```
:::

## 属性参数
### 表单弹窗参数
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value | 用作v-model双向绑定 | array | — | [] |
| type | 弹窗的打开方式 | string | dialog / popover | dialog |
| fieldPropsMap | 接口返回人员列表字段映射（作用于表单的显示标签中） | object | - | { name: 'name', id: 'id' } |
| dialogProps | 弹窗配置参数 | object | - | - |
| popProps | popover 配置参数 | object | - | - |

### picker参数
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| submitBtn | 控制是否显示提交、取消按钮 | boolean | — | true |
| personPropMap | 接口返回人员列表字段映射 | object | — | { name: 'name', id: 'id', cardNo: 'cardNo' } |
| multiple | 是否多选 | boolean | — | true |
| showOrgList | 是否结合部门进行查询（显示右侧组织列表） | boolean | — | true |
| searchPerson | 通过搜索异步查询人员函数，必传，参数为keyword, 返回输出人员列表的 Promise对象 | function | — | - | 
| loadOrg | 异步获取初始部门树的函数，必传，返回 输出组织架构树 的 Promise对象 | function | — | - |  
| loadOrgChildren | 异步获取各个子部门树的函数（用于懒加载），选传，返回 输出 子级部门 的 Promise对象 | function | — | - |  
| loadUser | 根据部门信息异步获取部门成员的函数，必传，返回 输出 部门成员数组 的 Promise对象 | function | — | - | 
| orgPropMap | 接口返回部门数据字段映射 | object | — | {name: 'label', id: 'id', children: 'children', parentId: 'parentId'} | 
### 其他参数
member-picker 继承 my-tag-input 参数 

## API method
### Picker (整体组件)方法
| 参数      | 说明    |  参数      | 输出       |
|---------- |-------- |---------- |------------- |
| openPicker | 打开弹窗（dialog）的函数 | - | - |
| selRemove | 删除标签的函数 | index | - | 

### PickerCore (选择器组件) 方法
| 参数      | 说明    |  参数      | 输出       |
|---------- |-------- |---------- |------------- |
| getSelctPersons | 获取选中人员 | - | 选中人员数据 |
| getSelectDept | 通过API获取选中部门 | - | 选中部门数据 | 
 
## event 事件
| 参数      | 说明    |  传参      | 
|---------- |-------- |---------- |
| change | 表单数据变化的事件 | 变化的数据 |  
| submit | 点击提交按钮 获取当前人员和部门 | - | 
| close | 点击取消按钮 清空右侧列表选中 | - |

