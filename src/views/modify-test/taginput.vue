<template>
  <div>
    <my-form @submit="handleSubmit">
      <my-tag-input name="tags" label="标签"></my-tag-input>
    </my-form>
    标签2
    <my-tag-input v-model="arr" :props="{allowCreate:false}" ></my-tag-input>
    <el-button @click="test">test</el-button>
    <!-- <my-checkbox v-model="check" :options="categories" width="100%" button></my-checkbox> -->

    <my-checkbox v-model="check" :group="true" :options="categories" :props="{border: true}"></my-checkbox>
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
      check: [],
      check2: false,
      arr: ['ccc', 'ddd'],
      categories: [
          { label: '种类一', value: 1 },
          { label: '种类二', value: 2 },
          { label: '种类三', value: 3 },
          { label: '种类四', value: 4 }
      ]
    }
  },
  computed: {
  },
  methods: {
    handleSubmit(model) {
      alert(`submit: ${JSON.stringify(model)}`)
    },
    test() {
      alert(`submit: ${JSON.stringify(this.check)}`)
    }
  },
  created() {},
  mounted() {}
}
</script>