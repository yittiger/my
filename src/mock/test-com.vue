<template>
<!-- {{}} -->
<div>测试组件</div>
</template>
<script>
let diagram = 0
export default {
components: {

},
props: {
    data: {
        default() {
            return {}
        }
    }
 },
data() {
return {}
},
computed: {

},
methods: {
  setData() {
      console.log('设置数据 diagram', this.data);
      diagram = this.data
  },
  getData() {
      console.log(diagram);
  }
},
created() {

}
}
</script>
<style type="text/scss" lang="scss" scoped>

</style>