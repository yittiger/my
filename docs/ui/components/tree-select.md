# TreeSelect 下拉树

文档 <api-link href="components/my-tree-select">MyTreeSelect</api-link>

## 代码示例

### 基础用法

:::demo
```html
<template>
  <my-form :model="model" @submit="handleSubmit">
    <my-tree-select name="tree" label="下拉树" :options="options"></my-tree-select>
  </my-form>
</template>

<script>
  import tree from '$docs/data/tree.json'

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

```
:::


### 多选

:::demo
```html
<template>
  <my-form :model="model" @submit="handleSubmit">
    <my-tree-select name="tree"
                    label="下拉树"
                    :options="options"
                    :props="{multiple: true, collapseTags: true}"></my-tree-select>
  </my-form>
</template>

<script>
  import tree from '$docs/data/tree.json'
  
  export default {
    data() {
      return {
        options: tree,
        model: {
          tree: ['layout', 'color']
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

```
:::


### 指定根节点

:::demo
```html
<template>
  <my-form :model="model" @submit="handleSubmit">
    <my-tree-select name="tree"
      label="组件下拉树"
      :options="options"
      :props="{multiple: true, collapseTags: true, root: 'zujian'}"
    ></my-tree-select>
    <my-tree-select name="tree2"
      label="组件下拉树(保留根节点选项)"
      :options="options"
      :props="{multiple: true, collapseTags: false, root: 'zujian', withRoot: true}"
    ></my-tree-select>
  </my-form>
</template>

<script>
  import tree from '$docs/data/tree.json'
  
  export default {
    data() {
      return {
        options: tree,
        model: {
          tree: [],
          tree2: []
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

```
:::

### 仅允许选择最底层节点

:::demo
```html
<template>
  <my-form :model="model" @submit="handleSubmit">
    <my-tree-select name="tree"
                    label="下拉树"
                    :options="options"
                    :props="{multiple: true, collapseTags: false, onlyLeaf: true}"></my-tree-select>
  </my-form>
</template>

<script>
  import tree from '$docs/data/tree.json'
  
  export default {
    data() {
      return {
        options: tree,
        model: {
          tree: []
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

```
:::


### 自定义树菜单
树菜单默认传入一维数组由组件内部转化为树，如果当已经获取树状菜单数据时，组件也支持直接使用无需再转化
:::demo
```html
<template>
  <my-form :model="model" @submit="handleSubmit">
    <my-tree-select name="tree"
                    label="下拉树"
                    :options="options"
                    :props="{multiple: true, collapseTags: false, useOriginOpts: true}"></my-tree-select>
  </my-form>
</template>

<script>
  import tree from '$docs/data/tree.json'
  import {create as createTree} from '$ui/utils/tree'
  const treeOpts = createTree(tree)
  export default {
    data() {
      return {
        options: treeOpts,
        model: {
          tree: []
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

```
:::