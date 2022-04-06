<template>
  <div > 
    <list-picker 
      ref="listPicker"
      :field-props="{type: 'popover', 'popProps': {'width': 800}}"
      :list-load="caseListLoadFn"
      :options-props-map="casePropsMap"
      style-mode="table"
      :list-column="listColumn"
      v-model="selects"
      @change="pickerChange"
      @on-submit="pickerSubmit" 
      @on-pickerOpen="pickerOpen"
    > 
      <template v-slot:column="scope">
        <div v-if="scope.column.prop === 'caseName'" style="color: red"   >
          {{scope.row.caseName}} 
        </div>
        <div v-else>{{scope.row[scope.column.prop]}}</div>
      </template>
    </list-picker> 
    <div>
      <div v-for="(item, index) in selects" :key="index" >{{item}} 
        <el-button @click="removeSel(index)">删除</el-button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>

</style>
<script>
import Mock from 'mockjs'
import ListPicker from '$ui/widgets/list-picker'
export default {
  mixins: [],
  components: {ListPicker},
  props: {
  },
  data() {
    return {
      casePropsMap: {
        label: 'caseName',
        id: 'id',
        value: 'id'
      },
      selects: [],
      listColumn: [
        {prop: 'id', label: 'id'},
        {prop: 'caseName', label: '名称'},
        {prop: 'content', label: '内容'}
      ]
    }
  },
  computed: {
  },
  methods: { 
    caseListLoadFn(page, pageSize, filter) {
      return new Promise((resolve, reject) => {
        console.log(page, pageSize, filter)
        setTimeout(() => {
          const data = Mock.mock({
            [`list|${pageSize}`]: [
              {
                id: '@id',
                caseName: '@ctitle', 
                content: '@ctitle'
              }
            ]
          })
    
          resolve({
            total: 80,
            list: data.list
          })
        }, 300)
      })
    }, 
    removeSel(index) {
      this.selects.splice(index, 1)
    },
    pickerChange(sels) {
      console.log(sels, 'change')
    },
    pickerSubmit(sels) {
      console.log(sels, 'submit')
    },
    pickerOpen() {
      console.log('picker open')
    }
  } 
}
</script>