<template>
  <my-dv-page fit>

    <my-dv-geo-gl fit
                  ref="chart"
                  map="china"
                  :json="geoJson"
                  :visual="visual"
                  :control="control"
                  :typeHelper="typeHelper"
                  :loader="loader"
                  @click="finished"
                  debug>
    </my-dv-geo-gl>

  </my-dv-page>
</template>

<script>

  import geoJson from '$ui/charts/geo/china.json'
  import {LinearGradient} from 'echarts/lib/util/graphic'

  export default {
    data() {
      return {
        geoJson: geoJson,
        data: {
          type: 'map3D',
          columns: ['省份', '人口数量'],
          rows: [
            ['广东', 100],
            ['北京', 60],
            ['广西', 78],
            ['湖南', 90],
            ['湖北', 110],
            ['福建', 87],
            ['新疆', 90],
            ['贵州', 75],
            ['江苏', 63],
            ['山西', 80],
            ['山东', 90],
            ['黑龙江', 105]
          ]
        },
        visual: {
          show: true,
          max: 100
        },
        control: {
          distance: 100
        },
        extend: {
          geo: {
            map: geoJson
          },
          geo3D: {
            groundPlane: {
              show: false,
              color: '#58758c'
            },
            environment: new LinearGradient(0, 0, 0, 1, [{
              offset: 0, color: '#77add4' // 天空颜色
            }, {
              offset: 0.6, color: '#648aa7' // 地面颜色
            }, {
              offset: 1, color: '#1c2126' // 地面颜色
            }], false)
          }
        },
        scatter: {}
      }
    },
    methods: {
      loader() {
        // const lines = {
        //   type: 'lines3D',
        //   columns: ['路线', '航线'],
        //   rows: [
        //     ['广东->北京', ['广东', '北京']],
        //     ['湖南->北京', ['湖南', '北京']],
        //     ['贵州->北京', ['贵州', '北京']],
        //     ['新疆->北京', ['新疆', '北京']],
        //     ['西藏->北京', ['西藏', '北京']]
        //   ]
        // }
        return Promise.resolve([
          this.data
        ])
      },
      typeHelper() {
        return {
          effect: {
            show: true,
            period: 4, // 箭头指向速度，值越小速度越快
            trailLength: 0.02, // 特效尾迹长度[0,1]值越大，尾迹越长重
            symbol: 'arrow', // 箭头图标
            symbolSize: 5 // 图标大小
          }
        }
      },
      finished(e) {
        const {chart, coordinates} = this.$refs.chart.$refs.chart
        const position = chart.convertToPixel('geo', coordinates['广东'])
        console.log(position)
        // const position = e.event.target.position
        // this.scatter = {
        //   left: position[0],
        //   top: position[1]
        // }
        // console.log(e.event.target.position)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .box {
    transform-style: preserve-3d;
    perspective: 500px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .line {
    width: 200px;
    height: 200px;
    background: red;
    position: absolute;
    top: 200px;
    left: 500px;
    z-index: 999;
    transform-origin: 0 0;
    transform: rotateX(45deg)
  }
</style>
