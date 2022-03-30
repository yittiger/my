<template>
  <div >
    <my-key-val-list  :column="column" :data="data"  :border="false" :label-width="null"> </my-key-val-list>
    <!-- <hr/>
    <el-row>
      <el-col :span="8">
        <my-description title="标题左对齐" :width="100">数据项内容</my-description>  
      </el-col>
      <el-col :span="8">
        <my-description title="标题居中" :width="100" align="center">数据项内容</my-description> 
      </el-col>
      <el-col :span="8">
        <my-description title="标题右对齐" :width="100" align="right">数据项内容</my-description> 
      </el-col>
    </el-row>
    <hr/>
      <el-row>
      <el-col :span="8">
        <my-description title="标题左对齐" :width="100" top>
          <my-title :level="3">253个</my-title>
        </my-description>  
      </el-col>
      <el-col :span="8">
        <my-description title="标题居中" :width="100" align="center" top>
        <my-title :level="3">253个</my-title>
      </my-description> 
      </el-col>
      <el-col :span="8">
        <my-description title="标题右对齐" :width="100" align="right" top>
        <my-title :level="3">253个</my-title>
        </my-description> 
      </el-col>
    </el-row> -->
  </div>
</template>
<style scoped lang="scss">

</style>
<script>
   
  export default {
     
    data() {
      return {
        column: [
          { label: '姓名', prop: 'name'},
          { label: '身份证', prop: 'id' },
          { label: '地址', prop: 'address', span: 24}, 
          { label: '电话', prop: 'phone'},
          { label: '年龄', prop: 'age'},
          { label: '日期', prop: 'date'},
          { label: '性别', prop: 'gender'}
        ],
        data: {
          name: '王菲',
          id: '23456',
          age: '21',
          address: '广东省广州市荔湾区黄沙大道西郊游泳场三号楼12345号',
          date: '',
          phone: '1234',
          gender: '男'
        }
      }
    }
  }
</script>
