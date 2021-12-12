<template>
   <div style="height:400px">
     <my-dv-page target="parent" fit>
        <my-dv-bar fit :columns="columns" :rows="rows" :settings="settings" :extend="extend" legend></my-dv-bar>
     </my-dv-page>
   </div>
</template>
<script>
import {LinearGradient} from 'echarts/lib/util/graphic'
import {colorData} from '$ui/utils/color'
const colors = ['#74FCED', '#40D3F7'] 
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
          color: `rgba(${cData._rgb}, 0.1)` 
        }
      ])
    })
    return {
      columns: ['星期', '直接访问', '邮件营销', '联盟广告'],
      rows: [
          ['周一', 320, 302, 301],
          ['周二', 120, 132, 101],
          ['周三', 220, 182, 191],
          ['周四', 150, 212, 201],
          ['周五', 320, 132, 401]
      ],
      settings: {
        stack: ['直接访问', '邮件营销'],
        lines: ['联盟广告']
      },
      extend: {
        color: [...barColor, '#5D67FA']
      }
    }
  }
}
</script>