---
access:
- login
- router
- role:admin
---
<template>
  <div>
    need-login
    <router-link to="/need-router">跳转到need-router</router-link>
    <br/>
    <p>
      未更新路由前，仅可以访问 “need-router”页面，“need-router/test”未有权限
    </p>
    <el-button @click="updateRouter">更新路由</el-button>
    <p>
      更新路由，可以访问 “need-router”页面和“need-router/test”
    </p>
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
    updateRouter() {
      this.$access.setRouterList([{path: '/need-login'}, {path: '/need-router'}, {path: '/need-router/test'}])
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