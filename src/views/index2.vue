<template>
<div style="width: 500px; height: 500px; border: 1px solid;margin: 0 auto">
  <div class="slide-layout">
    <div class="left-warp">
      <div class="resize-bar" style="height: 250px; max-height: 450px" ></div>
      <div class="resize-line"></div>
      <div class="resize-save" ref="scrollWarp"  >
        <div class="left-content">left-content</div>
      </div>                                            
    </div>
    <div class="preview-warp" style="min-width: 50px" ref="previewWarp">
      previewWarp
    </div>
  </div>
</div>
</template>
<style lang="scss" scoped>
</style>
<script>
export default {
  mixins: [],
  components: {},
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

<style lang="scss" scoped>
// @import "~@/style/_vars";
.slide-layout { 
  height: 100%;
  overflow: hidden; 
}
.left-warp {
  width: 100%; 
  position: relative;
  .edit-warp{
    width: 100%;
    height: 100%;
    padding: 15px;
    outline: none; 
  }
}

.preview-warp {
  width: 100%;
  padding: 10px; 
  box-sizing: border-box; 
  overflow-y: auto;
    
}

.resize-save {
  position: absolute;
  top: 0; right: 0px; bottom: 5px; left: 0; 
  overflow-y: hidden;  
}
.resize-bar {
  position: relative; 
  width:  100%;
  resize: vertical; // horizontal;
  cursor: ew-resize;
  cursor: col-resize;
  opacity: 0;
  overflow:  scroll;
  
  &:hover ~ .resize-line,
  &:active ~ .resize-line {
    border-bottom: 1px dashed skyblue;
  }
  &::-webkit-scrollbar {
    position:absolute;
    height: 10px;
    width: 999999px;
  }
}
/* 拖拽线 */
.resize-line {
  position: absolute;
  right: 0; left: 0; bottom: 0;
  border-top: 2px solid #eee;
  border-bottom: 1px solid #bbb;
  pointer-events: none;
} 

/* Firefox只有下面一小块区域可以拉伸 */
@supports (-moz-user-select: none) {
  .resize-bar:hover ~ .resize-line,
  .resize-bar:active ~ .resize-line {
      border-bottom: 1px solid #bbb;
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