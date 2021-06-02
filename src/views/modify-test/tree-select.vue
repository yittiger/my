<template>
<div>
  添加 ‘only-leaf’ 配置 控制树桩选择器仅允许选择最末端节点。
  <my-form :model="model" @submit="handleSubmit">
    <my-tree-select name="tree" label="下拉树" :options="options" :props="{'multiple': true, 'clearable': true, 'only-leaf': true}">
    </my-tree-select>
  </my-form>

</div>
</template>

<script>
  import tree from '../../../docs/.vuepress/data/tree.json'

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