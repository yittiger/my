<template>
  <my-pro fixed ref="pro">

    <my-icon name="icon-accurate-search" svg></my-icon>

  </my-pro>
</template>
<script>
  import '$ui/icons/accurate-search'

  export default {
    mounted() {

      this.$refs.pro.collapsed = true
    }
  }
</script>

<style lang="scss" scoped>

</style>
