<template>
    <div class="my-go-sidebar my-go-inspector"  :class="classes" :style="styles">
        <div class="test-inspector">
            <div class="my-go-inspector__row">
                <div class="my-go-inspector__title" :style="`width: 80px;`">
                    {{objectName}}类型: 
                </div>
                <span  class="my-go-inspector__input" :style="`width: calc(100% - 90px);`" >
                     <el-select v-model="currentCategory" @change="categoryChange"
                     :popper-class="popperClasses"
                      size="mini">
                         <el-option
                            v-for="opt in categoryOptions"
                            :key="opt.value"
                            :label="opt.label"
                            :value="opt.value !== undefined ? opt.value : opt.label">
                            </el-option>
                    </el-select>
                </span>
            </div>
           <InspectorItem :key-array="keyArray" :data="currentNodeData" @change="dataChange"></InspectorItem>
        </div>
    </div>
</template>
<script>
import { cloneDeep } from '$ui/utils/util'
import InspectorItem from './InspectorItem'
import { go } from '$ui/gojs'
const defaultCategoryConfig = [
                            {
                                name: '默认',
                                category: '',
                                keyArray: []
                             }
                         ]
export default {
    name: 'Inspector',
    inject: ['myDiagram'],
    components: {
        InspectorItem
    },
    props: {
        nodeCategorys: {
            type: Array,
            default() {
                return cloneDeep(defaultCategoryConfig)
            }
        },
        linkCategorys: {
            type: Array,
            default() {
                return cloneDeep(defaultCategoryConfig)
            } 
        },
        groupCategorys: {
            type: Array,
            default() {
                return cloneDeep(defaultCategoryConfig)
            }
        }
    },
    data() {
        return {
            collapsed: false,
            width: 320,
            currentNode: null,
            currentNodeData: {},
            currentCategory: '',
            currentNodeType: 'node',
            keyArray: []
        }
    },
    computed: {
        categorys() {
          if(this.currentNode instanceof go.Link) {
                  return this.linkCategorys
           } else if(this.currentNode instanceof go.Group) {
                return this.groupCategorys
           }
            return this.nodeCategorys
        },
        categoryOptions() {
            return this.categorys.map(r => {
                return { label: r.name, value: r.category}
            })
        },
        objectName() {
            if(this.currentNode instanceof go.Link) {
                return '链接'
            } else if(this.currentNode instanceof go.Group) {
                return '分组'
            }
            return '节点'
        },
        classes() {
            return {
                'is-collapsed': !!this.collapsed,
                'is-dark': this.myDiagram?.dark
            }
        },
        popperClasses() {
            return `my-go-inspector__popper ${this.myDiagram?.dark ? 'is-dark' : ''}`;
        },
        styles() {
            const {top, bottom} = this.myDiagram?.rect
            return {
                width: `${this.width}px`,
                top: `${top}px`,
                bottom: `${bottom}px`,
                zIndex: 999
            }
        }
    },
    methods: {
      nodeClick(obj) {
        const selectNode = obj.subject.first()
        if(selectNode) {
            this.currentNode = selectNode
            this.currentNodeData = cloneDeep(selectNode?.data)
            this.setCategory()
        }
      },
      dataChange(data) {
          const model = this.myDiagram.diagram.model
          this.myDiagram.diagram.startTransaction('changeData')
          for(const name in data) { // this.currentNodeData
              if(!['isGroup', '__gohashid', 'key'].includes(name)) {
                  model.set(this.currentNode.data, name, cloneDeep(data[name]))
              }
          }
          this.myDiagram.diagram.commitTransaction('changeData')
      },
      categoryChange(val) {
            const model = this.myDiagram.diagram.model
            this.myDiagram.diagram.startTransaction('changeCategory')
            this.$set(this.currentNodeData, 'category', val)
            this.setCategory()
            model.set(this.currentNode.data, 'category', val)
            this.myDiagram.diagram.commitTransaction('changeCategory')
      },
      setCategory() {
          this.currentCategory = this.currentNodeData.category || ''
          const category = this.categorys.find(r => r.category === this.currentCategory)
            if(category) {
                this.keyArray = cloneDeep(category.keyArray)
            }
      }
    },
    mounted() {
        this.myDiagram.rect.right = this.width
        const selection = this.myDiagram.diagram.selection
        if(selection.count) {
            this.currentNode = selection.first()
        } else {
            this.currentNode = this.myDiagram.diagram.nodes.first()
            this.myDiagram.diagram.select(this.currentNode)
        }
        this.currentNodeData = cloneDeep(this.currentNode.data)
        this.setCategory()
        this.myDiagram.diagram.addDiagramListener('ChangedSelection', this.nodeClick)
    },
    beforeDestroy() {
        this.myDiagram.diagram.removeDiagramListener('ChangedSelection', this.nodeClick)
        let maxSidebarWidth = 0
        this.myDiagram.$children.forEach(com => {
            // 如果diagram下有别的sidebar, 看看是否已折叠，已折叠设0，没折叠比较大小再设置
           if(com.$el.className.indexOf('my-go-sidebar') > -1 && com !== this) {
               if(!com.collapsed) {
                   if(com.width > maxSidebarWidth) {
                       maxSidebarWidth = com.width
                   }
               }
           } 
       })
        this.myDiagram.rect.right = maxSidebarWidth
    }
}
</script>
<style type="text/scss" lang="scss" scoped>

</style>