<template>
<div class="warp" >
  <div style="height: 380px; width: 380px; border: 1px dashed">
    <my-svg-line type="left-top" :angle="130.5" :during="3"></my-svg-line>
  </div>
</div>
</template>
<script>
// import {MySvgLine} from '$ui'
export default {
  components: {
    // MySvgLine
  }
}
</script> 
<style lang="scss" scoped>
.warp{
  height: 400px;
  display: flex; 
  flex-flow: column;
  align-items: center;
  justify-content: center;
}
</style>  