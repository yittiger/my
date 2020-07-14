<template>
  <div>
    <el-divider content-position="left">Contextmenu</el-divider>
    <el-row>
      <my-contextmenu ref="contextmenus1" :data="menu" @click="click1" theme="dark">
      </my-contextmenu>
      <div class="action-box" v-contextmenu:contextmenus1>
        右键触发区域
      </div>
    </el-row>
  </div>
</template>

<script>
  import contextmenu from '$ui/directives/contextmenu'

  export default {
    components: {},
    directives: {
      contextmenu: contextmenu
    },
    data() {
      return {
        menu: [
          {
            title: '菜单A'
          },
          {
            icon: 'iconfont el-icon-phone my-icon',
            title: '菜单A',
            divider: true,
            children: [
              {
                icon: 'iconfont el-icon-platform-eleme my-icon',
                title: '菜单菜单菜单B-1'
              },
              {
                title: '菜单B-2',
                disabled: true
              },
              {
                icon: 'iconfont el-icon-platform-eleme my-icon',
                title: '菜单B-3'
              }
            ]
          },
          {
            icon: 'iconfont el-icon-platform-eleme my-icon',
            title: '菜单C'
          }
        ]
      }
    },
    methods: {
      click1(item, vm, event) {
        // 处理点击菜单后的触发动作
        this.$message.success(`点击了${item.title}`)
      }
    }

  }
</script>
<style lang="scss" scoped>
  @import "~@/style/_vars.scss";

  .action-box {
    height: 150px;
    width: 100%;
    text-align: center;
    line-height: 150px;
    font-size: 3rem;
    background-color: $--color-background;
    color: $--color-normal-text;
    font-weight: bold;
  }
</style>
