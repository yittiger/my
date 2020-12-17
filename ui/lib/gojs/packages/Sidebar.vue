<template>
  <div class="my-go-sidebar" :class="classes" :style="styles">
    <slot></slot>
    <div class="my-go-sidebar__collapsible" :style="arrowStyle" @click="handleCollapse">
      <i :class="arrow"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Sidebar',
    inject: ['myDiagram'],
    props: {
      width: {
        type: Number,
        default: 300
      },
      collapsible: Boolean,
      collapsed: Boolean,
      zIndex: Number,
      arrowStyle: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      classes() {
        return {
          'is-collapsed': !!this.collapsed,
          'is-dark': this.myDiagram?.dark
        }
      },
      styles() {
        const {top, bottom} = this.myDiagram?.rect
        return {
          width: `${this.width}px`,
          top: `${top}px`,
          bottom: `${bottom}px`,
          'z-index': `${this.zIndex || 2}`
        }
      },
      arrow() {
        return this.collapsed ? 'el-icon-arrow-left' : 'el-icon-arrow-right'
      }
    },
    watch: {
      collapsed: {
        immediate: true,
        handler(val) {
          this.myDiagram.rect.right = this.getMaxSidebarWidth()
        }
      }
    },
    methods: {
      handleCollapse() {
        this.$emit('update:collapsed', !this.collapsed)
      },
      getMaxSidebarWidth() {
        let maxSidebarWidth = 0
        this.myDiagram.$children.forEach(com => {
            // 如果diagram下有别的sidebar, 看看是否已折叠，已折叠设0，没折叠比较大小再设置
           if(com.$el && com.$el.className.indexOf('my-go-sidebar') > -1) {
               if(!com.collapsed) {
                   if(com.width > maxSidebarWidth) {
                       maxSidebarWidth = com.width
                   }
               }
           } else if(com.$el && com.$el.className.indexOf('my-go-toolbar') > -1) {
              const searchResult = com.$children.find(toolCom => toolCom.$el && toolCom.$el.className.indexOf('my-go-sidebar') > -1)
              if(searchResult) {
                 maxSidebarWidth = searchResult.width
              }
           }
        })
        return maxSidebarWidth
      }
    },
    beforeDestroy() {
      this.myDiagram.rect.right = this.getMaxSidebarWidth()
    }
  }
</script>
