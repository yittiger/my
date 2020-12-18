import creator from '../utils/creator'
import { go } from '../utils/lib'

export default function (ClassName, defaultOptions, ref) {
  return {
    props: {
      options: [Object, Function],
      nodes: {
        type: Array,
        default() {
          return []
        }
      },
      links: {
        type: Array,
        default() {
          return []
        }
      },
      // modelData
      data: {
        type: Object,
        default() {
          return {}
        }
      },
      onModelChange: Function,
      onReady: Function,
      delay: {
        type: Number,
        default: 100
      },
      // highlightMode 高亮模式， 单节点(single)或包含临接节点(adjoin), 不高亮(none)
      highlightMode: {
        type: String,
        default: 'adjoin'
      }
    },
    data() {
      return {
        loading: true
      }
    },
    watch: {
      nodes(val) {
        this.loadNodes(val)
      },
      links(val) {
        this.loadLinks(val)
      },
      data(val) {
        this.loadData(val)
      }
    },
    methods: {
      init() {
        const diagram = typeof this.options === 'function'
          ? this.options(creator({
            name: ClassName,
            props: defaultOptions()
          }))
          : creator({
            name: ClassName,
            props: {
              ...defaultOptions(),
              ...this.options
            }
          })
        if (!diagram) return
        diagram.div = ref ? this.$refs[ref] : this.$el
        diagram.delayInitialization(() => {
          this.commit(this.load, 'init')
          this.onReady && this.onReady(diagram)
          this.$emit('_ready', diagram)
          this.loading = false
        })
        this.bind(diagram)
        this.diagram = diagram
      },
      delayInit() {
        clearTimeout(this._delayId)
        this._delayId = setTimeout(this.init, this.delay)
      },
      merge(options = {}) {
        if (!this.diagram) return
        Object.entries(options).forEach(([name, value]) => {
          this.diagram[name] = value
        })
      },
      bind(diagram) {
        this.handleModelChange = e => {
          if (e.isTransactionFinished) {
            const data = e.model.toIncrementalData(e);
            if (data !== null) {
              if(data.insertedNodeKeys && data.insertedNodeKeys.length !== 0) {
                const animation = new go.Animation()
                animation.duration = 1000
                animation.easing = go.Animation.EaseInQuad;
                 data.insertedNodeKeys.forEach(key => {
                   const node = diagram.findNodeForKey(key)
                   animation.add(node, 'opacity', 0, node.opacity);
                  //  animation.add(node, 'scale', 0.01, node.scale);
                 })
                 data.modifiedLinkData && data.modifiedLinkData.forEach(l => {
                   const link = diagram.findLinkForKey(l.key)
                   animation.add(link.elt(0), 'opacity', 0, link.elt(0).opacity)
                  })
                animation.start()
              }
              this.onModelChange && this.onModelChange(data, e)
            }
          }
        }
        diagram.addModelChangedListener(this.handleModelChange)
        diagram.addDiagramListener('SelectionDeleting', this.handleNodeDelete);
        diagram.addDiagramListener('BackgroundSingleClicked', this.handleDiagramClick)
        Object.entries(this.$listeners).forEach(([name, listener]) => {
          diagram.addDiagramListener(name, listener)
        })
      },
      handleNodeDelete(e) {
          e.subject.each(function(part) {
            if (!(part instanceof go.Node)) return; 
            const animation = new go.Animation();
            const deletePart = part.copy();
            animation.duration = 1000
            animation.add(deletePart, 'scale', deletePart.scale, 0.01);
            animation.add(deletePart, 'angle', deletePart.angle, 360);
            animation.addTemporaryPart(deletePart, e.diagram);
            animation.start();
          });
      },
      handleDiagramClick({diagram}) {
        if(diagram._linkTrackAnimation) {
          diagram._linkTrackAnimation.stop()
          diagram.startTransaction('removeLinkTrackPoint')
          diagram.links.each(L => {
            const trackpoint = L.findObject('trackPoint')
            if(trackpoint) {
              L.remove(trackpoint)
            }
          })
          diagram.commitTransaction('removeLinkTrackPoint')
        }
        if(diagram._focusNode) {
          diagram._focusNode.position = new go.Point(0, 0)
          diagram._focusNode.visible = false
        }
        // const model = diagram.model
        // model.set(model.modelData, 'myGoIsHighlighting', false)
      },
      unbind(diagram) {
        this.handleModelChange && diagram.removeModelChangedListener(this.handleModelChange)
        diagram.removeDiagramListener('BackgroundSingleClicked', this.handleDiagramClick)
        diagram.removeDiagramListener('SelectionDeleting', this.handleNodeDelete);
        Object.entries(this.$listeners).forEach(([name, listener]) => {
          diagram.removeDiagramListener(name, listener)
        })
      },
      loadNodes(nodes) {
        const model = this.diagram?.model
        if (!model) return
        model.nodeDataArray = model.cloneDeep(nodes)
      },
      loadLinks(links) {
        const model = this.diagram?.model
        if (!model) return
        if (this.links && model instanceof go.GraphLinksModel) {
          model.linkDataArray = model.cloneDeep(links)
        }
      },
      loadData(data) {
        const model = this.diagram?.model
        if (!model) return
        if (data) {
          const myModelData = {
            myGoHighlightMode: this.highlightMode,
            myGoIsHighlighting: false,
            ...this.data
          }
          model.assignAllDataProperties(model.modelData, myModelData)
        }
      },
      load() {
        this.loadNodes(this.nodes)
        this.loadLinks(this.links)
        this.loadData(this.data)
      },
      commit(func, name = null, delay = 0) {
        const model = this.diagram?.model
        if (!model) return
        if (delay > 0) {
          return setTimeout(() => {
            model.commit(func, name)
          }, delay)
        } else {
          model.commit(func, name)
        }
      },

      /**
       * 更新图形
       */
      resize(alwaysQueueUpdate) {
        if (!this.diagram) return
        this.diagram.requestUpdate(alwaysQueueUpdate)
      }
    },
    mounted() {
      this.delay ? this.delayInit() : this.init()
    },
    beforeDestroy() {
      clearTimeout(this._delayId)
      if (!this.diagram) return
      this.unbind(this.diagram)
      this.diagram.div = null
      this.diagram = null
    }
  }
}
