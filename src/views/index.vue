<template>
  <my-chart-cloud :data="data"></my-chart-cloud>
</template>

<script>
  export default {
    data() {
      return {
        data: {
          columns: ['标签', '权重'],
          rows: [
            ['直接访问', 1],
            ['邮件营销', 2],
            ['联盟广告', 2],
            ['视频广告', 3],
            ['搜索引擎', 4]
          ]
        }
      }
    }
  }
</script>
