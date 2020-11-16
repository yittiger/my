<template>
  <Box class="my-dv-chart my-dv-progress"
       default-width="400px"
       default-height="400px"
       v-bind="$attrs">
    <MyChart v-on="$listeners"
             :debug="debug"
             :theme="theme"
             :options="options"
             :width="`${width}px`"
             :height="`${height}px`"></MyChart>
  </Box>
</template>

<script>
  import 'echarts-gl'
  import {MyChart} from '$ui/charts'
  import Chart from '../../mixins/Chart'
  import baseTexture from './assets/1920.png'
  // import baseTexture from './assets/base.png'
  import outline from './assets/outline.png'
  // import heightTexture from './assets/bathymetry_bw_composite_4k.jpg'
  import flights from '@/mock/flights.json'

  function getAirportCoord(idx) {
    return [flights.airports[idx][3], flights.airports[idx][4]];
  }

  const routes = flights.routes.map(function (airline) {
    return [
      getAirportCoord(airline[1]),
      getAirportCoord(airline[2])
    ];
  });
  export default {
    name: 'MyDvGlobe',
    mixins: [Chart],
    components: {
      MyChart
    },
    props: {
      autoRotate: Boolean,
      shading: {
        type: String,
        default: 'color',
        validator() {
          return ['color', 'lambert', 'realistic']
        }
      },
      texture: {
        type: String
      },
      outline: {
        type: String
      }
    },
    computed: {
      options() {
        const opt = {
          backgroundColor: 'transparent',
          globe: {
            baseTexture,
            // heightTexture: outline,
            shading: this.shading,
            viewControl: {
              autoRotate: this.autoRotate
            },
            postEffect: {
              enable: true
            },
            light: {
              main: {
                intensity: 1,
                shadow: false
              }
            },
            layers: [
              {
                type: 'blend',
                texture: outline
              }
            ]
          },
          series: {
            type: 'lines3D',
            coordinateSystem: 'globe',
            blendMode: 'lighter',
            lineStyle: {
              width: 1,
              color: 'rgb(50, 50, 150)',
              opacity: 0.1
            },
            data: routes
          }
        }
        return Object.freeze(opt)
      }
    }
  }
</script>

