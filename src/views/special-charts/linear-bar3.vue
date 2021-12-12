<template>
   <div style="height:600px">
     <my-dv-page target="parent" fit>
        <my-dv-border2 width="80%" height="80%" x-align="center" y-align="middle">
           <my-dv-bar fit :columns="columns" :rows="rows" legend :settings="settings" :extend="extend" debug></my-dv-bar>
        </my-dv-border2>
     </my-dv-page>
   </div>
</template>
<script>
import {LinearGradient} from 'echarts/lib/util/graphic'
import {colorData} from '$ui/utils/color'
const colors = ['#74FCED', '#40D3F7', '#5D67FA', '#FCF243'] 
export default {
  data() {
    const barColor = colors.map((color) => {
      const cData = colorData(color)
      return new LinearGradient(0, 0, 0, 0.9, [
        {
          offset: 0,
          color: `rgba(${cData._rgb}, 0.9)`
        },
        {
          offset: 1,
          color: `rgba(${cData._rgb}, 0.1)` // '#0B3147'
        }
      ])
    })
    return { 
      columns: ['星期', '直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
      rows: [
          ['周一', 320, 302, 301, 334, 390, 330, 320],
          ['周二', 120, 132, 101, 134, 90, 230, 210],
          ['周三', 220, 182, 191, 234, 290, 330, 310],
          ['周四', 150, 212, 201, 154, 190, 330, 410],
          ['周五', 320, 132, 401, 334, 290, 330, 320]
      ],
      settings: {
        // valueAxis: ['访问量', '留存率'],
        lines: ['搜索引擎']
      },
      extend: {
        color: [...barColor, '#FC3B48'], // ['#6ee7da', 'green', 'red', 'blue']
        barGap: 0
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  // .my-dv-page {
  //   background:url("~$ui/assets/bg/02.png") no-repeat 0 0;
  // }
</style>