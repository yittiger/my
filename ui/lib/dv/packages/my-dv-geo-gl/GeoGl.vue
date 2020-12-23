<template>
  <Box class="my-dv-chart my-dv-geo-gl"
       default-width="800px"
       default-height="600px"
       v-bind="$attrs">
    <MyChart ref="chart"
             width="100%"
             height="100%"
             v-on="$listeners"
             :register="json"
             :options="options"></MyChart>
  </Box>
</template>

<script>
  import {MyChart} from '$ui/charts'
  import Box from '../my-dv-box'
  import {geo3D} from './defaults'


  export default {
    name: 'MyDvGeoGl',
    inheritAttrs: false,
    components: {
      Box,
      MyChart
    },
    props: {
      json: [Object, Function],
      extend: [Object, Function]
    },
    data() {
      return {
        loading: false,
        isReady: false
      }
    },
    computed: {
      options() {
        return {
          geo3D: {
            ...geo3D,
            map: this.json,
            show: false
          },
          series: [
            {
              ...geo3D,
              type: 'map3D',
              map: this.json
            }
          ]
        }
      }
    },
    methods: {
      handleReady() {
        this.isReady = true
        this.$refs.chart.chart.on('click', (e) => {
          console.log('click')
        })
      }
    },
    mounted() {

    }
  }
</script>

<style lang="scss" scoped>

</style>
