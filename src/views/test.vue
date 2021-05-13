<template>
  <div style="width: 400px; margin:10px auto">
     <el-tabs v-model="activeName" class="image-list">
        <el-tab-pane  name="first">
          <div slot="label" class="img-warp"></div>
        </el-tab-pane>
        <el-tab-pane name="second">
          <div slot="label" class="img-warp"></div>
        </el-tab-pane>
        <el-tab-pane name="third">
          <div slot="label" class="img-warp"></div>
        </el-tab-pane>
        <el-tab-pane name="fourth">
          <div slot="label" class="img-warp"></div>
        </el-tab-pane>
        <!-- <el-tab-pane label="" name="fifth"></el-tab-pane>
        <el-tab-pane label="" name="sixth"></el-tab-pane> -->

    </el-tabs>
  </div>
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
  .img-warp{
    width: 120px;
    height:120px;
    border: 1px solid;
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
      activeName: 'first'
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