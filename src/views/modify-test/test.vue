<template>
  <div>
     <my-tree-select name="tree"
                    label="下拉树"
                    :options="options"
                    :props="{multiple: true, collapseTags: false, root: '0', onlyLeaf: true}"></my-tree-select>
    <el-button @click="test"> test </el-button>
     <el-tree ref="tree" :data="treeOpts" :props="defaultProps" @node-click="handleNodeClick" show-checkbox></el-tree>


    

             
  </div>
</template>
<script>
import axios from 'axios'
import {create} from '$ui/utils/tree'
export default {
  components: {},
  props: {
  },
  data() {
    return {
      data: null,
      options: [],
      treeOpts: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  computed: {
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
    test() {
      const checkNodes = this.$refs.tree.getCheckedNodes()
      const relateNodes = this.$refs.tree.getHalfCheckedNodes()
      console.log(checkNodes, relateNodes)
    }
  },
  created() {
    axios({
      url: '/data/prim.json'
    }).then((res) => {
      // console.log(res.data)
      this.data = res.data
      // console.log(create(this.data.allMenuPerms, '0'))
      const list = this.data.allMenuPerms.map((item) => {
        return {
          ...item,
          label: item.name,
          value: item.id
        }
      })
      this.options = list
      this.treeOpts = create(list, '0') // (this.options)
    })
  },
  mounted() {
  }
}
</script>
<style lang="scss" scoped>
</style>