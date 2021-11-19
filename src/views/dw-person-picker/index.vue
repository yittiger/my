<template>
  <div>
   <el-button size="mini" type="primary" @click="visible = true">select</el-button>

   <my-dialog :visible.sync="visible" target="body" title="标题文字" width="700px" height="500px" :footer="true" @submit="getResult">
      <dw-person-picker ref="picker" :submit-btn="false" :show-org-list="true" :multiple="true" :load-org="createOrgTree" :load-user="loadUserByOrg" :search-person="searchPersonByText" @submit="showResult"></dw-person-picker>
    </my-dialog> 
  </div>
</template>
<script>
import DwPersonPicker from '@/components/dw-person-picker';
import axios from 'axios'
import {create} from '$ui/utils/tree'
import Mock from 'mockjs'
/*
  submitBtn 控制是否显示提交、取消按钮 ，默认true
  personPropMap：接口返回人员列表字段映射
  multiple: 是否多选
  showOrgList: 是否结合部门进行查询（显示右侧部门列表）
  searchPerson: 通过搜索异步查询人员函数，必传，参数keyword, 返回 输出人员列表的 Promise对象 
  loadOrg: 异步获取初始部门树的函数，必传，返回 输出组织架构树 的 Promise对象
  loadOrgChildren: 异步获取各个子部门树的函数（用于懒加载），选传，返回 输出 子级部门 的 Promise对象
  loadUser: 根据部门信息异步获取部门成员的函数，必传，返回 输出 部门成员数组 的 Promise对象,
  orgPropMap：接口返回部门数据字段映射
  */
export default {
  components: {
    DwPersonPicker
  },
  props: {
  },
  data() {
    return {
      visible: false,
      selects: [],
      treeLists: []
    }
  },
  computed: {
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
      return axios({
        url: '/data/DEPT.json',
        method: 'get'
      }).then((res) => { 
        // this.treeLists = res.data.data
        const tree = create(res.data.data, '')
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
      console.log(targets, dept)
    },
    getResult() {
      const targets = this.$refs.picker.getSelctPersons()
      const dept = this.$refs.picker.getSelectDept()
      console.log(targets, dept)
    }
  },
  created() {
  },
  mounted() {
    
  }
}
</script>
<style lang="scss" scoped>
</style>