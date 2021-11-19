<template>
  <div style="width: 80%; margin: 10px auto">
    <my-key-val-list :columns="{
        xxl: 5,
        xl: 4, 
        lg: 4,
        md: 3,
        sm: 2,
        xs: 2
      }" 
      :column="column" 
      :data="data" 
    > 
      <template v-slot:titleA>
        <my-header title="标题文字A" icon="el-icon-menu" theme="border-bottom" :background="false" size="small"></my-header>
      </template> 
      <template v-slot:titleB>
        <my-header title="标题文字B" icon="el-icon-menu" theme="border-bottom" :background="false" size="small"></my-header>
      </template>
      <template v-slot:name="scope">
        <my-description border :title="scope.label" :width="100" align="right">
        <a>{{scope.value}}</a> 
        </my-description>  
      </template>
        
    </my-key-val-list>
  </div>
</template>
<style scoped lang="scss">

</style>
<script>
   
  export default {
     
    data() {
      return {
        column: [
          { label: '', prop: '', devide: 'titleA' },
          { label: '姓名', prop: 'name'},
          { label: '电话', prop: 'phone', devide: 'titleB'},
          { label: '详细地址', prop: 'address', span: 24},  
          { label: '年龄', prop: 'age'},
          { label: '日期', prop: 'date'},
          { label: '性别', prop: 'gender'}
        ],
        data: {
          name: '王菲',
          id: '23456',
          age: '21',
          address: '广东省广州市荔湾区黄沙大道西郊游泳场三号楼12345号',
          date: '19871009',
          phone: '1234',
          gender: '男'
        }
      }
    }
  }
</script>
