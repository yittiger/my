<template>
  <div >
    <my-key-val-list :column="column" :data="data" border>
      <template v-slot:name="scope">
        <my-description border :title="scope.label" :width="100" align="right">
        <a>{{scope.value}}</a> 
        </my-description>  
      </template>
      <template v-slot:address2="scope">
        <my-description border :title="scope.label" :width="100" align="right">
          <div>
            <my-paragraph ellipsis tooltip>{{scope.value}}</my-paragraph> 
          </div>
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
          { label: '姓名', prop: 'name'},
          { label: '身份证', prop: 'id' },
          { label: '地址', prop: 'address', span: 24}, 
          { label: '地址2', prop: 'address2', span: 24}, 
          { label: '电话', prop: 'phone'},
          { label: '年龄', prop: 'age'},
          { label: '日期', prop: 'date'},
          { label: '性别', prop: 'gender'}
        ],
        data: {
          name: '王菲',
          id: '23456',
          age: '21',
          address: '广东省广州市荔湾区黄沙大道西郊游泳场三号楼12345号, 广东省广州市荔湾区黄沙大道西郊游泳场三号楼12345号广东省广州市荔湾区黄沙大道西郊游泳场三号楼12345号,广东省广州市荔湾区黄沙大道西郊游泳场三号楼12345号 广东省广州市荔湾区黄沙大道西郊游泳场三号楼12345号',
          address2: 'gitee Page 不能出现宣传性质的文字内容gitee Page 不能出现宣传性质的文字内 容, gitee Page 不能出现宣传性质的文字内容。gitee Page 不能出现宣传性质的文字内容，gitee Page 不能出现宣传性质的文字内容。gitee Page 不能出现宣传性质的文字内容。  Page 不能出现宣传性质的文字内容gitee Page 不能出现宣传性质的文字内容, gitee Page 不能出现宣传性质的文字内容。gitee Page 不能出现宣传性质的文字内容，gitee Page 不能出现宣传性质的文字内容。gitee Page 不能出现宣传性质的文字内容',
          date: '19871009',
          phone: '1234',
          gender: '男'
        }
      }
    }
  }
</script>