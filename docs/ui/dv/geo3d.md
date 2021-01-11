# GeoGL 3D地图

## map3D
:::demo
```html
<template>
  <div style="height:600px">
    <my-dv-page target="parent" fit>
      <my-dv-geo-gl fit
                    :json="geoJson"
                    :columns="data.columns"
                    :rows="data.rows"
                    :type="data.type"
                    :visual="visual"
                    :extend="extend"
                    debug>
      </my-dv-geo-gl>
    </my-dv-page>
  </div>
</template>

<script>

  import geoJson from '$ui/charts/geo/china.json'

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
          max: 120
        },
        extend: {
          tooltip: {
            show: true
          }
        }
      }
    }
  }
</script>

```
:::


## bar3D
:::demo
```html
<template>
  <div style="height:600px">
    <my-dv-page target="parent" fit>
      <my-dv-geo-gl fit
                    :json="geoJson"
                    :columns="data.columns"
                    :rows="data.rows"
                    :type="data.type"
                    :extend="extend"
                    debug>
      </my-dv-geo-gl>
    </my-dv-page>
  </div>
</template>

<script>

  import geoJson from '$ui/charts/geo/china.json'

  export default {
    data() {
      return {
        geoJson: geoJson,
        data: {
          type: 'bar3D',
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
        extend: {
          tooltip: {
            show: true,
            formatter: function ({seriesName, name, value}) {
              return `${seriesName}<br>${name}: ${value[2]}`
            }
          }
        }
      }
    }
  }
</script>


```
:::
