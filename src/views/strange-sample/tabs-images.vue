<template>
  <my-wrapper title="tabs-images" sub-title="通过el-tabs组件实现图片列表" back fit>
  <div>
    <h4>sample</h4>
    <p>
      场景: 要求横向展示预览图片，当图片过多时，由于版面内容过多，不换行，可以溢出。
    </p>
    <div style="width: 100%; margin:10px auto">
      <el-tabs v-model="activeName" class="image-list">
          <el-tab-pane v-for="i in 20" :key="`img_${i}`"  :name="`img${i}`">
            <div slot="label" class="img-warp" style="width: 120px; height:120px; border: 1px solid;">{{`img${i}`}}</div>
          </el-tab-pane>
      </el-tabs> 
    </div> 
    <h4>sample2</h4>
    <p>
      场景： 这是一个图片展示器，下面切换预览图的控制器可以使用el-tabs 实现
    </p>
    <div style="width: 300px; margin:10px">
      <div class="thumbnail-box">
        <div class="big-img-warp">
          <div class="img">{{showImg}}</div>
        </div>

        <el-tabs v-model="showImg" class="image-list">
          <el-tab-pane v-for="i in 8" :key="`show_${i}`"  :name="`show${i}`">
            <div slot="label" class="img-item" style="width: 40px; height:40px; border: 1px solid;">{{i}}</div>
          </el-tab-pane>
        </el-tabs> 
      </div>
    </div>
  </div>
 </my-wrapper>
</template>
<style lang="scss" scoped>
.image-list.el-tabs{
  /deep/ .el-tabs__header{
    margin-bottom: 0;
  }
  /deep/.el-tabs__item{
    height: auto;
    line-height: 1;
    padding: 10px 5px;
  }
  /deep/.el-tabs__nav-next, /deep/.el-tabs__nav-prev{
    top: 50%;
    transform: translateY(-50%);
  }
  /deep/ .el-tabs__nav{
    font-size:25px; // 解决容器底部出现2px空隙问题
  }
  /deep/ .el-tabs__nav-wrap{
    border: 1px solid #e4e7ed;
    &:after{
      height: 0;
    }
  } 
}
 
.thumbnail-box{
  width: 100%;
  .big-img-warp{
    width: 100%;
    padding-top: 80%;
    border: 1px solid #e4e7ed;
    position: relative;
    margin-bottom: 5px; 
    .img{
      position: absolute;
      top:0;
      bottom: 0;
      width: 100%;
    }
  } 
}
</style>
<script>
export default {
  mixins: [],
  components: {},
  props: {
  },
  data() {
    return {
      activeName: 'img1',
      showImg: 'show1'
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