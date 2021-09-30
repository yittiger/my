<template>
<div>
  <el-table
    :data="tableData"
    border
    style="width: 100%" :stripe="true">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>

  <my-filter label-width="80px" collapsible @submit="handleSubmit" :is-flex="true"  >
    <!-- :footer-block="false" :footer-float="true" -->
    <my-input label="标题" name="title" disabled></my-input>
    <my-input name="keyword" label="关键字" placeholder="请输入关键字"></my-input>
    <my-input name="keyword2" label="关键字2" placeholder="请输入关键字"></my-input>
    <my-select name="category" label="类别" :options="categories" collapsible></my-select>
    
    <my-range label="范围" mode="date" name="range" collapsible></my-range>
  </my-filter>
   <el-tag type="info">标签一</el-tag>
</div>
    
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],

        categories: [
          {label: '选项一', value: 1},
          {label: '选项二', value: 2},
          {label: '选项三', value: 3}
        ],
        model: {}
      }
    },
    methods: {
      handleSubmit(model) {
        alert(`submit: ${JSON.stringify(model)}`)
      }
    }
  }
</script>