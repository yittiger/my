<template>
  <my-dv-page target="parent" fit>
    <my-dv-box  x-align="center"
      y-align="middle"
      width="80%"
      height="80%" style="background: rgba(255,0,0,0.2)"
    >
      <pie-chart></pie-chart>
      <!-- <my-chart :options="option" width="100%" height="100%"></my-chart>  -->
    </my-dv-box> 
  </my-dv-page> 
</template>
<style lang="scss" scoped>
</style>
<script>
import PieChart from '@/components/pie-chart'
export default {
  mixins: [],
  components: {PieChart},
  props: {
  },
  data() {
    return {
      
    }
  },
  computed: {
  },
  methods: {
  },
  created() {},
  mounted() {}
}
</script>