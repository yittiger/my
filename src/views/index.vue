<template>
<div style="height: 400px; width: 500px; border: 1px solid">
  <my-form :model="model" @submit="handleSubmit">
    <my-tree-select name="tree" label="下拉树" :options="options" :props="{multiple: false, collapseTags: true, clearable: true}"></my-tree-select>
  </my-form>
</div>
  
</template>
<script>
import tree from '../../docs/.vuepress/data/tree.json'
import {create as createTree} from '$ui/utils/tree'
export default {
  data() {
    return {
      options: tree,
      model: {
        tree: 'yizhi'
      }
    }
  },
  methods: {
    handleSubmit(model) {
      alert(`submit: ${JSON.stringify(model)}`)
    }
  },
  mounted() {
    console.log(this.options)
    console.log(createTree(tree))
  }
}
</script>