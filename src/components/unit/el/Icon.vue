<template>
  <div class="icon">
    <el-divider content-position="left">Icon</el-divider>
    <i class="el-icon-platform-eleme"></i>
    <i class="el-icon-eleme"></i>
    <my-icon name="el-icon-warning"></my-icon>
    <my-icon name="el-icon-warning-outline"></my-icon>
    <my-icon name="icon-poweroff" svg></my-icon>
  </div>
</template>

<script>
  import '$ui/icons/poweroff'

  export default {
    name: 'Icon'
  }
</script>

<style lang="scss" scoped>
  .icon > i {
    font-size: 40px;
  }
</style>
