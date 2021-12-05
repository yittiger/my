<template>
<div>
  <linear-bar1 height="300px" color="violet" :data="data" :bar-width="40" bottom-color="white" top-color="white" :extend="extend"></linear-bar1>

 
</div>
</template>
<style scoped lang="scss">
 

</style>
<script>
import LinearBar1 from '@/components/special-charts/linear-bar1'
export default {
  components: {
    LinearBar1
  },
  data() {
    return {
      data: {
        yData: [
          70, 
          1230,
          425, 
          290, 
          140
        ],
        xData: ['本年话\n务总量', '本年人工\n话务量', '每万客户\n呼入量', '每万客户\n呼出量', '每万客户\n呼入']
      }, 
      extend: {
        title: {
          text: 'ECharts 入门示例'
        }
      },
      input4: ''
    }
  }
}

</script>