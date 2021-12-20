<template> 
  <my-select-field :pop-props="{footer: true}" v-model="selectItems" :field-props-map="{name: 'xm', id: 'card'}" @on-confirm="confirmHandle"> 
    <my-table slot="picker" :columns="columns" :data="optionsList" fit stripe @selection-change="(val) => {selects = val}"> </my-table>
  </my-select-field>
</template>
<script>
import Mock from 'mockjs'
export default {
  components: {},
  props: {
  },
  data() {
    return {
      selectItems: [],
      optionsList: [],
      columns: [ 
        { type: 'selection', fixed: 'left'},
        { label: '姓名', prop: 'xm'},
        { label: '身份证', prop: 'card' } 
      ],
      selects: []
    }
  },
  computed: {
  },
  methods: {
    mock(limit) {
      return Mock.mock({
        [`list|${limit}`]: [
          {
            card: '@id',
            xm: '@cname',
            'age|10-100': 18,
            address: '@ctitle',
            date: '@date(yyyy-MM-dd)'
          }
        ]
      })
    },
    confirmHandle() {
      console.log(this.selects)
      this.selectItems = [...this.selects]
    }
  },
  created() {
    this.optionsList = this.mock(5).list
  },
  mounted() {
  }
}
</script>
<style lang="scss" scoped>
</style>