# 中国版地图

:::demo
```html
<template>
  <my-map height="600px"
          :adapter="defaultAdapter"
          :zoom="5"
          :center="[108.683729, 31.166113]">
    <my-map-layers :layers="layers" :margin="10"></my-map-layers>
  </my-map>
</template>

<script>

  import ChinaOnlineCommunity from '$ui/map/sources/preview/ChinaOnlineCommunity.png'
  import ChinaOnlineCommunityENG from '$ui/map/sources/preview/ChinaOnlineCommunityENG.png'
  import ChinaOnlineStreetGray from '$ui/map/sources/preview/ChinaOnlineStreetGray.png'
  import ChinaOnlineStreetWarm from '$ui/map/sources/preview/ChinaOnlineStreetWarm.png'
  import ChinaOnlineStreetPurplishBlue from '$ui/map/sources/preview/ChinaOnlineStreetPurplishBlue.png'

  const PREVIEW_IMAGES = {
    ChinaOnlineCommunity,
    ChinaOnlineCommunityENG,
    ChinaOnlineStreetGray,
    ChinaOnlineStreetWarm,
    ChinaOnlineStreetPurplishBlue
  }

  export default {
    data() {
      return {
        layers: null,
        defaultAdapter: null
      }
    },
    methods: {
      createLayers() {
        const layers = {
          ChinaOnlineCommunity: '彩色版',
          ChinaOnlineCommunityENG: '彩色英文版',
          ChinaOnlineStreetGray: '灰色版',
          ChinaOnlineStreetWarm: '暖色版',
          ChinaOnlineStreetPurplishBlue: '蓝黑版'
        }
        const url = 'https://map.geoq.cn/ArcGIS/rest/services/{name}/MapServer/tile/{z}/{y}/{x}'
        return Object.entries(layers).map(([name, title]) => {
          return {
            title: title,
            adapter: {
              type: 'XYZ',
              url: url.replace('{name}', name)
            },
            preview: PREVIEW_IMAGES[name]
          }
        })
      }
    },
    created() {
      this.layers = this.createLayers()
      this.defaultAdapter = this.layers[0].adapter
    }
  }
</script>

<style scoped>

</style>

```
:::
