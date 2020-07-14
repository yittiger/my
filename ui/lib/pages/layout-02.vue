<template>
  <my-pro fixed
          mode="both"
          :logo="logo"
          :title="title"
          :menus="menus"
          :menu-props="{router: true}"
          navbar-theme="gradual"
          sidebar-theme="light"
          :rainbow="false"
          :document-title="createDocumentTitle"
          :tab="createTab">

    <!-- 头部工具按钮 -->
    <template v-slot:actions>
      <UserAction :dropdown-items="dropdown"
                  username="Admin"
                  extra="超级管理员"
                  :avatar="{theme: 'primary'}"></UserAction>
      <IconAction icon="el-icon-message-solid" :badge="12"></IconAction>
      <IconAction icon="icon-poweroff" svg></IconAction>
    </template>

    <!-- 加载子路由页面 -->
    <router-view></router-view>

  </my-pro>
</template>

<script>
  import logo from '$ui/assets/police.png'
  import {MyPro} from '$ui'
  import '$ui/icons/poweroff'

  const {IconAction, UserAction} = MyPro
  // 导航菜单数据
  const menus = [
    {
      icon: 'el-icon-setting',
      text: '工作台',
      index: '/ui/pages/layout/?t=0'
    },
    {
      icon: 'el-icon-s-marketing',
      text: '导航菜单二',
      index: '/ui/',
      children: [
        {
          icon: 'el-icon-document',
          text: '子菜单三',
          index: '/ui/pages/layout/?t=1'
        },
        {
          icon: 'el-icon-document',
          text: '子菜单四',
          index: '/ui/pages/layout/?t=2'
        }
      ]
    }
  ]
  export default {
    components: {
      MyPro,
      IconAction,
      UserAction
    },
    data() {
      return {
        logo: logo,
        title: '页面模板演示系统',
        menus: menus,
        dropdown: [
          {
            text: '个人信息'
          },
          {
            text: '修改密码'
          }
        ]
      }
    },
    methods: {
      // 页面标题构建函数，可根据匹配的路由返回响应的标题名称
      createDocumentTitle(matched) {
        return matched.meta.title || 'MyWeb 4.x'
      },
      createTab(fullPath, matched) {
        if (!matched) return null
        const {tab, icon, closable} = matched.meta || {}
        if (tab) {
          return {
            label: tab,
            value: fullPath,
            icon,
            closable
          }
        }
        return {
          label: '工作台',
          value: '/',
          icon: 'el-icon-setting',
          closable: false
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .my-pro {
    height: 100vh;
  }
</style>
