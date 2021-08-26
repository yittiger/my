<template>
  <div v-if="optMap">
    <my-cascader  v-model="city" :options="optMap.city" root="100000"    ></my-cascader>  
    <p >{{code|formatFilter('CITY')}}</p>

    <div>
      <my-form @submit="handleSubmit" :model="model">
        <my-range label="范围" name="range" mode="datetime" :props="{valueFormat:'yyyy-MM-dd HH:mm:ss'}"></my-range>
        <my-range label="范围" name="range2" mode="date" :props="{valueFormat:'yyyy-MM-dd'}"></my-range>
      </my-form>
    </div>
  </div>
</template>
<style lang="scss" scoped>
</style>
<script>
import {findPathInOpts} from '@/helper/dict-management/index'
export default {
  mixins: [],
  components: {},
  props: {
  },
  data() {
    return {
      code: '623026',
      optMap: null,
      city: [],
      model: {}
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
  mounted() {
    this.$getOptionsMap([
      // name 表示字典在当前模块对应的key名（自定义）
      // code 表示通过接口 获取字典的 唯一CODE（后端提供）
      {name: 'city', code: 'CITY'}, // 城市字典 
      {name: 'other', code: 'TYPE'}, // 类型字典
      {name: 'other2', code: 'OTHER2'} // 其他字典
    ]).then((res) => {
      console.log(res)
      this.optMap = res // {city: [...], other: [...], other2: [...]}
      console.log(findPathInOpts(this.optMap.city, '623026'))
    })
  }
}
</script>