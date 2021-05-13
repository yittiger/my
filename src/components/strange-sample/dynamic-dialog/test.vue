<template>
  <div>
    <h1>
      test component
    </h1> 
    <el-button @click="clickHandle">access show</el-button>
  </div>
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
    clickHandle() {
      console.log(this.$access)
    }
  },
  created() {},
  mounted() {}
}
</script>