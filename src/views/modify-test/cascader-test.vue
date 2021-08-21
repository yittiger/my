<template>
  <div>
     <el-button  type="primary" @click="open" :loading="!optMap">简单弹窗</el-button>
      <my-dialog :visible.sync="visible" target="body" title="标题文字" width="400px" height="500px">
        <test :opt-map="optMap" ></test> 
      </my-dialog>

       
  </div>
</template>
<script>
import axios from 'axios'
import Test from '@/components/test' 

export default {
  components: {
    Test
  },
  props: {
  },
  data() {
    return {
      optMap: null,
      visible: false,
      object: null
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
   
  created() {
    Promise.all([
      axios({
        url: '/data/city-json.json'
      }),
      axios({
        url: '/data/dept.json'
      })
    ]).then((res) => { 
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
      // console.log(city, '===')
      this.optMap = { 
        city: city, 
        dept: dept
      } 
      
    })
  }, 
  mounted() {
  }
}
</script>
<style lang="scss" scoped>
</style>