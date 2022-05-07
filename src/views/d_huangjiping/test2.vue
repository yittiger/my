<template>
  <my-form :model="model" @submit="handleSubmit">
    <my-tree-select name="tree1" label="下拉树单选" :options="options" :props="{multiple: false, collapseTags: false, showFull: true}"></my-tree-select>
    <my-tree-select name="tree2" label="下拉树多选" :options="options" :props="{multiple: true, collapseTags: false, showFull: true}"></my-tree-select> 
  </my-form>
</template>

<script>
  import tree from '@/assets/data/tree.json'

  export default {
    data() {
      return {
        options: tree,
        model: {
          tree1: 'yizhi',
          tree2: ['yizhi']
        }
      }
    },
    methods: {
      handleSubmit(model) {
        alert(`submit: ${JSON.stringify(model)}`)
      } 
    }
  }
</script>
