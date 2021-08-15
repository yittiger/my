<template>
<div>
  添加 ‘only-leaf’ 配置 控制树桩选择器仅允许选择最末端节点。
  <my-form :model="model" @submit="handleSubmit">
    <my-tree-select name="tree" label="下拉树" :options="options2" :props="{'multiple': true, 'clearable': true, 'only-leaf': false, 'useOriginOpts': true, tree: {'checkStrictly': true}}">
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
        options2: [
          {
            id: 'daohang',
            parentId: '',
            label: '导航',
            value: 'daohang',
            children: [
              {
                id: 'cexiangdaohang2',
                parentId: 'daohang',
                label: '侧向导航2',
                value: 'cexiangdaohang2'
              } 
            ]
          },
          {
            id: 'cexiangdaohang',
            parentId: '',
            label: '侧向导航',
            value: 'cexiangdaohang'
          } 
        ],
        model: {
          tree: ''
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