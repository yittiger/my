<template>
  <div>
    <my-form @submit="handleSubmit">
      <my-tag-input name="tags" label="标签"></my-tag-input>
    </my-form>
    标签2
    <my-tag-input v-model="arr" :props="{allowCreate:false}" ></my-tag-input>
    <el-button @click="test">test</el-button>
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
      arr: ['ccc', 'ddd']
    }
  },
  computed: {
  },
  methods: {
    handleSubmit(model) {
      alert(`submit: ${JSON.stringify(model)}`)
    },
    test() {
      alert(`submit: ${JSON.stringify(this.arr)}`)
    }
  },
  created() {},
  mounted() {}
}
</script>