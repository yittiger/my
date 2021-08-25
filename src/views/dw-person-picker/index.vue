<template>
  <div class="login-page">
    <orgs :value="lists"></orgs>
  </div>
</template>

<script>
import Orgs from '@/components/text'
export default {
  components: {
    Orgs
  },
  data() {
    return {
      lists: [
        {id: 1, name: 1},
        {id: 2, name: 3}
      ]
    }
  },
  watch: {
  },
  methods: {
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
.login-page {
  height: 100%;
}
</style>
