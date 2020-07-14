<template>
  <div class="table-origin">
    <el-divider content-position="left">Detail</el-divider>
    <el-row>
      <el-radio-group v-model="size" style="margin: 20px 0;">
        <el-radio label="default">default</el-radio>
        <el-radio label="middle">middle</el-radio>
        <el-radio label="small">small</el-radio>
      </el-radio-group>
      <my-detail title="用户信息" border :size="size">
        <my-detail-item label="名称">张三</my-detail-item>
        <my-detail-item label="电话">020-88888888</my-detail-item>
        <my-detail-item label="籍贯">广东 广州</my-detail-item>
        <my-detail-item label="备注">无</my-detail-item>
        <my-detail-item label="地址">广东省广州市越秀区东风东路</my-detail-item>
      </my-detail>
    </el-row>
    <el-row>
      <my-detail title="用户信息" border layout="vertical">
        <my-detail-item label="名称">张三</my-detail-item>
        <my-detail-item label="电话">020-88888888</my-detail-item>
        <my-detail-item label="籍贯">广东 广州</my-detail-item>
        <my-detail-item label="备注">无</my-detail-item>
        <my-detail-item label="地址">广东省广州市越秀区东风东路</my-detail-item>
      </my-detail>
    </el-row>
    <el-row>
      <my-highlight :keys="['项目工程化方案', '前端微服务']">
        MyWeb是一套为前端开发者准备的基于Vue的项目工程化方案。
        专注于公检法行业中台系统快速搭建，框架已在多个项目实战检验。
        搭配代码生成器，可生成api调用、vuex管理、模拟数据代码；
        内置常用超过70个组件、扩展；子模块支持前端微服务，可以批量编译打包；独立开发、运行、部署；支持更新升级。
      </my-highlight>
    </el-row>
  </div>
</template>

<script>
  import {MyDetail, MyDetailItem} from '$ui'

  export default {
    components: {
      MyDetail,
      MyDetailItem
    },
    data() {
      return {
        size: 'default'
      }
    }
  }
</script>
