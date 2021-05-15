<template>
<div>
  <my-map ref="map" height="300px" :center="[113.261999, 23.130592]" @ready="init">
    <my-map-draw></my-map-draw>
    <my-map-circle :center="[113.261999, 23.130592]" :radius="20000"></my-map-circle>
    <my-map-layers :layers="layers" placement="right-bottom" :margin="10"></my-map-layers>
  </my-map>
  <el-button @click="test">test</el-button>
</div>
  
</template>
<script>
  import Baidu from '$ui/map/sources/preview/Baidu.png'
  import Amap from '$ui/map/sources/preview/Amap.png'
  import OSM from '$ui/map/sources/preview/OSM.png'
  import TDT from '$ui/map/sources/preview/TDT.png'

  export default {
    data() {
      return {
        oMap: null,
        mapComp: null,
        layers: [
          {
            title: '百度',
            adapter: 'Baidu',
            preview: Baidu
          },
          {
            title: '高德',
            adapter: 'Amap',
            preview: Amap
          },
          {
            title: 'OSM',
            adapter: 'OSM',
            preview: OSM
          },
          {
            title: '天地图',
            adapter: 'TDT',
            preview: TDT
          }
        ]
      }
    },
    methods: {
      init(map, comp) {
        this.oMap = map
        this.mapComp = comp

        // console.log(this.oMap.getLayers().getArray())
      },
      test() {
        const layers = this.oMap.getLayers().getArray()
         
        console.log(layers)
      }
    },
    mounted() {

    }

  }
</script>
