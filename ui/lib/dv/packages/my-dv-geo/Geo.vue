<template>
  <Box class="my-dv-chart my-dv-geo"
       default-width="800px"
       default-height="600px"
       v-bind="$attrs">
    <Loading v-if="loading" :zoom="0.6"></Loading>
    <MyChartMap v-else
                ref="chart"
                v-on="$listeners"
                :debug="debug"
                :theme="theme"
                :extend="options"
                :settings="mapSettings"
                :width="`${width}px`"
                :height="`${height}px`"
                :register="json"
                :map="mapGeoName"
                :data="mapData"></MyChartMap>
  </Box>
</template>

<script>
  import {MyChartMap} from '$ui/charts'
  import Chart from '../../mixins/Chart'
  import Loading from '../my-dv-loading'
  import merge from 'lodash/merge'
  import defaults from './defaults'


  export default {
    name: 'MyDvGeo',
    mixins: [Chart],
    inheritAttrs: false,
    components: {
      Loading,
      MyChartMap
    },
    props: {
      json: Object,
      name: String,
      type: Object,
      typeHelper: [Object, Function],
      dataHelper: [Object, Function],
      visual: Object
    },
    data() {
      return {}
    },
    computed: {
      mapGeoName() {
        return this.name || `map${this._uid}`
      },
      mapSettings() {
        return {
          type: {
            ...this.type
          },
          typeHelper: this.mapTypeHelper,
          dataHelper: this.dataHelper
        }
      },
      mapData() {
        const dataArray = this.chartData ? [].concat(this.chartData) : []
        const hasMap = Object.values(this.type || {}).includes('map')
        if (!hasMap) {
          dataArray.unshift({
            columns: ['region', ''],
            rows: []
          })
        }
        return dataArray
      },
      options() {
        const extend = typeof this.extend === 'function' ? this.extend() : this.extend

        return Object.freeze(merge({
          visualMap: this.getVisualMap(),
          tooltip: {
            formatter: this.tooltipFormatter
          }
        }, extend))
      }
    },
    methods: {
      tooltipFormatter(res) {
        const {seriesName, name, value} = res
        let sn = seriesName
        if (!sn) {
          const series = this.$refs.chart.chart.getOption().series || []
          const item = series.find(n => (n.type === 'map' && !!n.name))
          sn = item?.name || ''
        }
        if (value) {
          return `${name}<br/> ${sn}: ${Array.isArray(value) ? value[value.length - 1] : value}`
        }
        return `${name}`
      },
      getVisualMap() {
        if (this.visual === null) return null
        return {
          show: false,
          ...this.visual
        }
      },
      mapTypeHelper(res) {
        const series = this.typeHelper ? this.typeHelper(res) : null
        return merge(series || {}, defaults[res.type] || {})
      }
    }
  }
</script>
