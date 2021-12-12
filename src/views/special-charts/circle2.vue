<template>
   <div style="height:600px">
     <my-dv-page target="parent" fit>
        <my-dv-ring fit :columns="columns" :rows="rows" title="渠道统计"  :extend="extend"></my-dv-ring>
     </my-dv-page>
     <!-- <my-chart-pie :data="data" :extend="extend"></my-chart-pie> -->
   </div>
</template>
<script>
import setExtend from '$ui/charts/utils/extend'
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
        color: ['red', 'green', 'blue'] // ['#00ffff', '#00cfff', '#006ced', '#ffe000', '#ffa800', '#ff5b00', '#ff3000']
      }
    }
  },
  mounted() {
    const obj = {}
    console.log(setExtend(obj, this.extend))
  }
}
</script>