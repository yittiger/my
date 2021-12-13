<template>
  <div>
    <my-form @submit="handleSubmit">
      <my-tag-input name="tags" label="标签"></my-tag-input>
    </my-form>
     

  </div>
</template>
<style lang="scss" scoped>
</style>
<script>
export default {
  mixins: [],
  components: {},
  props: {
  },
  data() {
    return {
      
    }
  },
  computed: {
  },
  methods: {
    handleSubmit(model) {
      alert(`submit: ${JSON.stringify(model)}`)
    } 
  },
  created() {},
  mounted() {}
}
</script>