<template>
  <div style="height: 100%; background: #fff;">

    <my-contextmenu :data="menus" theme="light" @click="handleClick"></my-contextmenu>

    <Diagram fit height="500px" :init="init" :nodes="nodes" :links="links"></Diagram>
  </div>


</template>

<script>
  import {Diagram, init, icon, link, theme} from '$ui/gojs'
  import Avatar from '@/assets/avatar.jpeg'
  import '$ui/icons/audio'
  // import avatar from '$ui/gojs/sources/QQ1.png'

  export default {
    components: {
      Diagram
    },
    data() {
      return {
        menus: [
          {icon: 'el-icon-view', label: '查看'},
          {icon: 'el-icon-edit', label: '编辑'},
          {
            icon: 'el-icon-finished',
            label: '完成',
            children: [
              {label: '二级菜单'},
              {label: '二级菜单'},
              {label: '二级菜单'},
              {label: '二级菜单'}
            ]
          },
          {icon: 'el-icon-delete', label: '删除'},
          {divider: true},
          {icon: 'el-icon-document', label: '属性'}
        ],
        nodes: [
          {key: 'Alpha', selected: true},
          {key: 'Beta', selected: false}
        ],
        links: [
          {key: 1, from: 'Alpha', to: 'Beta'}
        ]
      }
    },
    methods: {
      handleClick(item, vm) {
        console.log(item, vm)
      },
      init($, go) {
        const diagram = init()
        diagram.nodeTemplate = icon({
          tooltip: {
            text: {
              $bindings: [
                new go.Binding('text', 'key')
              ]
            }
          },
          label: {
            $bindings: [
              new go.Binding('text', 'key')
            ]
          },
          image: {
            source: Avatar
          },
          $events: {
            click(e, obj) {
              console.log('click')
              obj.movable = !obj.movable
              // obj.isEnabled = !obj.isEnabled
              setTimeout(() => {
                obj.movable = !obj.movable
                // obj.isEnabled = !obj.isEnabled
              }, 2000)
            }
          },
          $bindings: [
            new go.Binding('isSelected', 'selected')
          ]
        }, theme.color2)

        diagram.linkTemplate = link({
          label: {
            $bindings: [
              new go.Binding('text', 'key', (v, o) => {
                const data = diagram.model.findLinkDataForKey(o.part.key)
                return data.from + '->' + data.to
              })
            ]
          }
        })
        return diagram
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
