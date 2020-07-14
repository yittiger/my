<template>
  <div>
    <el-divider content-position="left">Basic</el-divider>
    <el-row :gutter="10">
      <el-col :span="6">
        <my-panel>
          <my-corner-mark>HOT</my-corner-mark>
        </my-panel>
      </el-col>
      <el-col :span="6">
        <my-panel>
          <my-corner-mark type="success">HOT</my-corner-mark>
        </my-panel>
      </el-col>
      <el-col :span="6">
        <my-panel>
          <my-corner-mark type="warning">HOT</my-corner-mark>
        </my-panel>
      </el-col>
      <el-col :span="6">
        <my-panel>
          <my-corner-mark type="danger">HOT</my-corner-mark>
        </my-panel>
      </el-col>
    </el-row>
    <el-row>
      <my-date></my-date>
      <my-number value="3345" trend="up"></my-number>
      <my-number value="1234" trend="down"></my-number>
      <my-number value="2002" trend="-"></my-number>
      <my-number value="12345"></my-number>
      <my-number value="12345" type="primary"></my-number>
      <my-number value="12345" type="success"></my-number>
      <my-number value="12345" type="warning"></my-number>
      <my-number value="12345" type="danger"></my-number>
      <my-number value="12345" type="info"></my-number>
      <my-timer countdown auto type="primary"></my-timer>
      <my-timer countdown auto type="success"></my-timer>
      <my-timer countdown auto type="warning"></my-timer>
      <my-timer countdown auto type="danger"></my-timer>
      <my-timer countdown auto type="info"></my-timer>
    </el-row>
    <el-row>
      <my-empty></my-empty>
    </el-row>
    <el-row>
      <my-result status="success"
                 title="Successfully Purchased Cloud Server ECS!"
                 subtitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait.">
        <template v-slot:extra>
          <el-button type="primary">Go Console</el-button>
          <el-button>Buy Again</el-button>
        </template>
      </my-result>
    </el-row>
    <el-row>
      <my-skeleton avatar active loading></my-skeleton>
    </el-row>
    <el-row>
      <my-spin size="small" loading></my-spin>
      <my-spin loading></my-spin>
      <my-spin size="large" loading></my-spin>
    </el-row>
    <el-row>
      <my-title>h1. MyWeb 4.x</my-title>
      <my-title level="2">h2. MyWeb 4.x</my-title>
      <my-title level="3">h3. MyWeb 4.x</my-title>
      <my-title level="4">h4. MyWeb 4.x</my-title>
      <my-text>MyWeb 4.x</my-text>
      <my-text type="primary">MyWeb 4.x</my-text>
      <my-text type="secondary">MyWeb 4.x</my-text>
      <my-text type="warning">MyWeb 4.x</my-text>
      <my-text type="danger">MyWeb 4.x</my-text>
      <my-text delete>MyWeb 4.x</my-text>
      <my-text mark>MyWeb 4.x</my-text>
      <my-text code>MyWeb 4.x</my-text>
      <my-text strong>MyWeb 4.x</my-text>
      <my-text underline>MyWeb 4.x</my-text>
    </el-row>
    <el-row>
      <my-header title="我是标题文字" icon="el-icon-menu" background></my-header>
      <my-header title="我是标题文字" theme="border-left" background></my-header>
      <my-header title="我是标题文字" icon="el-icon-menu" theme="border-top" background></my-header>
      <my-header title="我是标题文字" icon="el-icon-menu" theme="border-bottom" background></my-header>
      <my-header title="我是标题文字" icon="el-icon-menu" theme="bg-icon" background></my-header>
      <my-header title="我是标题文字" icon="el-icon-menu" theme="bg-down" background></my-header>
      <my-header title="我是标题文字" icon="el-icon-menu" theme="bg-right" background></my-header>

    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'Basic'
  }
</script>

<style lang="scss" scoped>
  .my-number, .my-timer {
    margin-left: 10px;
  }

  .my-text {
    margin-right: 10px;
  }
</style>
