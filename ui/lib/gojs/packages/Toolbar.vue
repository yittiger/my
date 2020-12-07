<template>
  <div class="my-go-toolbar" :class="classes">
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
    <search-result ref="searchResult" v-if="searchActive" v-bind="searchProp"></search-result>
    <Inspector ref="inspector"  v-if="inspectorActive" v-bind="inspectorProp"></Inspector>
  </div>
</template>

<script>

  import {Divider} from 'element-ui'
  import ToolbarItem from './ToolbarItem'
  import SearchResult from './SearchResult'
  import Inspector from './Inspector'
  import tools from '../utils/tools'
  import { getShortestPath, getChain, toList, linksTrack, go } from '../utils/lib'

  const defaultItems = [
    'json',
    'image',
    '|',
    'undo',
    'redo',
    '|',
    'circle',
    'tree',
    'network',
    'grid',
    '|',
    'hide',
    'show',
    'uniform',
    'select',
    'invert',
    '|',
    'zoomIn',
    'zoomOut',
    '|',
    'shortestPath',
    'search',
    'inspector'
  ]

  export default {
    name: 'Toolbar',
    inject: ['myDiagram'],
    components: {
      Divider,
      ToolbarItem,
      SearchResult,
      Inspector
    },
    props: {
      items: {
        type: Array,
        default() {
          return defaultItems
        }
      },
      searchProp: {
        type: Object,
        default() {
          return {}
        }
      },
      inspectorProp: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        searchActive: false,
        inspectorActive: false
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
      },
      classes() {
        return {
          'is-dark': this.myDiagram?.dark
        }
      }
    },
    methods: {
      handleClick(vm) {
        const {name, type, options} = vm
        switch (type) {
          case 'layout':
            this.myDiagram.layout(name, options)
            break
          case 'undo':
            this.undo()
            break
          case 'redo':
            this.redo()
            break
          case 'uniform':
            this.myDiagram.uniform()
            break
          case 'select':
            if (name === 'select') {
              this.myDiagram.select()
            } else {
              this.myDiagram.selectInvert()
            }
            break
          case 'zoom':
            if (name === 'in') {
              this.zoomIn()
            } else {
              this.zoomOut()
            }
            break
          case 'hide':
            this.myDiagram.hide(this.myDiagram?.diagram.selection)
            break
          case 'show':
            this.myDiagram.show()
            break
          case 'export':
            this.exportFile(name)
            break
          case 'shortestPath':
            this.findShortestPath(vm)
            break
          case 'search':
            this.searchNode(vm)
            break
          case 'inspector':
            this.showInspector(vm)
        }
        this.$emit('click', vm)
      },
      undo() {
        const r = this.myDiagram.undo()
        if (!r) {
          this.$message.warning('没有可撤销项')
        }
      },
      redo() {
        const r = this.myDiagram.redo()
        if (!r) {
          this.$message.warning('没有重做项')
        }
      },
      zoomIn() {
        const diagram = this.myDiagram.diagram
        diagram.scale *= 1.1
      },
      zoomOut() {
        const diagram = this.myDiagram.diagram
        diagram.scale *= 0.9
      },
      exportFile(name) {
        switch (name) {
          case 'image':
            this.myDiagram.toImage()
            break
          case 'json':
            this.myDiagram.toJson()
            break
          case 'excel':
            break
        }
      },
      findShortestPath({options}) {
         const diagram = this.myDiagram.diagram
         const selection = toList(diagram.selection)
         if(selection.length !== 2) {
           this.$message({
             type: 'warning',
             message: '请选择两个节点'
           })
           return
         }
         const minPath = getShortestPath(diagram, selection[0].key, selection[1].key)
         const { chain, links } = getChain(diagram, minPath)
         const model = diagram.model
         diagram.startTransaction('highlightNodeAndLink')
         model.set(model.modelData, 'myGoIsHighlighting', true)
         diagram.commitTransaction('highlightNodeAndLink')
         switch(options.resultMode) {
           case 'highlight': 
           diagram.highlightCollection(chain);
           break;
           case 'select': 
           diagram.selectCollection(chain); 
           break;
         }
         // 如果每次新建一个animation，有可能会造成内存泄漏
         if(!diagram._linkTrackAnimation) {
           diagram._linkTrackAnimation = new go.Animation()
         }
         linksTrack(links, diagram, diagram._linkTrackAnimation)
      },
      searchNode(vm) {
        vm.isActive = !vm.isActive
        this.searchActive = vm.isActive
        if(this.searchActive) {
          this.$nextTick(() => {
              const searchResultEl = this.$refs.searchResult.$el
              this.myDiagram.$el.append(searchResultEl)
          })
        }
      },
      showInspector(vm) {
        vm.isActive = !vm.isActive
        this.inspectorActive = vm.isActive
        if(this.inspectorActive) {
          this.$nextTick(() => {
              const inspectorEl = this.$refs.inspector.$el
              this.myDiagram.$el.append(inspectorEl)
          })
        }
      }
    },
    created() {
      this.myDiagram.rect.top = 50
    },
    beforeDestroy() {
      this.myDiagram.rect.top = 0
    }
  }
</script>

