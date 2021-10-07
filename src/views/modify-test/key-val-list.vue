<template>
  <div ref="warp" style="border: 1px solid"> 
    <!-- {
      xxl: 5,
      xl: 4, 
      lg: 4,
      md: 3,
      sm: 2,
      xs: 2
    } -->
    <my-key-val-list :columns="3" 
    :column="column" 
    :data="data"
    :listen-el="true" 
    > 
    <template v-slot:titleA>
      <hr/>
    </template>
    <template v-slot:name="scope">
      <my-description :title="scope.label" :width="100" align="right">
      {{scope.value}}* 
      </my-description>  
    </template>
      
    </my-key-val-list>
    <el-button @click="test">test</el-button>
  </div>
</template>
<script>
export default {
  components: {
  },
  props: {
  },
  data() {
    return {
      column: [
        { label: '姓名', prop: 'name'},
        { label: '身份证', prop: 'id', devide: 'titleA' },
        { label: '年龄', prop: 'age', span: 24},
        { label: '电话', prop: 'phone'},
        { label: '地址', prop: 'address'},
        { label: '日期', prop: 'date'},
        { label: '性别', prop: 'gender'}
      ],
      data: {
        name: '黄吉平',
        id: '23456',
        age: '21',
        address: 'here',
        date: '19871009',
        phone: '1234',
        gender: '男'
      }
    }
  },
  computed: {
  },
  methods: {
    test() {
      this.$refs.warp.style.width = '50%'
    }
  },
  created() {
  },
  mounted() {
    // console.log(responsiveArray)
  }
}
</script>
<style lang="scss" scoped>
</style>