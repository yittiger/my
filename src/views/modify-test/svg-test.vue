<template>
  <div class="warp">
    <my-table :columns="columns" :data="list"> 
      <template v-slot:other="scope">
        <el-table-column :prop="scope.column.prop" :label="scope.column.label"> 
          <el-table-column  v-for="subCol in scope.column.children"
            :key="subCol.prop"
            :prop="subCol.prop"
            :label="subCol.label"
            >
            <!-- <template v-slot="scope">
              {{scope.$index}}
            </template> -->
          </el-table-column>
        </el-table-column>
      </template>
    </my-table> 
  </div>
</template>
<script>
// import MPopper from '@/components/m-popper'
export default {
  components: {
    // MPopper
  },
  props: {
    
  },
  data() {
    return {
      columns: [
          { type: 'index', label: '#' },
          { label: '姓名', prop: 'name'},
          { label: '身份证', prop: 'id'},
          { label: '年龄', prop: 'age'},
          
          { 
            label: '其他', 
            prop: 'other', 
            children: [
              { label: '其他1', prop: 'other1' },
              { label: '其他2', prop: 'other2' }
            ]
          },
          { label: '地址', prop: 'address'},
          { label: '日期', prop: 'date'}
      ],
      list: [
        {
          name: 'a1',
          id: 'a2',
          age: 'a3',
          address: 'a4',
          date: 'a5',
          other1: 'a11', 
          other2: 'a21'
          // other: {
          //   other1: 'a11', other2: 'a21'
          // } 
        }
      ]  
    }
  },
  computed: {
  },
  methods: {
    
  },
  created() {
  },
  mounted() {
     
     
  }
}
</script>
<style lang="scss" scoped>
.warp{
  height: 100%;
  width: 100%;
  
}


</style>

// <style lang="scss" >
//   .el-popover.el-popper.my-theme-popup{
//     background: transparent !important;
//     box-shadow: none !important;
//     border: 1px solid !important;
//     padding: 0px !important;
//     min-width: 0;
//     .popper__arrow{
//       display: none;
//     }
//   }
 
// </style>