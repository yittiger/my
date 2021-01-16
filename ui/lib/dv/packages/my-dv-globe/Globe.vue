<template>
  <Box class="my-dv-chart my-dv-globe"
       default-width="800px"
       default-height="800px"
       v-bind="$attrs">
    <MyChart height="100%"
             width="100%"
             :options="options"
             debug></MyChart>
  </Box>
</template>

<script>
  import Chart from '../../mixins/Chart'
  import {MyChart} from '$ui/charts'
  import createBaseTexture from './baseTexture'
  // import bg from './images/starfield.jpg'
  // import {LinearGradient} from 'echarts/lib/util/graphic'
  // import img from './particle-diffuse.png'
  // import clouds from './images/clouds.jpg'
  import flights from './flights.json'
  // import population from './population.json'
  // import world from './images/world.jpg'

  // const barData = population.filter(function (dataItem) {
  //   return dataItem[2] > 0;
  // }).map(function (dataItem) {
  //   return [dataItem[0], dataItem[1], Math.sqrt(dataItem[2])];
  // });


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
    computed: {
      options() {
        return {
          globe: {
            // baseTexture: world,
            baseTexture: createBaseTexture(),
            shading: 'color',
            // globeOuterRadius: 100,
            layers: [
              // {
              //   texture: createBaseTexture()
              // }
            ],
            realisticMaterial: {
              roughness: 0.9
            },
            postEffect: {
              enable: true
            },
            light: {
              main: {
                intensity: 5,
                shadow: true
              }
            }
          },
          series: [{
            type: 'lines3D',
            coordinateSystem: 'globe',
            blendMode: 'lighter',
            lineStyle: {
              width: 1,
              color: 'rgb(50, 50, 150)',
              // color: 'rgb(118, 233, 241)',
              opacity: 0.1
            },
            effect: {
              show: true,
              trailWidth: 2,
              trailLength: 0.15,
              trailOpacity: 1,
              trailColor: 'rgb(30, 30, 60)'
            },
            data: routes
          }
            // ,
            //   {
            //     type: 'bar3D',
            //     coordinateSystem: 'globe',
            //     symbolSize: 5,
            //     shading: 'color',
            //     data: barData,
            //     barSize: 0.6,
            //     minHeight: 0.2,
            //     silent: true,
            //     itemStyle: {
            //       color: 'rgb(50, 50, 150)'
            //     }
            //   }
          ]
        }
      }
    }
  }
</script>

<style lang="scss">
  .my-dv-globe {

  }
</style>
