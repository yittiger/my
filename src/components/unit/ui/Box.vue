<template>
  <div>
    <el-divider content-position="left">Box</el-divider>
    <el-row>
      <my-container shadow border>Container</my-container>
      <my-container shadow border theme="primary">Container</my-container>
      <my-container shadow border theme="success">Container</my-container>
      <my-container shadow border theme="warning">Container</my-container>
      <my-container shadow border theme="danger">Container</my-container>
      <my-container shadow border theme="info">Container</my-container>
    </el-row>
    <el-row>
      <el-button type="primary" @click="open1">Primary</el-button>
      <el-button type="primary" @click="open2">Light</el-button>
      <el-button type="primary" @click="open3">Dark</el-button>
      <my-dialog :visible.sync="visible1"
                 target="body"
                 theme="primary"
                 icon="el-icon-menu"
                 title="标题文字"
                 draggable
                 resizable
                 maximizable
                 minimizable
                 width="400px"
                 height="200px">
        这里是内容
      </my-dialog>
      <my-dialog :visible.sync="visible2"
                 theme="light"
                 target="body"
                 icon="el-icon-menu"
                 title="标题文字"
                 draggable
                 resizable
                 maximizable
                 minimizable
                 width="400px"
                 height="200px">
        这里是内容
      </my-dialog>
      <my-dialog :visible.sync="visible3"
                 theme="dark"
                 target="body"
                 icon="el-icon-menu"
                 title="标题文字"
                 draggable
                 resizable
                 maximizable
                 minimizable
                 width="400px"
                 height="200px">
        这里是内容
      </my-dialog>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <my-panel title="容器标题" icon="el-icon-menu">
          默认风格
          <template v-slot:footer>底部</template>
        </my-panel>
      </el-col>
      <el-col :span="8">
        <my-panel title="容器标题" theme="background" icon="el-icon-menu">
          头部加背景
          <template v-slot:footer>底部</template>
        </my-panel>
      </el-col>
      <el-col :span="8">
        <my-panel title="容器标题" theme="border-top" icon="el-icon-menu">
          顶部加边框
          <template v-slot:footer>底部</template>
        </my-panel>
      </el-col>

    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <my-panel title="容器标题" theme="border-left">
          标题左边框
          <template v-slot:footer>底部</template>
        </my-panel>
      </el-col>
      <el-col :span="8">
        <my-panel title="容器标题" theme="flag" icon="el-icon-menu">
          标题标志
          <template v-slot:footer>底部</template>
        </my-panel>
      </el-col>
    </el-row>
    <el-divider content-position="left">Wrapper</el-divider>
    <el-row>
      <my-wrapper title="页面标题"
                  sub-title="我是子标题"
                  back
                  :split="true"
                  :links="links"
                  :default-active-link="1"
                  :breadcrumb="breadcrumb">
        <template v-slot:extra>
          简要说明文字简要说明文字简要说明文字简要说明文字简要说明文字简要说明文字简要说明文字简要说明文字简要说明文字
        </template>

        <template v-slot:actions>
          <el-button-group>
            <el-button size="small" type="default">操作一</el-button>
            <el-button size="small" type="default">操作二</el-button>
          </el-button-group>
          <el-button size="small" type="primary">主操作</el-button>
          <el-dropdown type="default" size="small">
            <el-button type="text" icon="el-icon-more"></el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item>双皮奶</el-dropdown-item>
              <el-dropdown-item>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>

        <my-container>子容器内容</my-container>
        <my-container>子容器内容</my-container>

        <div>
          页面主要内容，页面主要内容，页面主要内容，页面主要内容，页面主要内容
        </div>


      </my-wrapper>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        visible1: false,
        visible2: false,
        visible3: false,
        breadcrumb: [
          {
            label: '首页',
            to: '/'
          },
          {label: '应用列表'},
          {label: '应用详情'}
        ],
        links: [
          {
            label: '详情',
            value: 1
          },
          {
            label: '规则',
            value: 2
          }
        ]
      }

    },
    methods: {
      open1() {
        this.visible1 = true
      },
      open2() {
        this.visible2 = true
      },
      open3() {
        this.visible3 = true
      }
    }
  }
</script>

<style scoped>

</style>
