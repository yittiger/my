<template>
  <div style="min-height: 100%" v-loading="!options.length">
    <my-form   @submit="handleSubmit"  v-if="options.length" >
      <my-tree-select name="tree"
                      label="树形数据1" 
                      :options="options" 
                      :props="{ multiple: true, collapseTags: false, useOriginOpts: true}"></my-tree-select> 
      <my-cascader name="cascader" label="树形数据2" :options="options" :use-origin-opts="true" :props="{ props: {multiple: true}, clearable: true}"></my-cascader>
    </my-form>
    <el-button type="primary" @click="open" :loading="!options.length">打开弹窗</el-button>
    <my-dialog :visible.sync="visible" target="body" title="表单" width="60%" draggable resizable :footer="false" @close="close">
      <my-form footer-align="right"
               label-position="top"
               :on-submit="handleSubmitDialog" 
               :model="dialogModel" 
              >
        <my-input name="test" label="test"></my-input>
         
        <my-tree-select name="tree"
                      label="树形数据1" 
                      :options="treeOpts" 
                      :props="{ multiple: true, collapseTags: false, useOriginOpts: true}"  ></my-tree-select> 
                      
      <my-cascader name="cascader" label="树形数据2" :options="treeOpts" :use-origin-opts="true" :props="{ props: {multiple: true}, clearable: true}"></my-cascader>
      </my-form>
    </my-dialog>  
  </div>
</template>
<style lang="scss" scoped>
</style>
<script>
import axios from 'axios'
import {create as createTree} from '$ui/utils/tree'
export default {
  mixins: [],
  components: {},
  props: {
  },
  data() {
    return {
      options: [], // treeOpts,
      treeOpts: [],
      visible: false,
      
      dialogModel: {
        tree: ['440100090100'],
        cascader: [['440100020000', '440100020200', '440100020202']]
      }
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
      setTimeout(() => {
        this.treeOpts = this.options
      }, 300)
    },
    close() {
      this.treeOpts = []
    }
  },
  created() {
    axios({
      url: './data/DEPT.json',
      method: 'get'
    }).then((res) => {
      this.options = createTree(res.data.data, '440100000000')
      console.log(this.options)
    })
  },
  mounted() {}
}
</script>