<template>
  <div>
    <div class="warp">
      <svg-line :width="300" :height="50" type="left-top" :angle="170.5"></svg-line>
    </div>
  </div>
</template>
<script>
import SvgLine from '@/components/svg-line'
export default {
  components: {
    SvgLine
  },
  props: {
    
  },
  data() {
    return {
      size: 1,
      width: 200,
      height: 50,


      dark: '#1890FF',
      light: 'red',
      time: 4,
      show: false
    }
  },
  computed: {
  },
  methods: {
    
  },
  created() {
  },
  mounted() {
    setTimeout(() => {
      this.show = true
    }, 200) 
     
  }
}
</script>
<style lang="scss" scoped>
.warp{
  border: 1px solid;
  padding: 10px;
  // background: yellow;
}
</style>