<template>
  <my-dv-page :lock="true">
    <my-dv-header5>数据可视化大屏</my-dv-header5>
    <my-dv-menu :data="items" left="20px" top="20px" :defaultActive="1" reverse></my-dv-menu>
    <my-dv-menu :data="items" left="1300px" top="20px">
      <template v-slot="{item,index}">{{item.text}}-{{index}}</template>
    </my-dv-menu>

  </my-dv-page>
</template>
<script>


  export default {
    data() {
      return {
        items: [
          {
            text: '基础数据',
            icon: 'el-icon-setting'
          },
          {
            text: '高级视图'
          },
          {
            text: '系统设置'
          }
        ]
      }
    },
    mounted() {


    }
  }
</script>

<style lang="scss" scoped>

</style>
