<template>
  <div>
    <my-form :model="model">
      <my-editor name="content"></my-editor>
    </my-form>
  </div>
</template>
<script>

  export default {
    data() {
      return {
        model: {
          content: 'abc'
        }
      }
    }
  }
</script>
<style lang="scss" scoped>

</style>
