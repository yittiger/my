import creator from '../utils/creator'
import go from '../utils/lib'

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
      // highlightMode 高亮模式， 单节点(single)或包含临接节点(adjoin)
      highlightMode: {
        type: String,
        default: 'single'
      },
      onModelChange: Function,
      onReady: Function,
      delay: {
        type: Number,
        default: 100
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
        diagram.addDiagramListener('SelectionDeleting', function(e) {
          e.subject.each(function(part) {
            if (!(part instanceof go.Node)) return; 
            const animation = new go.Animation();
            const deletePart = part.copy();
            animation.add(deletePart, 'scale', deletePart.scale, 0.01);
            animation.add(deletePart, 'angle', deletePart.angle, 360);
            animation.addTemporaryPart(deletePart, diagram);
            animation.start();
          });
        });
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
        Object.entries(this.$listeners).forEach(([name, listener]) => {
          diagram.addDiagramListener(name, listener)
        })
      },
      unbind(diagram) {
        this.handleModelChange && diagram.removeModelChangedListener(this.handleModelChange)
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
          if(ClassName === go.Palette) {
            myModelData.myGoHighlightDisabled = true
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
