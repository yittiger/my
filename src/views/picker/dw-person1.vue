<template>
  <div >
    <h3>基础用法</h3>
    <dw-person-picker key="solo" :field-props-map="{name: 'name', id: 'id'}" type="dialog"  :multiple="true" :load-org="createOrgTree" :load-user="loadUserByOrg" :search-person="searchPersonByText" v-model="selectPersons" :props="{collapseTags:true}">  
    </dw-person-picker>  
    <hr> 
    <div> 
      <my-list :data="selectPersons" border split stripe>
        <template v-slot="{item}">
          <div class="item">
            <my-key-val-list :column="column" :data="item" border> </my-key-val-list>
          </div>
        </template>  
      </my-list> 
    </div>
    <hr> 
    <h3>表单用法</h3>
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
      <my-date-picker name="date" label="日期" :props="{valueFormat:'yyyy-MM-dd'}"  ></my-date-picker>
      <my-input name="title" label="标题"  ></my-input>
      <my-form-custom label="人员" name="persons" > 
        <dw-person-picker  key="form" width="100%" :field-props-map="{name: 'name', id: 'id'}" type="dialog"  :multiple="true" :load-org="createOrgTree" :load-user="loadUserByOrg" :search-person="searchPersonByText" v-model="selectPersons2" @change="pickerChange">  
        </dw-person-picker>  
       </my-form-custom>
      <my-input name="content" label="内容" width="100%" :props="{type:'textarea'}"></my-input>
    </my-form> 
    
    
    
    
    
  </div>
</template>
<style scoped lang="scss">

</style>
<script>
import DwPersonPicker from '@/components/dw-person-picker' // 此处为文档引用，正式使用请在项目中组件路径中引入
import Mock from 'mockjs' 
import {create as createTree} from '$ui/utils/tree'
import axios from 'axios'
import {cloneDeep} from '$ui/utils/util'
export default {
  components: {
    DwPersonPicker
  },
  data() {
    return {
       
      selectPersons: [], 
      selectPersons2: [], 
      column: [
        { label: '姓名', prop: 'name'},
        { label: '身份证', prop: 'id' },
        { label: '年龄', prop: 'age' },
        { label: '部门', prop: 'department' },
        { label: '其他', prop: 'other' },
        { label: '其他2', prop: 'other2' }
      ],

      rules: {
        persons: {required: true, message: '标题是必填项'}
      } 
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
      // return new Promise((resolve) => {
      //   const tree = createTree(CityData.data, '100000') // 100000
      //   console.log(tree)
      //   resolve(tree)
      // })
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
      })
      this.$refs.form.currentModel = currentModel 
    },
    handleSubmit(model) { 
      console.log(model)
    }
  },
  created() {
    
  }
}
</script>