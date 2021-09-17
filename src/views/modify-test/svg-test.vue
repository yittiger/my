<template>
  <div>
    <!-- <div class="warp">
      <svg-line :width="300" :height="50" type="left-top" :angle="170.5"></svg-line>
    </div> -->

     <el-popover
      popper-class="my-theme-popup"
      placement="right-start"
      width="auto"
      trigger="click">
      <div>
        <svg-line :width="70" :height="20" type="left-top" :angle="145" :during="2"></svg-line>
        <div style="width: 280px; height: 150px; border: 1px solid; border-raidus: 5px"></div>
      </div>
      <el-button slot="reference">click 激活</el-button>
    </el-popover>
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

<style lang="scss" >
  .el-popover.el-popper.my-theme-popup{
    background: transparent !important;
    box-shadow: none !important;
    border: 0px solid !important;
    padding: 0px !important;
    min-width: 0;
    .popper__arrow{
      display: none;
    }
  }
 
</style>