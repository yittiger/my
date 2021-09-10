<template>
  <div style="min-height: 100%" v-loading="!options.length">
    <my-form   @submit="handleSubmit"  v-if="options.length">
      <my-tree-select name="tree"
                      label="一维数组1" 
                      :options="options" 
                      :props="{root: '100000', multiple: true, collapseTags: false, useOriginOpts: false}"></my-tree-select> 
      <my-cascader name="cascader" label="一维数组2" :options="options" root="100000" :use-origin-opts="false" :props="{ props: {multiple: true}, clearable: true}"></my-cascader>
    </my-form>

    <el-button type="primary" @click="open" :loading="!options.length">打开弹窗</el-button>
    <my-dialog :visible.sync="visible" target="body" title="表单" width="60%" draggable resizable :footer="false">
      <my-form  
               footer-align="right"
               label-position="top"
               :on-submit="handleSubmitDialog">
        <my-tree-select name="tree"
                      label="一维数组1" 
                      :options="options" 
                      :props="{root: '100000', multiple: true, collapseTags: false, useOriginOpts: false}"></my-tree-select> 
        <my-cascader name="cascader" label="一维数组2" :options="options" root="100000" :use-origin-opts="false" :props="{ props: {multiple: true}, clearable: true}"></my-cascader>
      </my-form>
    </my-dialog>  
  </div>
</template>
<style lang="scss" scoped>
</style>
<script>
import axios from 'axios'
export default {
  mixins: [],
  components: {},
  props: {
  },
  data() {
    return {
      options: [], // treeOpts,
      visible: false 
    }
  },
  computed: {
  },
  methods: {
    handleSubmit(model) {
      alert(`submit: ${JSON.stringify(model)}`)
    },
    handleSubmitDialog(model) {
      alert(`submit: ${JSON.stringify(model)}`)
    },
    open() {
        this.visible = true
      }
  },
  created() {
    axios({
      url: '/data/CITY.json',
      method: 'get'
    }).then((res) => {
      this.options = res.data.data
      console.log(this.options)
    })
  },
  mounted() {}
}
</script>