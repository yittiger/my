<template>
  <div class="person-list-warp">
    <div class="input-warp" >
      <el-input size="small" placeholder="请输入内容" v-model="query"  > 
        <el-button slot="append" icon="el-icon-search" @click="searchHandle"></el-button>
      </el-input>
    </div>
    <my-header v-show="selDeptLabel" :title="selDeptLabel" icon="el-icon-menu" size="small"  style="margin-bottom: 5px">
      <template v-slot:handle>
        <el-button type="text" size="small" @click="titleClick">重选部门</el-button>
      </template>
    </my-header>
    <div class="list-warp">
      <div class="inner">
        <my-table ref="list" v-bind="$attrs" :columns="columns" :loader="listLoader" :fit="true" :auto="autoLoad">
          <template v-slot:ctrl="{row}">
            <el-button type="text" 
            @click="personSelHandle(row)"
            :disabled="defindSelDisable(row)"
            >选择</el-button>
          </template>
        </my-table>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.person-list-warp{
  height: 100%;
  display: flex;
  flex-flow: column;
  .input-warp{
    flex: 0 0 auto;
    margin-bottom: 5px;
    padding: 0 5px 0 10px;
  }
  .list-warp{
    flex:1;
    position: relative; 
    .inner{
      position: absolute;
      width: 100%;
      top: 0;
      bottom: 0;
      overflow: auto; 
      padding: 0 5px 0 10px;
    }
  }
}
</style>
<script>
export default {
  mixins: [],
  components: {},
  props: {
    selDeptLabel: String, 
    deptData: {
      type: Object
    },
    autoLoad: {
      type: Boolean,
      default: false
    },
    personLoad: {
      type: Function
    },
    listColumn: {
      type: Array,
      default: () => {
        return [
          { prop: 'name', label: '姓名' },
          { prop: 'cardNum', label: '身份证' },
          { prop: 'dept', label: '单位' }
        ]
      }
    },
    personPropMap: {
      type: Object
    },
    isMultiPerson: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      query: '',
      searchQuery: '',
      currentPage: 1,
      selectPersons: []
    }
  },
  computed: {
    columns() {
      return [...this.listColumn, {prop: 'ctrl', label: '操作', fixed: 'right', width: 80}]
    }
  },
  watch: {
     
  },
  methods: {
    searchHandle() {
      this.searchQuery = this.query
      this.$refs.list.refresh(1)
    },
    listLoader(page, pageSize) {
      this.currentPage = page
      if (!this.personLoad) {
        return Promise.reslove({
          total: 0,
          list: []
        })
      } else {
        return this.personLoad(page, pageSize, this.deptData, this.searchQuery).then((res) => {
          return Promise.resolve({
            total: res.total,
            list: res.list
          })
        })
      } 
    },
    titleClick() {
      this.$emit('on-clearSelDept')
    },
    personSelHandle(row) {
      if (this.isMultiPerson) {
        this.selectPersons = this.selectPersons.concat([row])
      } else {
        this.selectPersons = [row]  
      } 
       this.$emit('on-personSel', this.selectPersons)
      
    },
    defindSelDisable(row) {
      return this.selectPersons.findIndex((item) => {
        return item[this.personPropMap.id] === row[this.personPropMap.id]
      }) >= 0
    }
  },
  created() {},
  mounted() {}
}
</script>