<template>
  <div>
    <el-divider content-position="left">Tooltip</el-divider>
    <el-row>
      <el-tooltip content="Top center" placement="top">
        <el-button>Dark</el-button>
      </el-tooltip>
      <el-tooltip content="Bottom center" placement="bottom" effect="light">
        <el-button>Light</el-button>
      </el-tooltip>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: 'Tooltip'
    }
</script>

<style scoped>

</style>
