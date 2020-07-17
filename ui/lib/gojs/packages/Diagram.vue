<template>
  <div className="my-go-diagram"></div>
</template>

<script>
  const go = require('gojs')
  export default {
    name: 'MyGoDiagram',
    props: {
      init: {
        type: Function
      },
      nodes: {
        type: Array,
        default() {
          return []
        }
      },
      links: Array,
      modelData: Object
    },
    methods: {
      handleModelChange(e) {
        if (e.isTransactionFinished) {
          const dataChanges = e.model?.toIncrementalData(e);
          if (dataChanges !== null) {
            this.$emit('model-change', dataChanges)
          }
        }
      },
      mergeData(model) {
        model.mergeNodeDataArray(model.cloneDeep(this.nodes))
        if (this.links) {
          model.mergeLinkDataArray(model.cloneDeep(this.links))
        }
        if (this.modelData) {
          model.assignAllDataProperties(model.modelData, this.modelData)
        }
      },
      delayInit(diagram) {
        diagram.delayInitialization(() => {
          console.time()
          diagram.model.commit(m => this.mergeData(m, 'init merge'))
          console.timeEnd()
        })
      }
    },
    mounted() {
      const diagram = this.init ? this.init(go.GraphObject.make, go) : null
      if (!diagram) return
      diagram.div = this.$el
      diagram.addModelChangedListener(this.handleModelChange)
      this.delayInit(diagram)
      this.diagram = diagram
    },
    beforeDestroy() {
      if (!this.diagram) return
      this.diagram.removeModelChangedListener(this.handleModelChange)
      this.diagram.div = null
      this.diagram = null
    }
  }
</script>

