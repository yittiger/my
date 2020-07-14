<template>
  <div>
    <el-divider content-position="left">Carousel</el-divider>
    <el-row>
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </el-row>
    <el-row>
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3 class="medium">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </el-row>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  @import "~@/style/_vars.scss";

  .el-carousel__item h3 {
    color: $--color-primary-text;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: $--color-table-header;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: $--color-table-stripe;
  }
</style>
