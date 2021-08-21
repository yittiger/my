<template>
<div>
  <my-form @submit="handleSubmit" > 
    <my-tree-select name="tree" label="下拉树" :options="cityOpts" :props="{'multiple': true, 'clearable': true, 'only-leaf': false, 'useOriginOpts': true, tree: {'checkStrictly': true}}"  >
    </my-tree-select>
    <my-cascader name="city1" :options="cityOpts" root="100000" :use-origin-opts="true"  :props="{'clearable': true, 'props': { 'checkStrictly': true } }"></my-cascader>
    <my-cascader name="city2" :options="cityOpts" root="100000"  :use-origin-opts="true"  ></my-cascader> 
    <my-cascader name="city3" :options="cityOpts" root="100000"  :use-origin-opts="true"  ></my-cascader> 
    <my-cascader name="dept" :options="deptOpts" root="0" :use-origin-opts="true"  ></my-cascader>
    <my-cascader name="dept2" :options="deptOpts" root="0" :use-origin-opts="true"  ></my-cascader>
    <my-cascader name="dept3" :options="deptOpts" root="0" :use-origin-opts="true"  ></my-cascader>
    <my-cascader name="dept4" :options="deptOpts" root="0" :use-origin-opts="true"  ></my-cascader>
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
  mounted() {
    setTimeout(() => {
      this.changeCityOpts()
      this.changeDeptOpts()
    }, 200) 
     
  }
}
</script>
<style lang="scss" scoped>
</style>