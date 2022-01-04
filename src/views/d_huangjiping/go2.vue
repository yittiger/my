<template>
   <div style="height: 100%">
   
    <Diagram height="100%" :links="[]" :nodes="nodes"  :options="options"></Diagram>
  </div>
</template>
<style lang="scss" scoped>
</style>
<script>
import { 
  // $, 
  go, 
  Diagram,
  circle, 
  // rectangle, 
  // diamond, 
  templateMap
} from '$ui/gojs'
export default {
  mixins: [],
  components: {Diagram},
  props: {
  },
  data() {
    return {
      nodes: [
        {
          key: 1,
          text: 'a',
          category: 'circle'
        }
        // {
        //   key: 2,
        //   category: 'rectangle'
        // },
        // {
        //   key: 3,
        //   category: 'diamond'
        // }
      ],

      options: {
        nodeTemplateMap: templateMap({
          circle: circle({
            shape: {
              width: 100,
              height: 100
            },
            label: {
              $bindings: [
                new go.Binding('text', 'text', (v) => {
                  return `名称: ${v}`
                })
              ]
            }
          })
          // rectangle: ,
          // diamond: 
        })
      }
    }
  },
  computed: {
  },
  methods: {

  },
  created() {},
  mounted() {}
}
</script>