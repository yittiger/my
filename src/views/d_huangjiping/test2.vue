<template>
  <div class="table-origin">
    <my-table :columns="columns"
              :loader="loader"
               toolbar
              border
              column-filter 
              :page="1"
              :page-size="5"
              size="mini" 
              ref="table"   
      >
      <template v-slot:actions>
        <el-button type="primary" size="small" @click="dialogShow = true"  >添加</el-button>   
        </template> 

        <template v-slot:action="{row, $index}">
          <el-button type="text" @click="deleteClickHandle(row, $index)">删除</el-button>
        </template>

      </my-table>

      <my-dialog :visible.sync="dialogShow" v-bind="{...dialogProps}"
        :submit-loading="submitLoading"  
      > 
      <!-- @submit="$refs.createInvestForm.$refs.form.submit()" --> 
      </my-dialog>
  </div>
</template>

<script>
import slimClue from '$my/code/mixin/slim-clue'
import clueMixinInit from '@/components/d_huangjiping/clueMixin'
const Col = [
  {
    type: 'index',
    label: '#'
  },
  {
    label: '姓名',
    prop: 'name',
    display: 'always'
  },
  {
    label: '身份证',
    prop: 'id'
  },
  {
    label: '年龄',
    prop: 'age',
    display: false
  },
  {
    label: 'email',
    prop: 'email',
    display: false
  },
  {
    label: '日期',
    prop: 'date',
    display: false
  },
  {
    label: '操作',
    type: 'action',
    prop: 'action',
    fixed: 'right',
    width: 100,
    display: 'always'
  }
]

const clueMixin = clueMixinInit({
  adapterName: 'slimClue'
})
export default {
  mixins: [slimClue, clueMixin],
  data() {
    return {
      columns: Col,
      dialogShow: false,
      dialogProps: {
        modal: true,
        target: 'body',
        title: '表单',
        width: '85%',
        height: '80%', 
        footer: true 
      },
      submitLoading: false 
    }
  },
  computed: {
    
  },
  methods: {
    loader(page, pageSize) {
      return this.adapter.fetch({
        page,
        pageSize
      }, this).then(res => { 
        return res
      })
    },
    removeClick(row, index) {
      console.log(row, index)
    } 
   
  },
  mounted() {
     
  }
}
</script>