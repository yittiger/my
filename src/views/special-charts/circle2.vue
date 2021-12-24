<template>
   <div style="height:600px">
     <my-dv-page target="parent" fit>
        <my-dv-ring fit  :columns="columns" :rows="rows" title="渠道统计" :use-gap="false" :extend="extend" debug :track-width="5" :blur="true" :setting="setting"></my-dv-ring>
     </my-dv-page>
     <!-- <my-chart-pie :data="data" :extend="extend"></my-chart-pie> -->
   </div>
</template>
<script> 
export default {
  data() {
    return {
      // data: {
        columns: ['渠道', '访问量'],
        rows: [
          ['直接访问', 320],
          // ['', 10],
          ['邮件营销', 302],
          // ['', 10],
          ['联盟广告', 334],
          // ['', 10],
          ['视频广告', 390],
          // ['', 10],
          ['搜索引擎', 330]
        ],
      // },
      extend: {
        color: ['#00ffff', '#00cfff', '#006ced', '#ffe000', '#ffa800', '#ff5b00', '#ff3000']
      },
      setting: {
        radius: ['70%', '75%']
      }
    }
  },
  mounted() {
    
  }
}
</script>