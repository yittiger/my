<template>
  <my-wrapper title="test" back fit>
   <div>
     <div class="template-warp">
       {{text}}
     </div>
      
   </div>
 </my-wrapper>
</template>
<style lang="scss" scoped>
</style>
<script>
const compiler = require('vue-template-compiler')
const TemplateText = `<div>
{{data}}
</div>`
export default {
  mixins: [],
  components: {},
  props: {
  },
  data() {
    return {
      text: TemplateText
    }
  },
  computed: {
  },
  methods: {
  },
  created() {},
  mounted() {
    console.log(compiler.compileToFunctions(this.text))
  }
}
</script>