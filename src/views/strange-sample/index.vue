<template>
<my-wrapper title="集成案例" sub-title="奇奇怪怪的组件使用集合"  fit>
  <div>
    <ol>
      <li><router-link to="/strange-sample/tabs-images">使用el-tabs实现图片列表展示</router-link></li>
      <li><router-link to="/strange-sample/dynamic-dialog">动态弹窗</router-link></li>
      <li><router-link to="/strange-sample/template-compiler">vue-template-compiler</router-link></li>
    </ol>
    
  </div>
 </my-wrapper>

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
  mounted() {}
}
</script>