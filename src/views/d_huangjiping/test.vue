<template>
  <div style="height: 100%">
    <my-tabs :tabs="tabs" position="top" fit>
      <template v-slot="{tab}">
        <div  style="height: 100%">
          <col1 v-show="tab.name === 'tab1'"></col1>

          <col2 v-show="tab.name === 'tab2'"></col2>
        </div>   
      </template>
    </my-tabs>
  </div>
</template>
<style lang="scss" scoped>
</style>
<script>

import Col1 from '@/components/col1'
import Col2 from '@/components/col2'
export default {
  mixins: [],
  components: {Col1, Col2},
  props: {
  },
  data() {
    return {
      tabs: [
         {
          name: 'tab1', 
          label: '基本设置'
          // component: Col1, 
          // props: {}, 
          // on: {
          //   'on-listShow': this.colFirstShow
          // },
          // ref: 'col1'
        },
        {
          name: 'tab2', 
          label: '账号绑定'
          // component: Col2, 
          // props: {}, 
          // on: {
          //   'on-listShow': this.colFirstShow
          // },
          // ref: 'col2'
        }
         
      ]
    }
  },
  computed: {
  },
  methods: {
    colFirstShow() {
      console.log('col1 is show') 
      
    }
  },
  created() {},
  mounted() {}
}
</script>