<template>
  <div class="my-go-diagram"
       :class="classes"
       v-loading.body="loading"
       element-loading-text="拼命加载中...">
    <div ref="content" :style="styles" class="my-go-diagram__content"></div>
    <slot></slot>
  </div>
</template>

<script>
  import go from '../utils/lib'
  import '../style/index.scss'

  export default {
    name: 'Diagram',
    provide() {
      return {
        diagram: this
      }
    },
    props: {
      // 初始化函数，必须返回go.Diagram实例
      init: {
        type: Function
      },
      // 节点数据数组
      nodes: {
        type: Array,
        default() {
          return []
        }
      },
      // 连线数据数组
      links: Array,
      // modelData 共享数据对象
      modelData: Object,
      // diagram.model发生变化时回调函数，当 undoManager.isEnabled=true时才生效
      onModelChange: {
        type: Function
      },
      fit: Boolean,
      width: String,
      height: {
        type: String,
        default: '500px'
      }
    },
    data() {
      return {
        loading: true
      }
    },
    computed: {
      classes() {
        return {
          'is-fit': this.fit
        }
      },
      styles() {
        return {
          width: this.fit ? '100%' : this.width,
          height: this.fit ? '100%' : this.height
        }
      }
    },
    watch: {
      nodes() {
        this.commit(this.merge, 'update', 20)
      },
      links() {
        this.commit(this.merge, 'update', 20)
      },
      modelData() {
        this.commit(this.merge, 'update', 20)
      }
    },
    methods: {
      commit(func, name = '', delay = 0) {
        const model = this.diagram?.model
        if (!model) return
        clearTimeout(this.delayCommitId)
        this.loading = true
        this.delayCommitId = setTimeout(() => {
          model.commit(func, name)
          this.loading = false
        }, delay)
      },
      merge() {
        const model = this.diagram?.model
        if (!model) return
        model.mergeNodeDataArray(this.nodes)
        if (this.links && model instanceof go.GraphLinksModel) {
          model.mergeLinkDataArray(model.cloneDeep(this.links))
        }
        if (this.modelData) {
          model.assignAllDataProperties(model.modelData, this.modelData)
        }
      },
      layout(layout, delay = 100) {
        if (!this.diagram) return
        const {initialAutoScale, autoScale, initialContentAlignment, contentAlignment} = this.diagram
        const prevAutoScale = autoScale,
          prevContentAlignment = contentAlignment
        return new Promise(resolve => {
          this.commit(() => {
            // 切换布局把内容居中并自动缩放到最合适位置
            this.diagram.autoScale = initialAutoScale
            this.diagram.contentAlignment = initialContentAlignment
            this.diagram.layout = layout
            // 还原对齐和缩放设置
            this.commit(() => {
              this.diagram.autoScale = prevAutoScale
              this.diagram.contentAlignment = prevContentAlignment
              resolve(this.diagram)
            }, 'reset')
          }, 'layout', delay)

        })
      },
      bind(diagram) {
        this.handleModelChange = e => {
          if (e.isTransactionFinished) {
            const data = e.model.toIncrementalData(e);
            if (data !== null) {
              this.onModelChange && this.onModelChange(data, e)
            }
          }
        }
        diagram.addModelChangedListener(this.handleModelChange)
        Object.entries(this.$listeners).forEach(([name, listener]) => {
          diagram.addDiagramListener(name, listener)
        })
      },
      unbind() {
        const diagram = this.diagram
        if (!diagram) return
        this.handleModelChange && diagram.removeModelChangedListener(this.handleModelChange)
        Object.entries(this.$listeners).forEach(([name, listener]) => {
          diagram.removeDiagramListener(name, listener)
        })
      }
    },
    mounted() {
      const diagram = this.init ? this.init(go.GraphObject.make, go) : null
      if (!diagram) {
        this.loading = false
        return
      }
      diagram.div = this.$refs.content
      this.bind(diagram)
      diagram.delayInitialization(() => {
        this.commit(this.merge, 'init')
      })
      this.diagram = diagram
      this.$emit('init', diagram)
    },
    beforeDestroy() {
      if (!this.diagram) return
      this.unbind()
      this.diagram.div = null
      this.diagram = null
    }
  }
</script>

