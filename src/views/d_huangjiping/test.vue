<template>
  <my-form :model="model" @submit="handleSubmit">
    <my-tree-select name="tree" label="下拉树" :options="options"></my-tree-select>
  </my-form>
</template>

<script>
  import tree from '@/assets/data/tree.json'

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
    }
  }
</script>
