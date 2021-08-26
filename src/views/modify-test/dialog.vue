<template>
  <div style="height: 100%"> 
     <my-dv-page target="parent" fit>
       <el-button type="primary" @click="visible = true">test</el-button>
       <my-dv-border1 x-align="center"
                      y-align="middle"
                      width="80%"
                      height="80%">
      </my-dv-border1>
    </my-dv-page>
    
    <my-dialog :visible.sync="visible"
      theme="dark"
      target="body"
      icon="el-icon-menu"
      title="标题文字"
      draggable
      resizable
      maximizable
      minimizable
      width="600px" 
      height="450px">
      <my-dv-border1 x-align="center"
                      y-align="middle"
                      width="100%"
                      height="100%">
      </my-dv-border1>
    </my-dialog>
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
      visible: false
    }
  },
  computed: {
  },
  methods: {
  },
  created() {},
  mounted() {}
}
</script>