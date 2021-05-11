<template>
 <div style="width: 90%; height: 100%; border: 1px solid;margin: 0 auto">
   <my-slide-layout type="horizontal" :edage-width="40" @on-resize="handle">
     <div slot="odd" style="width: 100%; height: 100%;background: lightgreen">left</div>
     <div slot="even" style="width: 100%; height: 100%;background: pink">right</div>
   </my-slide-layout>
   
 </div>
</template>
<script>
// import SlideLayout from '@/components/slide-layout'
export default {
  components: {
    // SlideLayout
  },
  methods: {
    handle(e) {
      console.log(e)
    }
  }
}
</script>
<style lang="scss" scoped>
// @import "~@/style/_vars";
 
.slide-layout { 
  height: 100%;
  overflow: hidden; 

}
.left-warp {
  height: 100%; 
  position: relative;
  float: left; 
  // width: 50%;
  // max-width: 95%;
  .edit-warp{
    width: 100%;
    height: 100%;
    padding: 15px;
    outline: none;
    /deep/ .img-text{
      color: red; // $blue-5;
    }
  }
}

.right-warp {
  height: 100%; 
  box-sizing: border-box;
  // overflow-x: hidden;
  overflow-y: auto; 
}

.resize-save {
  position: absolute;
  top: 0; right: 5px; bottom: 0; left: 0; 
  overflow-x: hidden; 
}
.resize-bar {
  position: relative;
  // width: 250px; 
  height:  100%;
  resize: horizontal;
  cursor: ew-resize;
  cursor: col-resize;
  opacity: 0;
  overflow:  scroll;
  
  &:hover ~ .resize-line,
  &:active ~ .resize-line {
    border-left: 1px dashed skyblue;
  }
  &::-webkit-scrollbar {
    position:absolute;
    width: 10px;
    height: 999999px;
  }
}
/* 拖拽线 */
.resize-line {
  position: absolute;
  right: 0; top: 0; bottom: 0;
  border-right: 2px solid #eee;
  border-left: 1px solid #bbb;
  pointer-events: none;
} 

/* Firefox只有下面一小块区域可以拉伸 */
@supports (-moz-user-select: none) {
  .resize-bar:hover ~ .resize-line,
  .resize-bar:active ~ .resize-line {
      border-left: 1px solid #bbb;
  }
  .resize-bar:hover ~ .resize-line::after,
  .resize-bar:active ~ .resize-line::after {
      content: '';
      position: absolute;
      width: 16px; height: 16px;
      bottom: 0; right: -8px;
      // background: url(./resize.svg);
      background-size: 100% 100%;
  }
}
</style>