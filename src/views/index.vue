<template>
  <div >
    <router-link to="/login">去login 页面测试 router劝鉴</router-link><br/>
    <router-link to="/modify-test/tree-select">测试tree-select仅末端可选功能</router-link>
    <p v-if="optMap">{{code|formatFilter('CITY')}}</p>
    <!-- <el-button @click="test"></el-button> -->
  </div>
</template>
<script> 
export default {
  data() {
    return {
      code: '623026',
      optMap: null
    }
  },
  methods: { 
  },
  mounted() {
    this.$getOptionsMap([{name: 'city', code: 'CITY'}]).then((res) => {
      console.log(res)
      this.optMap = res
    })
  }
}
</script>
<style lang="scss" scoped>

</style>