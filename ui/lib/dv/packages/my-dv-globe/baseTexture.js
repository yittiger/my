import echarts from 'echarts/lib/echarts'
import world from '$ui/charts/geo/world.json'
import 'echarts/lib/chart/map'
import dot from './images/dot.png'

echarts.registerMap('world', world);
const img = new Image()
img.width = 4
img.height = 4
img.src = dot

export default function createBaseTexture() {
  const canvas = document.createElement('canvas');
  const mapChart = echarts.init(canvas, null, {
    width: 4096, height: 2048
  });
  mapChart.setOption({
    series: [
      {
        type: 'map',
        map: 'world',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        boundingCoords: [[-180, 90], [180, -90]],
        itemStyle: {
          areaColor: {
            image: img,
            repeat: 'repeat'
          },
          borderColor: 'rgba(143,152,166,0.67)'
        },
        emphasis: {
          itemStyle: {
            areaColor: 'rgba(33,84,149,0.51)'
          },
          label: {
            color: '#1de2ff'
          }
        }
      }
    ]
  });
  return mapChart
}

