<template>
  <my-dv-page target="parent" fit>
    <!--    <my-dv-border11 top="20px" left="20px" width="800px" height="500px" fill="rgba(0,0,0,0.2)">-->
    <!--      <my-dv-title :level="6" top="20px" left="20px">数据统计</my-dv-title>-->
    <!--      <my-dv-bar :columns="columns" :rows="rows" legend fit top="16px"></my-dv-bar>-->
    <!--    </my-dv-border11>-->
    <!--    <my-dv-starry :opacity="0.4" fit></my-dv-starry>-->
    <my-dv-globe fit debug width="600px" height="600px"
                 shading="color"
                 autoRotate
                 :opacity="1"></my-dv-globe>

  </my-dv-page>

</template>
<script>

  export default {
    data() {
      return {
        columns: ['星期', '直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
        rows: [
          ['周一', 320, 302, 301, 334, 390, 330, 320],
          ['周二', 120, 132, 101, 134, 90, 230, 210],
          ['周三', 220, 182, 191, 234, 290, 330, 310],
          ['周四', 150, 212, 201, 154, 190, 330, 410],
          ['周五', 320, 132, 401, 334, 290, 330, 320]
        ]
      }
    },
    created() {
      this.$store.commit('increment')
    }

  }
</script>
<style lang="scss" scoped>
  .my-dv-page {
    background: url("~$ui/assets/bg/02.png") no-repeat center center;
    /*background-image: radial-gradient(ellipse farthest-corner at center center, #1b44e4 0%, #020f3a 100%);*/
  }
</style>
