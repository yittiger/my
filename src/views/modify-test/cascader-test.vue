<template>
  <div>
     <el-button  type="primary" @click="open">简单弹窗</el-button>
      <my-dialog :visible.sync="visible" target="body" title="标题文字" width="400px" height="500px">
        <test  ></test>
        <!-- <my-form @submit="handleSubmit" v-if="optMap" > 
          <my-cascader name="city1" :options="optMap.city" root="100000"  ></my-cascader>
          <my-cascader name="city2" :options="optMap.city" root="100000"  ></my-cascader>
          <my-cascader name="dept" :options="optMap.dept" root="0" ></my-cascader>
        </my-form> -->
      </my-dialog>
  </div>
</template>
<script>
// import axios from 'axios'
import Test from '@/components/test'
// import {create as createTree} from '$ui/utils/tree'
export default {
  components: {
    Test
  },
  props: {
  },
  data() {
    return {
      optMap: null,
      visible: false
    }
  },
  computed: {
  },
  methods: {
    open() {
      this.visible = true
    },
    handleSubmit(model) {
      console.log(model)
    }
  },
  /*
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
    })
  },
  */
  mounted() {
  }
}
</script>
<style lang="scss" scoped>
</style>