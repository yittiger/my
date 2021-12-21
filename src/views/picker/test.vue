<template>
  <div>
    
    <div style="width:680px; height:480px;border: 1px solid">
      <!-- remote-tree-filter
        :lazy-load-org="lazyLoadNode"
        @on-remoteQueryChange="remoteQueryChangeHandle"
        @on-remoteQueryFilter="remoteQueryFilterHandle"  -->
      <org-member-picker 
        ref="orgMemberPicker"
        
        :load-org="getOrgData"
        

        :person-load="personLoadFn"  
        :list-column="personCol"
        :org-select="true"
        :is-multi-person="true"
        :tree-props="{
          'check-strictly': true,
          'filterNodeMethod': filterNode
        }"
        :table-props="{'page-size': 20}"
        @on-submit="handleSubmit"
         
      ></org-member-picker><!--  -->
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
    
    getOrgData() { 
      return axios.get('/data/CITY.json').then((res) => {
        const list = createTree(res.data.data, '100000') 
        return Promise.resolve(list)
      })
    },
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
    remoteQueryChangeHandle(query) {
      console.log(query)
      if (!query) {
        this.$refs.orgMemberPicker.$refs.orgTree.refreshTree()
      }
    },
    remoteQueryFilterHandle(query) {
      if (!query) return
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
      console.log(person, depts, '======')
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
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