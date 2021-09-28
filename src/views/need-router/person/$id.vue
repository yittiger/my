---
access:
- router
---
<template>
  <div>person id</div>
</template>
<style lang="scss" scoped>
</style>
<script>
export default {
  mixins: [],
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
  },
  created() {},
  mounted() {
    console.log(this.$route.params)
  }
}
</script>