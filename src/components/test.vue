<template>
<div>
  <my-form @submit="handleSubmit" > 
    <my-cascader name="city1" :options="cityOpts" root="100000" :use-origin-opts="true" @focus="changeCityOpts" :props="{'clearable': true, 'props': { 'checkStrictly': true } }"></my-cascader>
    <my-cascader name="city2" :options="cityOpts" root="100000"  :use-origin-opts="true" @focus="changeCityOpts"></my-cascader> 
    <my-cascader name="city3" :options="cityOpts" root="100000"  :use-origin-opts="true" @focus="changeCityOpts"></my-cascader> 
    <my-cascader name="dept" :options="deptOpts" root="0" :use-origin-opts="true" @focus="changeDeptOpts"></my-cascader>
    <my-cascader name="dept2" :options="deptOpts" root="0" :use-origin-opts="true" @focus="changeDeptOpts"></my-cascader>
    <my-cascader name="dept3" :options="deptOpts" root="0" :use-origin-opts="true" @focus="changeDeptOpts"></my-cascader>
     <my-cascader name="dept4" :options="deptOpts" root="0" :use-origin-opts="true" @focus="changeDeptOpts"></my-cascader>
  </my-form>
</div>
</template>
<script>
// import axios from 'axios'
import {create as createTree} from '$ui/utils/tree'
export default {
  components: {},
  props: {
    optMap: {
      type: Object
    }
  },
  data() {
    return {
      // optMap: null,
      deptOpts: [],
      cityOpts: []

    }
  },
  computed: {
  },
  methods: {
    handleSubmit(model) {
      console.log(model)
    },
    changeCityOpts() {
      if (!this.cityOpts.length) {
        this.cityOpts = createTree(this.optMap.city, '100000', 'id', 'parentId', false) 
      }
        
    },
    changeDeptOpts() {
      if (!this.deptOpts.length) {
        this.deptOpts = createTree(this.optMap.dept, '0', 'id', 'parentId', false)
      }
    }
  },
  created() {
    
  },
  /*
  created() {
    Promise.all([
      axios({
        url: '/data/city-json.json'
      }),
      axios({
        url: '/data/dept.json'
      })
    ]).then((res) => {
      // console.log(res, '=====')
      const city = res[0].data.data.map((item) => { 
        return {
          ...item,
          id: item.dictCode,
          parentId: item.parentCode,
          label: item.dictName,
          value: item.dictCode
        }
      })
      const dept = res[1].data.data.map((item) => { 
        return {
          ...item,
          id: item.dictCode,
          parentId: item.parentCode,
          label: item.dictName,
          value: item.dictCode
        }
      })
      this.optMap = {
        city: city,
        dept: dept
      } 
      console.log(this.optMap)
    })
  },
  */
  mounted() {
    // this.deptOpts = createTree(this.optMap.dept, '0', 'id', 'parentId', false)
    // this.cityOpts = createTree(this.optMap.city, '100000', 'id', 'parentId', false)
     
  }
}
</script>
<style lang="scss" scoped>
</style>