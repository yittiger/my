# 部门人员关联选择器

## 使用场景
与“仿钉钉人员选择器（member-picker）”组件类似，"member-picker"侧重选择人员，"org-member-picker" 侧重同时选择（多个）部门和人员。项目中根据业务需求自行选择。


## 安装命令
```sh
npm run widgets org-member-picker
```
执行命令后，工具生成在项目的 **`".my/widgets/org-member-picker"`** 路径下；

> 生成文件目录如下：
>
> -   **`org-tree.vue`** （部门树组件）
> -   **`person-list.vue`** （人员列表组件）
> -   **`index.vue`** 


## 代码示例

### 基础用法
常规使用组件
:::demo

```html
<template>
  <div >
    <div>
      是否多选：<el-switch v-model="multiPersonoSel" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
      是否自动加载人员：<el-switch v-model="isAutoLoad" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
      开启单位选择：<el-switch v-model="isOrgSelect" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
      显示选择内容：<el-switch v-model="showResult" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
      显示提交按钮：<el-switch v-model="showSubmit" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
    </div> 
    <div v-show="!showSubmit">
      <el-button type="primary" size="small" @click="getSelData">自行获取数据</el-button>
    </div>     
    <div style="width:680px; height:480px"> 
      <org-member-picker 
        ref="orgMemberPicker"

        :is-multi-person="multiPersonoSel"
        :auto-load="isAutoLoad"
        :org-select="isOrgSelect"
        :is-show-result="showResult"
        :is-show-submit="showSubmit"

        :load-org="getOrgData" 
        :person-load="personLoadFn"  
        :list-column="personCol" 
        
        :tree-props="{
          'filterNodeMethod': filterNode
        }"
        :table-props="{'page-size': 20}"

        @on-submit="handleSubmit" 
      ></org-member-picker>
    </div> 
  </div>
</template>
<script>
import Mock from 'mockjs'
import OrgMemberPicker from '$ui/widgets/org-member-picker'
// import axios from 'axios'
import CityData from '$docs/data/CITY.json'
import {create as createTree} from '$ui/utils/tree'
export default {
  components: {OrgMemberPicker},
  props: {
  },
  data() {
    return {
      multiPersonoSel: true, // 人员是否多选
      isAutoLoad: false, // 是否默认加载人员
      isOrgSelect: false,
      showResult: true,
      showSubmit: true,
      
      personCol: [
        { prop: 'name', label: '姓名' },
        // { prop: 'id', label: '身份证' },
        { prop: 'department', label: '单位' }
      ]
    }
  },
  computed: {
  },
  methods: { 
    getOrgData() {  
      return new Promise((resolve) => {
        const tree = createTree(CityData.data, '100000') // 100000 
        resolve(tree)
      })
    },
     
    personLoadFn(page, pageSize, deptData, query) {
      return new Promise((resolve, reject) => {
        console.log(page, pageSize, deptData, query)
        setTimeout(() => {
          const data = Mock.mock({
            [`list|${pageSize}`]: [
              {
                id: '@id',
                name: query ? `${query} @cname` : '@cname',
                'age|10-100': 18,
                department: deptData ? deptData.label + ' ' + '@ctitle' : '@ctitle'
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
    handleSubmit(person, depts) {
      // console.log(person, depts, '======')
      const deptsData = depts.map((item) => {
        delete item.children
        return item
      })
      this.$alert(JSON.stringify({person: person, depts: deptsData}))
    },
    getSelData() {
      const person = this.$refs.orgMemberPicker.getSelPersons()
      const depts = this.$refs.orgMemberPicker.getSelDepts()
      const deptsData = depts.map((item) => {
        delete item.children
        return item
      })
      this.$alert(JSON.stringify({person: person, depts: deptsData}))
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
```html
:::

### 部门树懒加载与远程查询
懒加载数据 和 远程查询部门， 使用 远程查询 需要传参“remote-tree-filter="true"”
:::demo

```html
<template>
  <div>
    
    <div style="width:680px; height:480px; ">
      
      <org-member-picker 
        ref="orgMemberPicker"

        :lazy-load-org="lazyLoadNode"
        :remote-tree-filter="true"
        @on-remoteQueryChange="remoteQueryChangeHandle"
        @on-remoteQueryFilter="remoteQueryFilterHandle"

        :person-load="personLoadFn"  
        :list-column="personCol"

        :org-select="true"
        :is-multi-person="true"
 
        :table-props="{'page-size': 20}"
        @on-submit="handleSubmit"
        
      ></org-member-picker> 
    </div> 
  </div>
</template>
<script>
import Mock from 'mockjs'
import OrgMemberPicker from '$ui/widgets/org-member-picker'
// import axios from 'axios'
// import {create as createTree} from '$ui/utils/tree'
export default {
  components: {OrgMemberPicker},
  props: {
  },
  data() {
    return {
      selectItems: [],
      personCol: [
        { prop: 'name', label: '姓名' },
        // { prop: 'id', label: '身份证' },
        { prop: 'department', label: '单位' }
      ]
    }
  },
  computed: {
  },
  methods: {
    // 懒加载树节点函数
    lazyLoadNode(node, resolve) {
      if (node.level === 0) {
        return resolve([{ label: 'region', id: 'region'}]);
      }
      if (node.level > 4) return resolve([]);

      setTimeout(() => {
        const num = Math.random()
        const data = [{
          label: `leaf_${num}`,
          id: `leaf_${num}`,
          leaf: true
        }, {
          label: `zone_${num}`
        }];

        resolve(data);
      }, 500);
    },
    // 树节点远程查询 关键字 变化事件
    remoteQueryChangeHandle(query) {
      console.log(query)
      if (!query) { // 若查询关键字为空
        // 调用 部门树组件中的 "refreshTree()" 还原会默认树节点
        this.$refs.orgMemberPicker.$refs.orgTree.refreshTree()
      }
    },
    // 树节点远程查询 关键字 提交事件
    remoteQueryFilterHandle(query) {
      if (!query) return
      // 需要手动修改 部门树 组件内的 treeData 数据
      this.$refs.orgMemberPicker.$refs.orgTree.treeData = [
        { label: 'region1', id: 'region1'},
        { label: 'region2', id: 'region2'},
        { label: 'region3', id: 'region3'}
      ]
    },
    personLoadFn(page, pageSize, deptData, query) {
      return new Promise((resolve, reject) => {
        console.log(page, pageSize, deptData, query)
        setTimeout(() => {
          const data = Mock.mock({
            [`list|${pageSize}`]: [
              {
                id: '@id',
                name: query ? `${query} @cname` : '@cname',
                'age|10-100': 18,
                department: deptData ? deptData.label + ' ' + '@ctitle' : '@ctitle'
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
    handleSubmit(person, depts) {
      const deptsData = depts.map((item) => {
        delete item.children
        return item
      })
      this.$alert(JSON.stringify({person: person, depts: deptsData}))
    } 
  } 
}
</script>
<style lang="scss" scoped>
</style>
```html
:::


## 属性参数
### 整体参数
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| selDeptShowMax | 最大显示选中部门数（仅限制显示，非控制选择数量） | Number | - | 5 |
| selPersonShowMax | 最大显示选中人数（仅限制显示，非控制选择数量） | Number | - | 5 |
| isShowResult | 是否显示结果区域 | Boolean | - | true | 
| isShowSubmit | 是否显示确认取消按钮 | Boolean | - | true |  
  
### 部门树专属参数
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| orgPropMap | 部门数据字段映射 | Object | - | { label: 'label', id: 'id', children: 'children', parentId: 'parentId' } |
| loadOrg | 异步获取初始部门树的函数，返回 输出组织架构树 的 Promise对象 | Function | - | - |
| lazyLoadOrg | 懒加载获取部门数据(见el-tree用法) | Function | - | - |
| orgSelect | 是否选择部门（多选） | Boolean | - | false |
| treeProps | 树组件传参， 其中 lazy, data, load 这几个参数在此定义不起作用。 | Object | - | {} |  
| remoteTreeFilter | 开启远程查询部门功能 | Boolean | - | false |  
 
### 人员列表专属参数
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| personPropMap | 人员数据字段映射 | Object | - | { name: 'name', cardNum: 'cardNum', dept: 'dept', id: 'id' } |
| isMultiPerson | 人员是否多选 | Boolean | - | true | 
| autoLoad | 组件初始化是否自动加载人员 | Boolean | - | false | 
| tableProps | 表格组件其他传参, 其中 loader, columns,size, fit, auto 在此设置不起作用 | Object | - | - |
| personLoad | 人员加载函数 | Function | - | - |
| listColumn | 人员显示列表 | Array | - | [ { prop: 'name', label: '姓名' }, { prop: 'cardNum', label: '身份证' }, { prop: 'dept', label: '单位' } ] |

## 组件Method
| 参数      | 说明    |  参数      | 输出       |
|---------- |-------- |---------- |------------- |
| getSelPersons | 获取选中人员 | - | [] |
| getSelDepts | 获取选中部门 | - | [] |

## 组件Event
| 参数      | 说明    |  传参      | 
|---------- |-------- |---------- |
| on-submit | 点击提交按钮 获取当前人员和部门 | - | 
| on-cancel | 获取选中部门 | - | [] |
| on-remoteQueryChange | 远程树节点查询关键字变化事件 | - | - |
| on-remoteQueryFilter | 远程树节点查询关键字提交事件 | - | - | 