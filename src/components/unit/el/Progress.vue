<template>
  <div>
    <el-divider content-position="left">Progress</el-divider>
    <el-row>
      <el-progress :percentage="50"></el-progress>
      <el-progress :percentage="100" :format="format"></el-progress>
      <el-progress :percentage="100" status="success"></el-progress>
      <el-progress :percentage="100" status="warning"></el-progress>
      <el-progress :percentage="50" status="exception"></el-progress>

      <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
      <el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
      <el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress>
      <el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress>

      <el-progress type="circle" :percentage="0"></el-progress>
      <el-progress type="circle" :percentage="25"></el-progress>
      <el-progress type="circle" :percentage="100" status="success"></el-progress>
      <el-progress type="circle" :percentage="70" status="warning"></el-progress>
      <el-progress type="circle" :percentage="50" status="exception"></el-progress>

    </el-row>

  </div>
</template>


<script>
  export default {
    methods: {
      format(percentage) {
        return percentage === 100 ? '满' : `${percentage}%`;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .el-progress {
    margin-bottom: 10px;
  }
</style>
