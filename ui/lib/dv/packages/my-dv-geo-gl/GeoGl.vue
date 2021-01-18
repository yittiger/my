<template>
  <Box class="my-dv-chart my-dv-geo-gl"
       default-width="800px"
       default-height="600px"
       v-bind="$attrs">
    <Loading v-if="loading" :zoom="0.6"></Loading>
    <MyChartMapGl v-else
                  ref="chart"
                  width="100%"
                  height="100%"
                  v-on="$listeners"
                  :map="mapGeoName"
                  :data="chartData"
                  :register="json"
                  :extend="options"
                  :settings="mapSettings"
                  :debug="debug"
                  v-bind="$attrs"></MyChartMapGl>
    <slot></slot>
  </Box>
</template>

<script>
  /**
   * 3D地图
   * @module $ui/dv/my-dv-geo-gl
   */
  import {MyChartMapGl} from '$ui/charts'
  import Chart from '../../mixins/Chart'
  import Loading from '../my-dv-loading'
  import merge from 'lodash/merge'
  import {mapStyle, viewControl, visualMap} from './defaults'

  export default {
    name: 'MyDvGeoGl',
    inheritAttrs: false,
    mixins: [Chart],
    components: {
      Loading,
      MyChartMapGl
    },
    /**
     * 属性参数
     * @member props
     * @property {string} [name] 注册的地图名称
     * @property {Object|Function} [json] 地图geoJson
     * @property {Object|Function} [extend] extend 扩展
     * @property {Object} [control] 控制配置
     * @property {Object} [visual]
     * @property {string} [type=map3D] 图表类型
     * @property {Array} [columns] 数据列
     * @property {Array} [rows] 数据行
     * @property {Function} [loader] 数据加载函数，如设置了loader，type、columns、rows 将失效
     * @property {object|function} [dataHelper] 构造序列数据项辅助函数
     * @property {object|function} [typeHelper] 序列构造辅助函数
     * @property {object} [mapStyle] 地图基础样式
     */
    props: {
      name: String,
      // geoJSON
      json: [Object, Function],
      // extend 扩展
      extend: [Object, Function],
      // 控制配置
      control: Object,
      visual: Object,
      // chartType
      type: {
        type: String,
        default: 'map3D'
      },
      columns: Array,
      rows: Array,
      loader: Function,
      // 构造序列数据项辅助函数
      dataHelper: [Object, Function],
      // 序列构造辅助函数
      typeHelper: [Object, Function],
      mapStyle: Object
    },
    data() {
      return {}
    },
    computed: {
      mapGeoName() {
        return this.name || `map${this._uid}`
      },
      options() {
        const extend = typeof this.extend === 'function' ? this.extend() : this.extend
        return Object.freeze(merge({
          visualMap: this.visual
            ? {
              ...visualMap,
              ...this.visual
            }
            : null
        }, extend))
      },
      mapSettings() {
        return {
          mapStyle: merge({},
            mapStyle,
            this.mapStyle,
            {
              viewControl: {
                ...viewControl,
                ...this.control
              }
            }),
          typeHelper: this.typeHelper,
          dataHelper: this.dataHelper
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
