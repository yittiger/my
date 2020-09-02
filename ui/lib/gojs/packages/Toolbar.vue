<template>
  <div class="my-go-toolbar">
    <template v-for="(item,index) in toolItems">
      <Divider v-if="typeof item==='string'"
               :key="index"
               class="my-go-toolbar__divider"
               direction="vertical"></Divider>
      <ToolbarItem v-else
                   v-bind="item"
                   :key="index"
                   @click="handleClick"></ToolbarItem>
    </template>

  </div>
</template>

<script>

  import {Divider} from 'element-ui'
  import ToolbarItem from './ToolbarItem'
  import tools from '../utils/tools'
  import '$ui/icons/airplane'
  import '$ui/icons/circler-layout'


  const defaultItems = [
    'force',
    'tree',
    'circular',
    'grid',
    '|',
    'test'
  ]

  export default {
    name: 'Toolbar',
    inject: ['myDiagram'],
    components: {
      Divider,
      ToolbarItem
    },
    props: {
      items: {
        type: Array,
        default() {
          return defaultItems
        }
      },
      placement: {
        type: String,
        default: 'top',
        validator(val) {
          return ['left', 'top'].includes(val)
        }
      }
    },
    computed: {
      toolItems() {
        return this.items.map(n => {
          if (typeof n === 'string') {
            return tools[n] || null
          }
          return n
        }).filter(n => !!n)
      }
    },
    methods: {
      handleClick(vm) {
        const {name, type, options} = vm
        switch (type) {
          case 'layout':
            this.myDiagram.layout(name, options)
            break
        }
        this.$emit('click', vm)
      }
    }
  }
</script>

