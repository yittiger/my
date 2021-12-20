<template>
  <div class="org-tree-warp">
    <div class="input-warp">
      <el-input size="small" placeholder="请输入内容" v-model="query" class="input-with-select"> 
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <div class="tree-warp">
      <div class="inner" v-loading="loading">
        <!--  :data="treeData"  -->
        <el-tree ref="tree" v-tree-connect v-bind="{...treePropsProxy}"  @node-click="handleNodeClick" @check-change="handleCheckChange"></el-tree>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.org-tree-warp{
  height: 100%;
  display: flex;
  flex-flow: column;
  .input-warp{
    flex: 0 0 auto;
    margin-bottom: 5px;
  }
  .tree-warp{
    flex:1;
    position: relative; 
    .inner{
      position: absolute;
      width: 100%;
      top: 0;
      bottom: 0;
      overflow: auto; 
    }
  }
}
</style>
<script>
import treeConnect from '$ui/directives/tree-connect'
export default {
  mixins: [],
  components: {},
  directives: {'tree-connect': treeConnect},
  props: {
    // 异步获取初始部门树的函数，返回 输出组织架构树 的 Promise对象
    loadOrg: Function,
    // 懒加载获取部门数据
    lazyLoadOrg: Function,
    // 是否选择部门
    orgSelect: {
      type: Boolean,
      default: false
    },
    orgPropMap: {
      type: Object
    },
    treeProps: {
      type: Object,
      default: () => { 
        return {
          'check-strictly': true
        } 
      }
    }
  },
  data() {
    return {
      loading: false,
      query: '',
      treeData: []
      
    }
  },
  computed: {
    treePropsProxy() { 
      const props = {
        props: this.orgPropMap,
        ...this.treeProps,
        showCheckbox: this.orgSelect
      }
      props['node-key'] = props.props.id

      if (!this.lazyLoadOrg) {
        return {
          ...props,
          data: this.treeData
        }
      } else {
        return {
          ...props,
          load: this.lazyLoadOrg,
          lazy: true
        }
      }
      
    }
  },
  methods: {
    loadOrgData() {
      return this.loadOrg().then((res) => {
        return Promise.resolve(res)
      })
    },
    init() {
      if (!this.loadOrg) {
        return
      }
      this.loading = true
      this.loadOrg().then((res) => {
        this.loading = false
        this.treeData = res 
      })  
    },
    
    handleNodeClick(data, node) {
      this.$emit('on-orgClick', data, node)
    },
    handleCheckChange(data, checked, indeterminate) { 
      const checkedDepts = this.$refs.tree.getCheckedNodes()  
      this.$emit('on-orgChecked', checkedDepts)
       
    }
  },
  created() {},
  mounted() {
    this.init() 
  }
}
</script>