<template>
  <div>
    <template v-if="!toggleHeatToCluster">
      <my-map-heat ref="mapHeatInst" v-bind="$attrs" v-on="$listeners" />
    </template>
    <template v-else>
      <my-map-marker
        ref="mapMarkerInst"
        v-bind="$attrs"
        v-on="$listeners"
      >
        <template v-slot="{marker}">
          <slot name="marker" :marker="marker">
          </slot>
        </template>
      </my-map-marker>
    </template>
  </div>
</template>

<script>
/**
 * 热力图-标记组件
 * @module $ui/map/my-map-heat-marker
 *
 */
import MyMapHeat from '../my-map-heat'
import MyMapMarker from '../my-map-marker'
export default {
  name: 'MyHeatMarker',
  inject: ['myMap'],
  components: {
    MyMapHeat,
    MyMapMarker
  },
  props: {
    // 热力图和Marker组件切换时的地图层级
    toggleLevel: {
    type: Number,
    default() {
        return 12 // webgl or canvas
        }
    }
  },
  data() {
    return {
      toggleHeatToCluster: true
    }
  },
  watch: {

  },
  async mounted() {
    await this.$nextTick()
    this.myMap.map.on('moveend', this.onMapMoveend)
  },
  methods: {
    onMapMoveend(olInstance) {
      this.toggleHeatToCluster = olInstance.map.getView().getZoom() >= this.toggleLevel
    }
  }
}
</script>

<style scoped>

</style>
