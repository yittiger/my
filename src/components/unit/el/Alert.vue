<template>
  <div>
    <el-divider content-position="left">Alert</el-divider>
    <el-row>
      <el-alert
        title="成功提示的文案"
        type="success"
        show-icon>
      </el-alert>
      <el-alert
        title="消息提示的文案"
        type="info"
        show-icon>
      </el-alert>
      <el-alert
        title="警告提示的文案"
        type="warning"
        show-icon>
      </el-alert>
      <el-alert
        title="错误提示的文案"
        type="error"
        show-icon>
      </el-alert>

      <el-alert
        title="成功提示的文案"
        type="success"
        effect="dark">
      </el-alert>
      <el-alert
        title="消息提示的文案"
        type="info"
        effect="dark">
      </el-alert>
      <el-alert
        title="警告提示的文案"
        type="warning"
        effect="dark">
      </el-alert>
      <el-alert
        title="错误提示的文案"
        type="error"
        effect="dark">
      </el-alert>

      <el-alert
        title="成功提示的文案"
        type="success"
        description="文字说明文字说明文字说明文字说明文字说明文字说明"
        show-icon>
      </el-alert>
      <el-alert
        title="消息提示的文案"
        type="info"
        description="文字说明文字说明文字说明文字说明文字说明文字说明"
        show-icon>
      </el-alert>
      <el-alert
        title="警告提示的文案"
        type="warning"
        description="文字说明文字说明文字说明文字说明文字说明文字说明"
        show-icon>
      </el-alert>
      <el-alert
        title="错误提示的文案"
        type="error"
        description="文字说明文字说明文字说明文字说明文字说明文字说明"
        show-icon>
      </el-alert>

    </el-row>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .el-alert {
    margin-bottom: 10px;
  }
</style>
