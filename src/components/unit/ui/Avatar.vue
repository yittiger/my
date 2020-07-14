<template>
  <div>
    <el-divider content-position="left">Avatar</el-divider>
    <el-row>
      <my-avatar icon="el-icon-user"></my-avatar>
      <my-avatar>U</my-avatar>
      <my-avatar>USER</my-avatar>

      <my-avatar icon="el-icon-user" :size="64"></my-avatar>
      <my-avatar icon="el-icon-user" size="large"></my-avatar>
      <my-avatar icon="el-icon-user"></my-avatar>
      <my-avatar icon="el-icon-user" size="small"></my-avatar>
      <el-badge value="9">
        <my-avatar icon="el-icon-user" size="large" shape="square"></my-avatar>
      </el-badge>
      <el-badge is-dot>
        <my-avatar icon="el-icon-user" size="large" shape="square"></my-avatar>
      </el-badge>
      <my-avatar icon="el-icon-user" :size="64" shape="square"></my-avatar>
      <my-avatar icon="el-icon-user" size="large" shape="square"></my-avatar>
      <my-avatar icon="el-icon-user" shape="square"></my-avatar>
      <my-avatar icon="el-icon-user" size="small" shape="square"></my-avatar>
    </el-row>
    <el-row>
      <my-avatars :data="data" size="large"></my-avatars>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          {
            text: '陈',
            tooltip: '陈某某'
          },
          {
            text: '李',
            theme: 'success',
            tooltip: '李某某'
          },
          {
            text: '张',
            theme: 'danger',
            tooltip: '张某某'
          },
          {
            text: '王',
            theme: 'warning',
            tooltip: '王某某'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
