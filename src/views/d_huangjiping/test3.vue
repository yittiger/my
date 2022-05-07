<template>
  <div>
    <my-description title="标题左对齐" :width="100"  border> 
      文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容
      </my-description> 
    <el-button type="primary" size="small" @click="dialogShow = true"  >添加</el-button>   
         
    <my-dialog :visible.sync="dialogShow" v-bind="{...dialogProps}" ref="dialog"
    > 
       
      <div v-for="i in num" :key="i">{{i}}</div>
      <el-button size="mini" @click="test">+</el-button>
      
    <!-- @submit="$refs.createInvestForm.$refs.form.submit()" --> 
    </my-dialog>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
  },
  data() {
    return {
      num: 10,
      dialogShow: false,
      dialogProps: {
        modal: false,
        target: 'body',
        title: '表单',
        width: '60%',
        footer: true 
      }
    }
  },
  computed: {
  },
  methods: {
    test() {
      this.num += 5
      this.$nextTick(() => {
        this.$refs.dialog.redoLayout()
      })
    }
  },
  created() {
  },
  mounted() {
  }
}
</script>
<style lang="scss" scoped>
</style>