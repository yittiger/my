<template>
  <my-dv-page fit>


    <my-dv-loading v-if="loading"></my-dv-loading>
    <my-dv-geo-gl v-else fit :json="geoJson" :name="map" @click="handleClick"></my-dv-geo-gl>
    <my-dv-box left="20px" top="20px">
      <my-breadcrumb :data="breadcrumb" theme="arrow" @click="handleNav"></my-breadcrumb>
    </my-dv-box>
  </my-dv-page>
</template>

<script>
  import geoArray from '$ui/charts/geo/index.json'
  // import geoJson from '$ui/charts/geo/china.json'
  // import geoJson from '$ui/charts/geo/province/guangdong.json'
  import geoJson from '$ui/charts/geo/world.json'
  import 'echarts-gl'
  // import {LinearGradient} from 'echarts/lib/util/graphic'

  const options = {
    color: [
      '#1165b2',
      '#0d8888',
      '#398912',
      '#70980c',
      '#b17706',
      '#af620f',
      '#af3b14',
      '#ab181f',
      '#a4226a',
      '#502092',

      '#2a39c3',
      '#2a71c4',
      '#128943',
      '#49b312',
      '#b28f13',
      '#b25010',
      '#bd352c',
      '#a4224a',
      '#6a1a97',
      '#321a97',

      '#1890ff',
      '#13c2c2',
      '#52c41a',
      '#a0d911',
      '#fdaa09',
      '#fa8c16',
      '#fa541c',
      '#f5222d',
      '#eb3197',
      '#722ed1',
      '#2f54eb'
    ],
    geo3D: {
      map: geoJson,
      show: true,
      boxHeight: 20,
      regionHeight: 3,
      shading: 'lambert',
      light: {
        main: {
          shadow: true
        },
        ambient: {
          intensity: 0.2
        }
      },

      itemStyle: {
        borderColor: '#215495',
        borderWidth: 1,
        color: '#073684'
      },
      label: {
        show: false,
        textStyle: {
          fontSize: 14
        }
      },
      emphasis: {
        itemStyle: {
          color: '#1890FF',
          borderColor: 'rgba(0,0,0,0)'
        }
      },
      regions: [
        // {name: '茂名市', regionHeight: 30, label: {show: true}}
      ],

      groundPlane: {
        show: false
      },
      viewControl: {
        autoRotate: false,
        distance: 120,
        alpha: 40,
        beta: 20,
        minBeta: -Infinity,
        maxBeta: Infinity,
        maxDistance: 500,
        minDistance: 0,
        center: [0, 0, 0]
      }
    },
    visualMap: {
      left: 'right',
      seriesIndex: 0,
      min: 0,
      max: 1000,
      color: ['#1de2ff', '#073684'],

      text: ['高', '低'],
      calculable: true,
      textStyle: {
        color: '#fff'
      }
    },
    series: [

      {
        type: 'bar3D',
        coordinateSystem: 'geo3D',
        shading: 'lambert',
        label: {},
        emphasis: {
          label: {
            formatter: '{b}:{c}'
          }
        },
        minHeight: 1,
        data: [{
          name: '广州',
          value: [113.280637, 23.125178, 130]
        },
          {
            name: '深圳',
            value: [114.085947, 22.547, 50]
          }, {
            name: '珠海',
            value: [113.553986, 22.224979, 12]
          }]
      },
      {
        type: 'bar3D',
        coordinateSystem: 'geo3D',
        shading: 'lambert',
        label: {},
        emphasis: {
          label: {
            formatter: '{b}:{c}'
          }
        },
        minHeight: 1,
        data: [{
          name: '广州',
          value: [113.480637, 23.125178, 230]
        },
          {
            name: '深圳',
            value: [114.285947, 22.547, 350]
          }, {
            name: '珠海',
            value: [113.753986, 22.224979, 112]
          }]
      },
      {
        type: 'lines3D',
        coordinateSystem: 'geo3D',
        z: 10,
        shading: 'lambert',
        // polyline: true,
        blendMode: 'lighter',
        effect: {
          show: true,
          trailWidth: 3,
          trailLength: 0.2
        },
        lineStyle: {
          width: 1,
          color: 'rgb(150,50,70)',
          opacity: 0.2
        },
        data: [
          {
            coords: [[113.480637, 23.125178], [110.364977, 21.274898]],
            value: [[113.480637, 23.125178], [113.753986, 22.224979], 130]
          }

        ]
      },
      {
        type: 'scatter3D',
        coordinateSystem: 'geo3D',
        blendMode: 'source-over',
        symbolSize: 20,
        label: {
          show: true
        },
        data: [{
          name: '茂名市',
          value: [110.919229, 21.659751, 130]
        }]
      }
    ]
  }
  export default {
    data() {
      return {
        breadcrumb: [
          {label: 'World', item: {geo: 'world.json', name: 'World'}}
        ],
        loading: false,
        map: 'china.json',
        geoJson: geoJson,
        options
      }
    },
    methods: {
      load(geo) {
        this.loading = true
        import('$ui/charts/geo/' + geo).then(r => {
          this.geoJson = r.default
          this.loading = false
        })
      },
      handleNav(item, index) {
        this.breadcrumb.splice(index + 1)
        const menu = this.breadcrumb[this.breadcrumb.length - 1].item
        this.load(menu.geo)
      },
      handleClick(e) {
        const item = geoArray.find(n => e.name.includes(n.name))
        if (item) {
          this.load(item.geo)
          this.breadcrumb.push({
            label: e.name,
            item: item
          })
        }

        // console.log(e)
      }
    }
  }
</script>
