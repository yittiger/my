<template>
  <div class="warp">
     
    <!-- <div style="width: 40%; height: 50px; border: 1px solid red">
      <my-svg-line type="left-top" :angle="130.5"></my-svg-line>
    </div>  -->
    <!-- left-start/left-end/right-start/right-end -->
    <my-popper placement="right-start" :svg-width="120" :svg-height="30" :svg-props="{'angle': 140}">
      <div style="width: 140px; height: 60px; border: 1px solid; border-raidus: 5px"></div>
      <el-button slot="reference">click 激活</el-button>
    </my-popper>
     
  </div>
</template>
<script>
// import MPopper from '@/components/m-popper'
export default {
  components: {
    // MPopper
  },
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
  created() {
  },
  mounted() {
     
     
  }
}
</script>
<style lang="scss" scoped>
.warp{
  height: 100%;
  width: 100%;
  display: flex; 
  flex-flow: column;
  align-items: center;
  justify-content: center;
}


</style>

// <style lang="scss" >
//   .el-popover.el-popper.my-theme-popup{
//     background: transparent !important;
//     box-shadow: none !important;
//     border: 1px solid !important;
//     padding: 0px !important;
//     min-width: 0;
//     .popper__arrow{
//       display: none;
//     }
//   }
 
// </style>