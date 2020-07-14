<template>
  <div>
    <el-divider content-position="left">StatCard</el-divider>
    <el-row :gutter="10">
      <el-col :span="6" :xs="24" :sm="24" :md="12" :lg="6">
        <my-stat-card title="总销售量" icon="el-icon-pie-chart">
          <my-number slot="total" value="3345"></my-number>
        </my-stat-card>
      </el-col>
      <el-col :span="6" :xs="24" :sm="24" :md="12" :lg="6">
        <my-stat-card title="总销售量" icon="el-icon-pie-chart" icon-type="success">
          <my-number slot="total" value="3345"></my-number>
        </my-stat-card>
      </el-col>
      <el-col :span="6" :xs="24" :sm="24" :md="12" :lg="6">
        <my-stat-card title="总销售量" icon="el-icon-pie-chart" icon-type="warning">
          <my-number slot="total" value="3345"></my-number>
        </my-stat-card>
      </el-col>
      <el-col :span="6" :xs="24" :sm="24" :md="12" :lg="6">
        <my-stat-card title="总销售量" icon="el-icon-pie-chart" icon-type="danger">
          <my-number slot="total" value="3345"></my-number>
        </my-stat-card>
      </el-col>
    </el-row>
    <el-row>
      <my-stat-card title="总销售量">
        <my-corner-mark type="success">TOP</my-corner-mark>
        <my-number slot="total" value="0.5" percentage></my-number>
        <div style="height: 60px; padding-top: 35px;">
          <el-progress :stroke-width="14" :percentage="50" :show-text="false"></el-progress>
        </div>
        <div slot="footer">日访问量
          <my-number value="3345" prefix="￥"></my-number>
        </div>
      </my-stat-card>
    </el-row>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .el-col {
    margin-bottom: 10px;
  }
</style>
