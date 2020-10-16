<template>
  <Box class="my-dv-chart my-dv-geo"
       default-width="800px"
       default-height="600px"
       v-bind="$attrs">
    <Loading v-if="loading" :zoom="0.6"></Loading>
    <MyChartMap v-else
                ref="chart"
                v-on="$listeners"
                :on-register="onRegister"
                :debug="debug"
                :theme="theme"
                :extend="options"
                :settings="mapSettings"
                :width="`${width}px`"
                :height="`${height}px`"
                :register="json"
                :map="mapGeoName"
                :coords="coords"
                :data="mapData"></MyChartMap>
  </Box>
</template>

<script>
  /**
   * 矢量地图
   * @module $ui/dv/my-dv-geo
   */
  import {MyChartMap} from '$ui/charts'
  import Chart from '../../mixins/Chart'
  import Loading from '../my-dv-loading'
  import merge from 'lodash/merge'
  import defaults from './defaults'

  /**
   * 属性参数
   * @member props
   * @property {Array} [columns] 数据列
   * @property {Array} [rows] 数据行
   * @property {Function} [loader] 数据加载函数，必须返回Promise
   * @property {Object} [settings] 图表的私有设置
   * @property {Object|Function} [extend] 扩展图表参数选项
   * @property {boolean} [debug] 开启打印调试信息
   * @property {Object|Function} [json] geoJSON或构造函数
   * @property {string} [name] 地图注册名称，默认取组件实例的id
   * @property {Object} [type] 地图序列类型映射，{‘数据维度名称’:'系列类型 map|lines|scatter|effectScatter'}
   * @property {Object|Function} [typeHelper]系列属性构造回调函数，参数： {name,type,index,columns,columnIndex,data}
   * @property {Object|Function} [dataHelper] 系列数据构造回调函数，参数：row, i, {type, name, index}
   * @property {Object} [visual] visualMap 配置
   * @property {Object|Array} [coords] 经纬度配置
   * @property {Function} [onRegister] 地图注册完成回调
   */
  export default {
    name: 'MyDvGeo',
    mixins: [Chart],
    inheritAttrs: false,
    components: {
      Loading,
      MyChartMap
    },
    props: {
      json: [Object, Function],
      name: String,
      type: Object,
      typeHelper: [Object, Function],
      dataHelper: [Object, Function],
      visual: Object,
      coords: [Object, Array],
      onRegister: Function
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
    watch: {
      name() {
        this.load()
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
          if (Array.isArray(value)) {
            const val = value[value.length - 1]
            return val ? `${name}<br/> ${sn}: ${val}` : `${name}`
          } else {
            return `${name}<br/> ${sn}: ${value}`
          }
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
        const series = typeof this.typeHelper === 'function' ? this.typeHelper(res) : this.typeHelper
        return merge({}, defaults[res.type] || {}, series || {})
      }
    }
  }
</script>
