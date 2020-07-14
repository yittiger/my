<template>
  <div>
    <el-divider content-position="left">Drawer</el-divider>
    <el-row>
      <el-radio-group v-model="direction">
        <el-radio label="ltr">从左往右开</el-radio>
        <el-radio label="rtl">从右往左开</el-radio>
        <el-radio label="ttb">从上往下开</el-radio>
        <el-radio label="btt">从下往上开</el-radio>
      </el-radio-group>

      <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
        点我打开
      </el-button>

      <el-popconfirm
        title="这是一段内容确定删除吗？"
      >
        <el-button style="margin-left: 30px;" slot="reference">气泡确认</el-button>
      </el-popconfirm>

      <el-drawer
        title="我是标题"
        :visible.sync="drawer"
        :direction="direction"
        :before-close="handleClose">
        <span>我来啦!</span>
      </el-drawer>

    </el-row>

    <el-row>
      <el-popover
        placement="top-start"
        title="标题"
        width="200"
        trigger="hover"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
        <el-button slot="reference">hover 激活</el-button>
      </el-popover>

      <el-popover
        placement="bottom"
        title="标题"
        width="200"
        trigger="click"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
        <el-button style="margin-left: 10px;" slot="reference">click 激活</el-button>
      </el-popover>


    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        drawer: false,
        direction: 'rtl',
        visible: false
      };
    },
    methods: {
      handleClose(done) {
        done();
      }
    }
  };
</script>

<style scoped>

</style>
