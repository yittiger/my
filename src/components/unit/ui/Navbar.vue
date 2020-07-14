<template>

  <div>
    <el-divider content-position="left">Navbar</el-divider>
    <el-row>


      <el-radio-group v-model="theme">
        <el-radio-button label="light">light</el-radio-button>
        <el-radio-button label="dark">dark</el-radio-button>
        <el-radio-button label="primary">primary</el-radio-button>
        <el-radio-button label="gradual">gradual</el-radio-button>
        <el-radio-button label="black">black</el-radio-button>
      </el-radio-group>
      <div style="margin-top: 20px;">
        <my-navbar :logo="logo"
                   :theme="theme"
                   @select="handleSelect"
                   title="MyWeb Demo System"
                   version="4.0"
                   :menus="menus">
          <template v-slot:actions>
            <UserAction username="Admin" extra="超级管理员" :avatar="{theme: 'primary'}"></UserAction>
            <IconAction icon="el-icon-message-solid" :badge="12"></IconAction>
            <IconAction icon="icon-poweroff" svg></IconAction>
          </template>
        </my-navbar>
      </div>
    </el-row>
  </div>
</template>

<script>
  import {MyNavbar} from '$ui'
  import logo from '$ui/assets/xdh.png'
  import '$ui/icons/poweroff'

  const {IconAction, UserAction} = MyNavbar

  const menus = [
    {
      icon: 'el-icon-setting',
      text: '导航菜单一',
      index: '/one',
      trigger: 'event'
    },
    {
      icon: 'el-icon-s-marketing',
      text: '导航菜单二',
      index: '/two',
      disabled: true
    },
    {
      icon: 'el-icon-s-data',
      text: '导航菜单三',
      index: '/three',
      children: [
        {
          group: true,
          title: '分组一',
          index: 1,
          children: [
            {
              text: '选项一',
              icon: 'el-icon-tickets',
              index: '/three/1'
            },
            {
              text: '选项二',
              icon: 'el-icon-tickets',
              index: '/three/2'
            }
          ]
        },
        {
          group: true,
          title: '分组二',
          index: 2,
          children: [
            {
              text: '选项三',
              icon: 'el-icon-tickets',
              index: '/three/3'
            },
            {
              text: '选项四',
              icon: 'el-icon-tickets',
              index: '/three/4'
            }
          ]
        }
      ]
    },
    {
      icon: 'el-icon-menu',
      text: '导航菜单四',
      index: '/four'
    },
    {
      icon: 'el-icon-share',
      text: '导航菜单五',
      index: '/five',
      children: [
        {
          text: '选项一',
          icon: 'el-icon-tickets',
          index: '/five/1'
        },
        {
          text: '选项二',
          icon: 'el-icon-tickets',
          index: '/five/2'
        }
      ]
    }
  ]
  export default {
    components: {
      MyNavbar,
      IconAction,
      UserAction
    },
    data() {
      return {
        logo: logo,
        menus: menus,
        theme: 'light'
      }
    },
    methods: {
      handleSelect(item) {
        console.log('select', item)
      }
    }
  }
</script>
