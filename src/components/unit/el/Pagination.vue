<template>
  <div>
    <el-divider content-position="left">Pagination</el-divider>
    <el-row>
      <el-pagination
        layout="prev, pager, next"
        :total="50">
      </el-pagination>
    </el-row>

    <el-row>
      <el-pagination
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </el-row>

    <el-row>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </el-row>

    <el-row>
      <el-pagination
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </el-row>

  </div>
</template>

<script>
  export default {}
</script>

<style scoped>

</style>
