<template>
    <div class="my-go-sidebar my-go-result-search" :class="classes" :style="styles">
        <div class="my-go-result-search__input" @keyup.enter="search">
            <el-input size="small" v-model="keyword">
                <MyIcon slot="append" name="el-icon-search" @click="search"></MyIcon>
            </el-input>
        </div>
        <div class="my-go-result-search__panel">
            <div class="my-go-result-search__panel-title" v-if="mode.includes('node')">节点数: {{resultNodes.length}}</div>
           <div :class="['my-go-result-search__nodes', {'is-full': !mode.includes('link')}]"  v-if="mode.includes('node')">
               <div class="my-go-result-search__container">
                    <Palette :dark="myDiagram.dark" ref="nodePalette" :highlight-mode="'none'" width="100%" height="100%"></Palette>
               </div>
           </div>
            <div class="my-go-result-search__panel-title"  v-if="mode.includes('link')">链接数: {{resultLinks.length}}</div>
           <div :class="['my-go-result-search__nodes', {'is-full': !mode.includes('node')}]"  v-if="mode.includes('link')">
                <div class="my-go-result-search__container">
                    <Palette :dark="myDiagram.dark" ref="linkPalette" :highlight-mode="'none'" width="100%" height="100%"></Palette>
                </div>
           </div>
        </div>
    </div>
</template>
<script>
import {MyIcon} from '$ui'
import { go, $, linkTrack } from '$ui/gojs'
import Palette from './Diagram'
// 焦点动画
const focusNode = function(go, vm, scale) {
    return $(go.Part, 'Spot', 
       {name: 'focusShape', movable: false, scale: scale, locationSpot: go.Spot.Center, visible: false}, 
        $(go.Shape, 'Circle', {
            name: 'circle1',
            fill: 'transparent',
            stroke: vm.dark ? 'rgba(173, 198, 255, 0.5)' : 'rgba(0, 80, 179, 0.7)', 
            strokeWidth: 6, 
            strokeDashArray: [19, 15.54, 19, 15.54],
            width: 110, 
            height: 110
        }),
        $(go.Shape, 'Circle', {
            name: 'circle2',
            fill: 'transparent',
            stroke: vm.dark ? 'rgba(173, 198, 255, 0.5)' : 'rgba(0, 80, 179, 0.7)', 
            strokeWidth: 3, 
            strokeDashArray: [60, 18.5, 60, 18.5],
            width: 150, 
            height: 150
        })
    )
}
export default {
    name: 'SearchResult',
    inject: ['myDiagram'],
    components: {
        MyIcon,
        Palette
    },
    props: {
        ignoreCase: {
            type: Boolean,
            default: true
        },
        // 搜索节点的key
        nodeKeys: {
            type: Array,
            default() {
                return ['text']
            }
        },
        // 搜索连接的key
        linkKeys: {
            type: Array,
            default() {
                return ['text']
            }
        },
        // 搜索模式， 可以只搜索节点或者连接，或者两者都搜索
        mode: {
            type: String,
            default() {
                return 'node,link'
            },
            validator(val) {
                return ['node', 'link', 'node,link', 'link,node'].includes(val)
            }
        },
        focusAnimation: {
           type: Boolean,
           default: true
        },
        focusScale: {
            type: Number,
            default: 1
        }
    },
    data() {
        return {
            collapsed: false,
            width: 320,
            keyword: '',
            // 用于放置搜索关键词，如果关键词不变，顺次查找下一个节点
            keywordCache: '',
            // 用来放置搜索的结果数组，与index结合实现查找下一个功能
            index: 0,
            resultNodes: [],
            resultLinks: []
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
                zIndex: 999
            }
        }
    },
    methods: {
      searchDiagram() {
        const node = this.myDiagram.diagram.nodes.first().copy()
        node.click = this.nodeClick
        this.$refs.nodePalette.diagram.add(node)
      },
      nodeClick(e, obj) {
        const node = this.myDiagram.diagram.findNodeForKey(obj.part.key)
        const diagram = this.myDiagram.diagram
         this.clearLinkTrack(diagram)
        const model = diagram.model
        diagram.startTransaction('highlightNodeAndLink')
        model.set(model.modelData, 'myGoIsHighlighting', false)
        diagram.clearHighlighteds()
        model.set(model.modelData, 'myGoIsHighlighting', true)
        diagram.highlightCollection([node])
        diagram.commitTransaction('highlightNodeAndLink')
        const rect = node.actualBounds
        diagram.centerRect(rect)
        if(this.focusAnimation) {
            diagram.startTransaction('setFocusNode')
            if(!diagram._focusNode) {
                diagram._focusNode = focusNode(go, this.myDiagram, this.focusScale)
                const animation = new go.Animation()
                animation.runCount = Infinity
                animation.duration = 4000
                animation.easing = go.Animation.EaseLinear
                animation.add(diagram._focusNode.findObject('circle1'), 'strokeDashOffset', 0, 345.4)
                animation.add(diagram._focusNode.findObject('circle2'), 'strokeDashOffset', 471, 0)
                diagram._focusNode.isLayoutPositioned = false
                diagram._focusNode.location = node.location
                diagram._focusNode.visible = true
                diagram.add(diagram._focusNode)
                animation.start()
            } else {
                  diagram._focusNode.location = node.location
                 diagram._focusNode.visible = true
            }
            diagram.commitTransaction('setFocusNode')
        }
      },
      linkClick(e, obj) {
        const link = this.myDiagram.diagram.findLinkForKey(obj.part.key)
        const diagram = this.myDiagram.diagram
        const model = diagram.model
        diagram.startTransaction('highlightNodeAndLink')
        model.set(model.modelData, 'myGoIsHighlighting', false)
        diagram.clearHighlighteds()
        model.set(model.modelData, 'myGoIsHighlighting', true)
        diagram.highlightCollection([link, link.fromNode, link.toNode])
        diagram.commitTransaction('highlightNodeAndLink')
        const rect = diagram.computePartsBounds([link, link.fromNode, link.toNode])
        diagram.scrollToRect(rect)
        diagram.startTransaction('setFocusNode')
         if(diagram._focusNode) {
          diagram._focusNode.position = new go.Point(0, 0)
          diagram._focusNode.visible = false
        }
        diagram.commitTransaction('setFocusNode')
        if(this.focusAnimation) {
            if(!diagram._linkTrackAnimation) {
            diagram._linkTrackAnimation = new go.Animation()
            } else {
                this.clearLinkTrack(diagram)
            }
            linkTrack(link, diagram, diagram._linkTrackAnimation)
        }
      },
      clearLinkTrack(diagram) {
        diagram.startTransaction('removeLinkTrackPoint')
          if(diagram._linkTrackAnimation) {
            diagram._linkTrackAnimation.stop()
            diagram.links.each(L => {
                const trackpoint = L.findObject('trackPoint')
                if(trackpoint) {
                    L.remove(trackpoint)
                }
            })
          }
        diagram.commitTransaction('removeLinkTrackPoint')
      },
      search() {
        if (!this.keyword) {
            /**
             * 搜索为空时触发
             * @event on-empty
             */
            this.$emit('on-empty')
            this.resultNodes = []
            this.resultLinks = []
            return
          }
            this.searchNode()
        },
        searchNode() {
            this.keywordCache = this.keyword
            const diagram = this.myDiagram.diagram
            diagram.clearSelection()
            const model = diagram.model
            diagram.startTransaction('highlightNodeAndLink')
            model.set(model.modelData, 'myGoIsHighlighting', false)
            diagram.commitTransaction('highlightNodeAndLink')
            const nodes = [], links = []
            // 查找节点数组
            if (this.mode.includes('node')) {
                diagram.nodes.each(n => {
                let hit = false // 是否命中
                const hitKeywords = []
                const hitText = []
                this.nodeKeys.forEach(k => {
                    const keywords = k.split('.')
                    if(!n.data) return
                    const d = this.getData(n.data, keywords)
                    if (typeof d === 'string') {
                    if (this.ignoreCase) {
                        if (d.toLowerCase().includes(this.keyword.toLowerCase())) {
                            hit = true
                            hitKeywords.push(k)
                            hitText.push(`${d}`)
                        }
                    } else {
                        if (d.includes(this.keyword)) {
                            hit = true
                            hitKeywords.push(k)
                            hitText.push(`${d}`)
                        }
                    }
                    }
                })
                  
                if (hit) {
                    nodes.push({
                        type: 'node',
                        keyword: hitKeywords.join(','),
                        hit: hitText.join('\n'),
                        node: n
                    })
                }
                })
                const nodePalette = this.$refs.nodePalette.diagram
                nodePalette.clear()
                nodePalette.startTransaction('addCloneNode')
                nodes.forEach(n => {
                    const nodeCopy = n.node.copy()
                    nodeCopy.click = this.nodeClick
                    nodePalette.add(nodeCopy)
                })
                nodePalette.startTransaction('addCloneNode')
                 this.resultNodes = nodes
                  this.setPalette(nodePalette, {wrappingWidth: 340, cellSize: new go.Size(0, 0), spacing: new go.Size(10, 10)})
            }
            if (this.mode.includes('link')) {
                diagram.links.each(n => {
                    let hit = false
                    const hitKeywords = []
                    const hitText = []
                    this.linkKeys.forEach(k => {
                        const keywords = k.split('.')
                        if(!n.data) return
                        const d = this.getData(n.data, keywords)
                        if (typeof d === 'string') {
                        if (this.ignoreCase) {
                            if (d.toLowerCase().includes(this.keyword.toLowerCase())) {
                            hit = true
                            hitKeywords.push(k)
                            hitText.push(`${d}`)
                            }
                        } else {
                            if (d.includes(this.keyword)) {
                            hit = true
                            hitKeywords.push(k)
                            hitText.push(`${d}`)
                            }
                        }
                        }
                    })
                  if (hit) {
                        links.push({
                            type: 'link',
                            keyword: hitKeywords.join(','),
                            hit: hitText.join('\n'),
                            link: n
                        })
                    }
                })
                const linkPalette = this.$refs.linkPalette.diagram
                linkPalette.clear()
                linkPalette.startTransaction('addCloneLink')
                links.forEach(l => {
                    const linkCopy = l.link.copy()
                    const node1 = l.link.fromNode.copy()
                    const node2 = l.link.toNode.copy()
                    linkCopy.fromNode = node1
                    node1.width = 15
                    node1.height = 15
                    linkCopy.toNode = node2
                    node2.width = 15
                    node2.height = 15
                    linkCopy.click = this.linkClick
                    linkPalette.add(node1)
                    linkPalette.add(node2)
                    linkPalette.add(linkCopy)
                })
                linkPalette.commitTransaction('addCloneLink')
                this.resultLinks = links
                this.setPalette(linkPalette, {wrappingColumn: 2, cellSize: new go.Size(250, 20), spacing: new go.Size(10, 10), wrappingWidth: 340})
            }
        },
        setPalette(diagram, layoutOption) {
            diagram.startTransaction('setDiagram')
            diagram.layout = $(go.GridLayout, layoutOption)
            diagram.padding = 10
            diagram.allowMove = false
            diagram.allowDelete = false
            diagram.allowDrop = false
            diagram.allowCopy = false
            diagram.allowLink = false
            diagram.allowZoom = false
            diagram.toolManager.mouseWheelBehavior = go.ToolManager.WheelScroll
            diagram.commitTransaction('setDiagram')
            diagram.undoManager.clear()
        },
        getData(data, keywords) {
            if (keywords.length !== 0) {
                const key = keywords.shift()
                if (data[key]) {
                return this.getData(data[key], keywords)
                } else {
                return ''
                }
            } else {
                return data
            }
        }
    },
    mounted() {
        this.myDiagram.rect.right = this.width
    },
    beforeDestroy() {
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