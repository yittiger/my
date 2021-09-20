<template>
  <div style="height: 100%"> 
    <el-button type="primary" @click="open1">Primary</el-button>
    <el-button type="primary" @click="open2">Light</el-button>
    <el-button type="primary" @click="open3">Dark</el-button>

    <el-table
      :data="tableData"
      style="width: 100%">
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

    <my-table :columns="columns" :data="list"> 
      <!-- <el-table-column slot="other-cols" label="其他" prop="other" >  
        <el-table-column  v-for="subCol in [
            { label: '其他1', prop: 'other1' },
            { label: '其他2', prop: 'other2' }
            ]"
            :key="subCol.prop"
            :prop="subCol.prop"
            :label="subCol.label"
            >
            <template v-slot="scope">
              {{scope.row.other[subCol.prop]}}
            </template>
          </el-table-column>
      </el-table-column>  -->
    </my-table>

    <my-dialog :visible.sync="visible1"
                target="body"
                theme="primary"
                icon="el-icon-menu"
                title="标题文字"
                draggable
                resizable
                maximizable
                minimizable
                width="400px" 
                height="200px">
      这里是内容
    </my-dialog>
    <my-dialog :visible.sync="visible2"
                theme="light"
                target="body"
                icon="el-icon-menu"
                title="标题文字"
                draggable
                resizable
                maximizable
                minimizable
                width="400px" 
                height="200px">
      这里是内容
    </my-dialog>
    <my-dialog :visible.sync="visible3"
                theme="dark"
                target="body"
                icon="el-icon-menu"
                title="标题文字"
                draggable
                resizable
                maximizable
                minimizable
                width="400px" 
                height="200px">
      这里是内容
    </my-dialog>
  </div>
</template>
<style lang="scss" scoped>
</style>
<script>
//  import Mock from 'mockjs'
export default {
  data() {
    return {
      visible1: false,
      visible2: false,
      visible3: false,
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
      columns: [
        { type: 'index', label: '#' },
        { label: '姓名', prop: 'name'},
        { label: '身份证', prop: 'id'},
        { label: '年龄', prop: 'age'},
        { label: '地址', prop: 'address'},
        { label: '日期', prop: 'date'}
        // { 
        //   label: '其他', 
        //   prop: 'other', 
        //   children: [
        //     { label: '其他1', prop: 'other1' },
        //     { label: '其他2', prop: 'other2' }
        //   ]
        // }
      ],
      list: [
        {
          name: 'a1',
          id: 'a2',
          age: 'a3',
          address: 'a4',
          date: 'a5',
          other: {
            other1: 'a11', other2: 'a21'
          }
            
           
        }
      ]
    }
  },
  methods: {
    test(scope) {
       console.log(scope)
    },
    open1() {
      this.visible1 = true
    },
    open2() {
      this.visible2 = true
    },
    open3() {
      this.visible3 = true
    } 
  },
  created() {
     
  }
}
</script>