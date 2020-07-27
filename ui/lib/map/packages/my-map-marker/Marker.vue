<template>
  <div>
    <template>
      <MyMapCluster
        ref="cluster"
        v-bind="clusterProps"
        :data="markerData"
        :style-creator="styleCreator"
        :cursor="cursor"
        v-on="$listeners"
        @ready="activePopup(activeIndex)"
      >
        <div>
          <MyMapPopup
            v-for="(marker_,index) in markers"
            v-if="$scopedSlots.default"
            v-show="marker_"
            :key="index + marker_.coordinate.join()"
            v-bind="{
              title: '信息',
              width: '400px',
              offset: [0, -20],
              autoPan: true,
              ...popup,
              position: marker_.coordinate
            }"
            @hide="handleHide"
            @lockChange="handleLockChange"
          >
            <template v-if="$scopedSlots.title" slot="title">
              <slot v-if="marker_" name="title" :marker="marker_" />
            </template>
            <slot v-if="marker_" :marker="marker_" />
          </MyMapPopup>
        </div>
      </MyMapCluster>
    </template>
  </div>
</template>

<script>
/**
   * 标记组件
   * @module $ui/map/my-map-marker
   *
   */
import MyMapCluster from '../my-map-cluster'
import MyMapPopup from '../my-map-popup'
import imageMixin from ''../../mixins/image'
import parseStyle from ''../../utils/style'
import defaultMarkerSrc from '@ui/map/sources/marker/blue.png'
import { mergeProps } from ''../../utils/util'
import featureMixin from ''../../mixins/feature'

// 浮层默认参数
const defaultPopupProps = {
  title: '信息',
  width: '400px',
  offset: [0, -20],
  autoPan: true
}
/**
   * 插槽
   * @member slots
   * @property {string} default 作用域插槽，定义浮层内容，参数：marker 标记的数据
   * @property {string} title 作用域插槽，定义浮层的标题，参数：marker 标记的数据
   */

export default {
  name: 'MyMapMarker',
  inject: ['myMap'],
  components: {
    MyMapCluster,
    MyMapPopup
  },
  mixins: [imageMixin, featureMixin],
  /**
     * 属性参数, 继承 [$ui/map/packages/my-map-image]{@link module:$ui/map/packages/my-map-image}
     * @member props
     * @property {number[]} [coordinate] 单个标记时的坐标，无设置data时有效
     * @property {string} [src] 标记的默认图片url，data各项属性无src时采用该值
     * @property {array} [data] 批量生成 marker 的数据
     * @property {number[]} [data.coordinate] 批量生成marker时每个marker的坐标
     * @property {string} [data.src] 批量生成marker的展示图片
     * @property {object} [keyMap] 数据属性映射
     * @property {object} [popup] 浮窗的配置参数
     * @property {string} [trigger] popup打开方式 'click', 'hover'
     * @property {boolean} [cluster] 开启聚合
     * @property {number} [distance] 集群距离，表示在这个像素距离内的是同一群marker
     * @property {string} clusterSrc 集图标图片
     */
  props: {
    styleType: {
      type: String,
      default: 'icon'
    },
    mode: {
      type: String,
      default: 'popup' // popup: 弹出模式  or none ： 不弹出（抛出数据）
    },
    radius: {
      type: Number,
      default: 10
    },
    // 单个标记时的坐标，无设置data时有效
    coordinate: Array,
    // 标记的默认图片url，data各项属性无src时采用该值
    src: {
      type: String,
      default: defaultMarkerSrc
    },
    // 群标记图片url
    clusterSrc: {
      type: String
    },

    // 激活第几个浮层级
    activeIndex: Number,
    zIndex: {
      type: Number,
      default: 10
    },

    // 数据，[{coordinate, src}]
    data: {
      type: Array,
      default() {
        return []
      }
    },
    // 数据属性映射
    keyMap: {
      type: Object,
      default() {
        return {
          coordinate: 'coordinate',
          src: 'src'
        }
      }
    },
    // 开启集群
    cluster: {
      type: Boolean,
      default: true
    },
    // 相距少于的像素距离就是一群
    distance: {
      type: Number,
      default: 20
    },
    // 浮窗的配置参数
    popup: {
      type: Object,
      default() {
        return defaultPopupProps
      }
    },
    // 浮窗显示触发方式
    trigger: {
      type: String,
      default: 'click',
      validator(val) {
        return ['click', 'hover'].includes(val)
      }
    }

  },
  data() {
    return {
      // 激活时的数据
      marker: null,
      // 支持多个
      markers: [],
      // toggleHeatToCluster: true,
      closeable: false
    }
  },
  computed: {
    markerData() {
      const { coordinate, src } = this.keyMap
      const data = this.data.length > 0
        ? this.data
        : (this.coordinate ? [{ coordinate: this.coordinate }] : [])
      return data.map(item => {
        return {
          ...item,
          coordinate: item[coordinate],
          src: item[src]
        }
      })
    },
    clusterProps() {
      return mergeProps(this, ['keyMap', 'distance', 'cluster', 'zIndex'])
    },
    // MyMapImage配置参数
    imageProps() {
      const keys = Object.keys(imageMixin.props)
      return mergeProps(this, keys)
    },
    // MyMapPopup配置参数
    popupProps() {
      if (!this.marker) return null
      const position = this.marker.coordinate
      return {
        ...defaultPopupProps,
        ...this.popup,
        position
      }
    },
    cursor() {
      return this.trigger === 'click'
    }
  },
  watch: {
    activeIndex(val) {
      this.activePopup(val)
    }
  },
  mounted() {
    this.bindEvents()
  },
  beforeDestroy() {
    const cluster = this.$refs.cluster
    if (cluster) {
      cluster.$off()
    }
  },
  methods: {
    handleLockChange(lock) {
      this.closeable = !lock
      this.handleHide()
    },
    styleCreator(feature) {
      return this.cluster
        ? this.createClusterStyle(feature)
        : this.createFeatureStyle(feature)
    },
    createFeatureStyle(feature, clusterSrc, features) {
      const data = feature.get('data')
      const { coordinate, src, effect, text, color: extra_color } = data
      const icon = {
        ...this.imageProps,
        coordinate,
        color: extra_color || this.color,
        src: clusterSrc || src || this.src
      }

      let parsedStyle = {}
      //
      const size = features.length
      const color = size > 25 ? '192,0,0' : size > 8 ? '52,111,158' : '102,205,234'
      const radius = Math.max(8, Math.min(20 * 0.75, 20))
      let dash = 2 * Math.PI * radius / 6
      dash = [0, dash, dash, dash, dash, dash, dash]
      const isIcon = src || this.styleType === 'icon'
      if (isIcon) {
        parsedStyle = parseStyle({ icon })
      } else {
        parsedStyle = parseStyle({
          circle: {
            radius: radius,
            animation: true,
            stroke: {
              width: effect ? 15 : 10,
              lineDash: effect ? dash : undefined,
              color: 'rgba(' + color + ', 0.5)',
              lineCap: 'butt'
            },
            fill: {
              color: extra_color || 'rgb(38,132,158)'
            }
          },
          text: {
            text: size > 1 ? size.toString() : text,
            animation: true,
            fill: {
              color: 'white'
            }
          },
          zIndex: this.zIndex
        })
      }
      return parsedStyle
    },
    createClusterStyle(cluster) {
      const features = cluster.get('features')
      return this.createFeatureStyle(features[0], this.clusterSrc, features)
    },
    activePopup(index) {
      const cluster = this.$refs.cluster
      if (!cluster) return
      const source = cluster.getSource()
      if (!source) return
      const features = source.getFeatures() || []
      const feature = features[index]
      feature && this.showPopup({}, feature)
      this.$emit('onMarkerReady', cluster)
    },
    getFeatureMarkerData(feature) {
      if (!feature) return
      const coordinate = feature.getGeometry().getCoordinates()
      const features = feature.get('features') || []
      const marker = {
        coordinate,
        cluster: false,
        items: []
      }
      if (features.length > 0) {
        marker.items = features.map(f => f.get('data'))
        marker.cluster = true
      } else {
        marker.items = [feature.get('data')]
      }
      return marker
    },
    showPopup(e, feature) {
      this.marker = this.getFeatureMarkerData(feature)
      // && !this.markers.find(m => m.coordinate.join() === marker.coordinate.join())
      if (this.marker) {
        // this.markers = []
        this.markers.push(this.marker)
      }
    },
    pointClickHandler(e, feature) {
      if (!feature) return
      const marker = this.getFeatureMarkerData(feature)
      //聚集点超过一个或 数据中有 show 标志 则不出默认popup
      const isShouldPopup = marker.items.length === 1 && !marker.items.find(item => item.show)

      if (isShouldPopup) {
        this.showPopup({}, feature)
      } else {
        this.$emit('show', this.marker, feature, e)
      }
    },
    handleHide() {
      if (!this.closeable) { return }
      this.$emit('hide', this.marker)
      if (this.marker) {
        this.markers = []
      }
      this.marker = null
    },
    bindEvents() {
      const cluster = this.$refs.cluster
      switch (this.trigger) {
        case 'click':
          cluster.$on('click', this.mode === 'popup' ? this.showPopup : this.pointClickHandler)
          cluster.$on('mouseleave', this.handleHide)
          break
        case 'hover':
          cluster.$on('mouseenter', this.showPopup)
          cluster.$on('mouseleave', this.handleHide)
          break
      }
    },
    draw(data = []) {
      const cluster = this.$refs.cluster
      if (cluster) {
        cluster.draw(data)
      }
    },
    clear() {
      const cluster = this.$refs.cluster
      if (cluster) {
        cluster.clear()
      }
    },
    modify(clear = true) {
      clear && this.clear()
      this.draw(this.markerData)
    }
  }
}
</script>

