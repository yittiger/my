<template>
  <div style="height: 100%"> 
     <my-dv-page target="parent" fit>
       <el-button type="primary" @click="visible = true">test</el-button>
       <my-dv-border1 x-align="center"
                      y-align="middle"
                      width="80%"
                      height="80%">
        <my-dv-box fit style="background: rgba(255,0,0,0.2)">
          <my-chart :options="options" width="100%" height="100%"></my-chart> 
        </my-dv-box> 
                     
      </my-dv-border1>
    </my-dv-page>
    
    <my-dialog :visible.sync="visible"
      theme="dark"
      target="body"
      icon="el-icon-menu"
      title="标题文字"
      draggable
      resizable
      maximizable
      minimizable
      width="600px" 
      height="450px">
      <my-dv-border1 x-align="center"
                      y-align="middle"
                      width="100%"
                      height="100%">
      </my-dv-border1>
    </my-dialog>
  </div>
</template>
<style lang="scss" scoped>
</style>
<script>
export default {
  mixins: [],
  components: {},
  props: {
  },
  data() {
    return {
      visible: false,

      options: {
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
            data: ['销量']
        },
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
      }
    }
  },
  computed: {
  },
  methods: {
  },
  created() {},
  mounted() {}
}
</script>