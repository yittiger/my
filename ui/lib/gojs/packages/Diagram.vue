<template>
  <div class="my-go-diagram"
       :class="classes"
       :style="styles">
    <div ref="content" class="my-go-diagram__content"></div>
    <div v-show="loading" class="my-go-diagram__loading">
      <div class="my-go-diagram__loading-inner">
        <MySpin loading></MySpin>
      </div>
    </div>
    <slot></slot>
  </div>

</template>

<script>
  import {MySpin} from '$ui'
  import go from '../utils/lib'
  import creator from '../utils/creator'
  import {force} from '../layouts/index'
  import {circle, link} from '../template/index'
  import factory from '../mixins/factory'
  import layout from '../mixins/layout'
  import finder from '../mixins/finder'
  import '../style/index.scss'

  const defaultOptions = function () {
    return {
      initialAutoScale: go.Diagram.Uniform,
      initialContentAlignment: go.Spot.Center,
      initialDocumentSpot: go.Spot.Center,
      contentAlignment: go.Spot.Center,
      autoScale: go.Diagram.None,
      allowSelect: true,
      'undoManager.isEnabled': true,
      'toolManager.mouseWheelBehavior': go.ToolManager.WheelZoom,
      'toolManager.hoverDelay': 200,
      model: creator({
        name: go.GraphLinksModel,
        props: {
          linkKeyProperty: 'key'
        }
      }),
      nodeTemplate: circle(),
      linkTemplate: link(),
      layout: force()
    }
  }

  export default {
    name: 'Diagram',
    mixins: [
      factory(go.Diagram, defaultOptions, 'content'),
      layout,
      finder
    ],
    components: {
      MySpin
    },
    provide() {
      return {
        myDiagram: this
      }
    },
    props: {
      dark: Boolean
    },
    computed: {
      classes() {
        return {
          'is-dark': this.dark
        }
      }
    }
  }
</script>

