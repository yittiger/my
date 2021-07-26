<template>
<div>
  <my-form @submit="handleSubmit" v-if="optMap"> 
    <my-cascader name="city1" :options="optMap.city" root="100000" v-if="treeInit" ></my-cascader>
    <my-cascader name="city2" :options="optMap.city" root="100000"  v-if="treeInit" ></my-cascader> 
    <my-cascader name="dept" :options="optMap.dept" root="0" v-if="treeInit"></my-cascader>
  </my-form>
</div>
</template>
<script>
import axios from 'axios'
export default {
  components: {},
  props: {
    // optMap: {
    //   type: Object
    // }
  },
  data() {
    return {
      optMap: null,
      treeInit: true
    }
  },
  computed: {
  },
  methods: {
    handleSubmit(model) {
      console.log(model)
    }
  },
  created() {
    Promise.all([
      axios({
        url: '/data/city-json.json'
      }),
      axios({
        url: '/data/dept.json'
      })
    ]).then((res) => {
      // console.log(res, '=====')
      const city = res[0].data.data.map((item) => { 
        return {
          ...item,
          id: item.dictCode,
          parentId: item.parentCode,
          label: item.dictName,
          value: item.dictCode
        }
      })
      const dept = res[1].data.data.map((item) => { 
        return {
          ...item,
          id: item.dictCode,
          parentId: item.parentCode,
          label: item.dictName,
          value: item.dictCode
        }
      })
      this.optMap = {
        city: city,
        dept: dept
      } 
      console.log(this.optMap)
    })
  },
  mounted() {
    // setTimeout(() => {
    //   this.treeInit = true
    // }, 50)
  }
}
</script>
<style lang="scss" scoped>
</style>