<template>
  <div >
    <el-button size="mini" type="primary" @click="visible = true">select</el-button>
    <!-- <div v-show="selectPersons.length">
      选择人员： <el-tag v-for="item in selectPersons" :key="item.id">{{item.name}}</el-tag>
    </div>   -->
    <!-- <div v-show="selectDepts.length">
      选择部门： <el-tag v-for="item in selectDepts" :key="item.id">{{item.label}}</el-tag>
    </div> -->

    <dw-person-picker :field-props-map="{name: 'name', id: 'id'}" type="dialog" :submit-btn="true" :multiple="true" :load-org="createOrgTree" :load-user="loadUserByOrg" :search-person="searchPersonByText" v-model="selectPersons"> 
      <template v-slot:field="{selItems}">
        <div style="border:1px solid; height: 40px"> 
          <el-tag type="warning" v-for="(item, index) in selItems" :key="index">{{item.name}}</el-tag>
        </div>
      </template>
    </dw-person-picker>
    <br/>
    <hr>
    <br/>
    <div> 
      <my-list :data="selectPersons" border split stripe>
        <template v-slot="{item}">
          <div class="item">
            <my-key-val-list :column="column" :data="item" border> </my-key-val-list>
          </div>
        </template>  
      </my-list>

    </div>
    <!-- <my-tag-input  label="人员" v-model="persons" readonly ></my-tag-input> -->

    <!-- <my-dialog :visible.sync="visible" target="body" title="标题文字" width="700px" height="500px" :footer="true" @submit="getResult">
      <dw-person-picker ref="picker" :submit-btn="false" :show-org-list="true" @submit="showResult"></dw-person-picker>
    </my-dialog>  -->
  </div>
</template>
<style scoped lang="scss">

</style>
<script>
import DwPersonPicker from '@/components/dw-person-picker' // 此处为文档引用，正式使用请在项目中组件路径中引入
import Mock from 'mockjs'
// import CityData from '$docs/data/CITY.json'
import {create as createTree} from '$ui/utils/tree'
import axios from 'axios'
export default {
  components: {
    DwPersonPicker
  },
  data() {
    return {
      visible: false,
      selectPersons: [],
      selectDepts: [],
      persons: [],
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
     
      /*
      return new Promise((resolve) => {
        const tree = [] //  createTree(CityData.data, '100000') // 100000
        // console.log(tree)
        resolve(tree)
      })
      */
      return axios({
        method: 'get',
        url: '/data/CITY.json'
      }).then((res) => { 
        const tree = createTree(res.data.data, '100000')
        return Promise.resolve(tree)
      })
       
    },
    loadUserByOrg(org) {
      // console.log(org)
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
  },
  created() {
    
  }
}
</script>