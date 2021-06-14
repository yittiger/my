<template>
  <div>
    login
    <el-button @click="loginHandle">test</el-button>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
  },
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {
    loginHandle() {
      this.$access.login({
        roles: ['admin'], 
        token: '12345',
        routerList: [{path: '/need-login'}, {path: '/need-router/test'}]
      })
      this.$router.push({
        path: '/need-login'
      })
    }
  },
  created() {
  },
  mounted() {
  }
}
</script>
<style lang="scss" scoped>
</style>