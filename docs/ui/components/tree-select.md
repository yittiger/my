# TreeSelect 下拉树

文档 <api-link href="components/my-tree-select">MyTreeSelect</api-link>

## 代码示例

### 基础用法

:::demo
```html
<template>
  <my-form :model="model" @submit="handleSubmit">
    <my-tree-select name="tree" label="下拉树" :options="options"></my-tree-select>
    <my-form-custom label="">
      <el-button type="text" @click="showTree">查看tree数据格式</el-button> 
    </my-form-custom>
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
      },
      showTree() {
        console.log(tree)
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

### 展示完整选中路径
使用“showFull”参数可以在输入框中显示选中树节点的完整路径名
:::demo
```html
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
```
:::

### treeSelect性能性能测试
treeSelect组件经常需要处理大规模数据量的树节点数据, 在组件在对数据进行树状处理的时候，会导致js线程的堵塞， 最明显是 影响弹框的打开。
:::demo
```html
<template>
<div >
  <div>
    正常页面使用my-treeSelect时，不容易看出性能问题
  </div>
  <my-form :model="model" @submit="handleSubmit">
    <my-tree-select name="tree"
      label="下拉树" 
      :options="options"
      :props="{root: '100000', multiple: true, useOriginOpts: false}">
    </my-tree-select>
  </my-form> 
  <hr/>
  <div>弹窗1内的treeSelect使用未转为树状的options数据（原始一维数组），在弹窗打开时，每个treeSelect组件内部自行将数据进行转化，堵塞dialog弹窗打开</div>
  <el-button type="primary" @click="visible1 = true" >打开弹窗1</el-button>
   <hr/>
  <div>
  弹窗2内的treeSelect中的字典数据，预先转化为树形结构，避免多个treeSelect组件重复数据转换，弹窗2 打开速度比 弹窗1 快，但是如果弹窗内部 treeSelect 组件较多时，卡顿感依然明显。
  </div>
  <el-button type="primary" @click="visible2 = true" >打开弹窗2</el-button>
   <hr/>
  <div>
  最佳优化方案：弹窗3内的selectTree组件字典数据均绑定到一个空数组变量“emptyOpts”，在打<strong style="color: red">开弹窗时异步将已转化为树形结构的数据替换空数组变量</strong>, 在关闭弹窗时将“emptyOpts”还原为空数组。
  </div>
  <el-button type="primary" @click="openDialog" >打开弹窗3</el-button>
  <hr/>
  <div>以上情况在my-cascader组件可以同样处理。</div>

  <!--弹窗1-->
  <my-dialog :visible.sync="visible1" target="body" title="表单" :footer="false"  width="60%" height="450px" >
    <my-form :on-submit="handleSubmitDialog" :model="dialogModel1" >
      <!--treeSelect内部自行组装树状字典数据-->
      <my-tree-select name="tree"
        label="树形数据1" 
        :options="options"  
        :props="{root: '100000', multiple: true, useOriginOpts: false}""  
      >
      </my-tree-select> 
      <my-tree-select name="tree2"
        label="树形数据2" 
        :options="options"  
        :props="{root: '100000', multiple: true, useOriginOpts: false}"  
      ></my-tree-select> 
      <my-tree-select name="tree3"
        label="树形数据3" 
        :options="options"  
        :props="{root: '100000', multiple: true, useOriginOpts: false}"  
      ></my-tree-select>
    </my-form>
  </my-dialog>  

  <!--弹窗2-->
  <my-dialog :visible.sync="visible2" target="body" title="表单" :footer="false"  width="60%" height="450px" >
    <my-form :on-submit="handleSubmitDialog" :model="dialogModel2" >
      <!--treeSelect使用现成的树状字典数据-->
      <my-tree-select name="tree"
        label="树形数据1" 
        :options="treeOpts"  
        :props="{ multiple: true, collapseTags: false, useOriginOpts: true}"  
      >
      </my-tree-select> 
      <my-tree-select name="tree2"
        label="树形数据2" 
        :options="treeOpts"  
        :props="{ multiple: true, collapseTags: false, useOriginOpts: true}"  
      ></my-tree-select> 
      <my-tree-select name="tree3"
        label="树形数据3" 
        :options="treeOpts"  
        :props="{ multiple: true, collapseTags: false, useOriginOpts: true}"  
      ></my-tree-select>
    </my-form>
  </my-dialog> 

  <!--弹窗3-->
  <my-dialog :visible.sync="visible3" target="body" title="表单" :footer="false"  width="60%" height="450px"  @close="closeDialog">
    <my-form :on-submit="handleSubmitDialog" :model="dialogModel3" >
      <!--treeSelect使用现成的树状字典数据-->
      <my-tree-select name="tree"
        label="树形数据1" 
        :options="emptyOpts"  
        :props="{ multiple: true, collapseTags: false, useOriginOpts: true}"  
      >
      </my-tree-select> 
      <my-tree-select name="tree2"
        label="树形数据2" 
        :options="emptyOpts"  
        :props="{ multiple: true, collapseTags: false, useOriginOpts: true}"  
      ></my-tree-select> 
      <my-tree-select name="tree3"
        label="树形数据3" 
        :options="emptyOpts"  
        :props="{ multiple: true, collapseTags: false, useOriginOpts: true}"  
      ></my-tree-select>
    </my-form>
  </my-dialog> 
</div>
</template>

<script>
  import CityData from '$docs/data/CITY.json'
  import {create as createTree} from '$ui/utils/tree' 
  export default {
    data() {
      return {
        visible1: false,
        visible2: false,
        visible3: false,
        options: [], // 原始一维数组
        treeOpts: [], // 树形数组
        emptyOpts: [], // 空数组
        model: {
          tree: []
        },
        dialogModel1: {
          tree: ['110101'],
          tree2: ['130102', '130104', '440103']
        },
        dialogModel2: {
          tree: ['110101'],
          tree2: ['130102', '130104', '440103']
        },
        dialogModel3: {
          tree: ['110101'],
          tree2: ['130102', '130104', '440103']
        }
      }
    },
    methods: {
      handleSubmit(model) {
        alert(`submit: ${JSON.stringify(model)}`)
      },
      handleSubmitDialog(model) {
        alert(`submit: ${JSON.stringify(model)}`)
      },
      openDialog() {
        this.visible3 = true
        setTimeout(() => {
          this.emptyOpts = this.treeOpts
        }, 300)
      },
      closeDialog() {
        this.emptyOpts = []
      }
    },
    mounted() {
      this.options = CityData.data
      this.treeOpts = createTree(CityData.data, '100000')
    }
  }
</script>

```
:::