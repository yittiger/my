<template>
  <div class="my-go-palette" :style="styles">Palette</div>
</template>

<script>
  import creator from '../utils/creator'
  import go from '../utils/lib'
  import factory from '../mixins/factory'

  const defaultOptions = function () {
    return {
      initialAutoScale: go.Diagram.None,
      initialContentAlignment: go.Spot.TopCenter,
      'animationManager.initialAnimationStyle': go.AnimationManager.None,
      layout: creator({
        name: go.GridLayout,
        props: {
          wrappingColumn: 1
        }
      }),
      model: creator({
        name: go.GraphLinksModel,
        props: {
          linkKeyProperty: 'key'
        }
      })
    }
  }

  export default {
    name: 'Palette',
    mixins: [factory(go.Palette, defaultOptions)]
  }
</script>

<style scoped>

</style>
