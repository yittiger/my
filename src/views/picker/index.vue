<template>
  <div>
    <!-- <select-field ref="field" v-model="selectItems" @on-confirm="confirmClickHandle"> 
      <ul slot="picker">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
    </select-field>
    <div v-for="(item, index) in selectItems" :key="index">{{item}}</div> -->
    <div style="width:580px; height:480px;border: 1px solid">
      <org-member-picker 
        :load-org="getOrgData" 
        :person-load="personLoadFn"  
        :list-column="personCol"
        :org-select="false"
      ></org-member-picker>
    </div> 
  </div>
</template>
<script>
import Mock from 'mockjs'
import OrgMemberPicker from '@/components/org-member-picker'
import axios from 'axios'
import {create as createTree} from '$ui/utils/tree'
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
    confirmClickHandle() {
      this.selectItems = this.selectItems.concat({name: 'aaa', id: 'aaa'})
      this.$refs.field.closePicker()
    },
    getOrgData() { 
      return axios.get('/data/CITY.json').then((res) => {
        const list = createTree(res.data.data, '100000') 
        return Promise.resolve(list)
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
    }
  },
  created() {
  },
  mounted() {
    this.getOrgData()
  }
}
</script>
<style lang="scss" scoped>
</style>