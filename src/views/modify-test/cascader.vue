<template>
  <div class="table-origin">
   <my-detail title="用户信息" >
      <my-detail-item label="电话电话名称">http://localhost:8801/#/modify-test/cascader_test12345678http://localhost:8801/#/modify-test/cascader_test12345678</my-detail-item>
      <my-detail-item label="电话">020-88888888</my-detail-item>
      <my-detail-item label="籍贯">广东 广州</my-detail-item>
      <my-detail-item label="备注">无</my-detail-item>
      <my-detail-item label="地址">广东省广州市越秀区东风东路</my-detail-item>
   </my-detail>

    <el-row>
    <el-col :span="8">
      <my-description title="标题左对齐" :width="100">
        <div style="word-wrap: break-word; overflow:hidden; word-break:break-all">
          http://localhost:8801/#/modify-test/cascader_test12345678http://localhost:8801/#/modify-test/cascader_test12345678
        </div>
      </my-description>  
    </el-col>
    <el-col :span="8">
      <my-description title="标题居中" :width="100" align="center">数据项内容</my-description> 
    </el-col>
    <el-col :span="8">
      <my-description title="标题右对齐" :width="100" align="right">数据项内容</my-description> 
    </el-col>
    <el-col :span="8">
      <my-description title="标题右对齐" :width="100" align="right">数据项内容</my-description> 
    </el-col>
  </el-row>
   </div>
</template>
<script>
export default {
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
  created() {
  },
  mounted() {
  }
}
</script>
<style lang="scss" scoped>
.table-origin, .demo {
  table {
    margin: initial;
    display: table;
  }

  tr, td, th {
    border: initial;
  }

  tr:nth-child(2n) {
    background-color: initial;
  }

}
</style>