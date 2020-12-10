<template>
  <my-dv-page>
    <my-dv-starry :opacity="0.4"></my-dv-starry>
    <my-dv-header4>数据可视化大屏</my-dv-header4>
    <my-dv-date tick :level="5" right="20px" top="15px" type="primary"></my-dv-date>
    <my-dv-border12 left="10px"
                    top="100px"
                    width="25%"
                    height="calc((100% - 130px)/3)"
                    fill="rgba(255,255,255,0.05)">
      <my-dv-adorn7 :level="6" :zoom="0.9" x-align="center" top="15px">数据模块标题</my-dv-adorn7>
      <BarChart></BarChart>
    </my-dv-border12>
    <my-dv-border12 left="10px"
                    top="calc((100% - 130px)/3 + 110px)"
                    width="25%"
                    fill="rgba(255,255,255,0.05)"
                    height="calc((100% - 130px)/3)">
      <my-dv-adorn7 :level="6" :zoom="0.9" x-align="center" top="15px">数据模块标题</my-dv-adorn7>
      <StackBar></StackBar>
    </my-dv-border12>
    <my-dv-border12 left="10px"
                    top="calc((100% - 130px) * 2 /3 + 120px)"
                    width="25%"
                    fill="rgba(255,255,255,0.05)"
                    height="calc((100% - 130px)/3)">
      <my-dv-adorn7 :level="6" :zoom="0.9" x-align="center" top="15px">数据模块标题</my-dv-adorn7>
      <RosePie></RosePie>
    </my-dv-border12>

    <my-dv-border12 right="10px"
                    top="100px"
                    width="25%"
                    fill="rgba(255,255,255,0.05)"
                    height="calc((100% - 130px)/3)">
      <my-dv-adorn7 :level="6" :zoom="0.9" x-align="center" top="15px">数据模块标题</my-dv-adorn7>
      <RingPie></RingPie>
    </my-dv-border12>
    <my-dv-border12 right="10px"
                    top="calc((100% - 130px)/3 + 110px)"
                    width="25%"
                    fill="rgba(255,255,255,0.05)"
                    height="calc((100% - 130px)/3)">
      <my-dv-adorn7 :level="6" :zoom="0.9" x-align="center" top="15px">数据模块标题</my-dv-adorn7>
      <StackLine></StackLine>
    </my-dv-border12>
    <my-dv-border12 right="10px"
                    top="calc((100% - 130px) * 2 /3 + 120px)"
                    width="25%"
                    fill="rgba(255,255,255,0.05)"
                    height="calc((100% - 130px)/3)">
      <my-dv-adorn7 :level="6" :zoom="0.9" x-align="center" top="15px">数据模块标题</my-dv-adorn7>
      <Pictorial></Pictorial>
    </my-dv-border12>
    <my-dv-border12 x-align="center" width="calc(50% - 40px)" top="100px" height="calc(100% - 110px)"
                    fill="rgba(255,255,255,0.05)">
      <Map></Map>
      <my-dv-box width="50%" top="20px">
        <my-dv-number :value="1322333" background :zoom="1.2" x-align="center" suffix="元"></my-dv-number>
        <my-dv-title :level="6" type="secondary" x-align="center" top="80px">总收入情况</my-dv-title>
      </my-dv-box>
      <my-dv-box width="50%" right="0" top="20px">
        <my-dv-number :value="102342" background :zoom="1.2" x-align="center" suffix="元"></my-dv-number>
        <my-dv-title :level="6" type="secondary" x-align="center" top="80px">总支出情况</my-dv-title>
      </my-dv-box>
    </my-dv-border12>
  </my-dv-page>

</template>
<script>

  import BarChart from '@/components/BarChart'
  import StackBar from '@/components/StackBar'
  import RosePie from '@/components/RosePie'
  import RingPie from '@/components/RingPie'
  import StackLine from '@/components/StackLine'
  import Pictorial from '@/components/Pictorial'
  import Map from '@/components/Map'

  export default {
    components: {
      BarChart,
      StackBar,
      RosePie,
      RingPie,
      StackLine,
      Pictorial,
      Map
    },
    data() {
      return {
        columns: ['月份', '访问量'],
        rows: [
          ['一月', 100],
          ['二月', 60],
          ['三月', 78],
          ['四月', 90],
          ['五月', 110],
          ['六月', 87],
          ['七月', 90],
          ['八月', 75],
          ['九月', 63],
          ['十月', 80],
          ['十一月', 90],
          ['十二月', 105]
        ]
      }
    }
  }
</script>
