<template>
  <div style="width: 500px; height: 400px;border: 1px solid">
    <!--  -->
    <list-picker 
      ref="listPicker"
      :field-props="{type: 'popover'}"
      :list-load="caseListLoadFn"
      :options-props-map="casePropsMap"
      v-model="selects"
      @change="pickerChange"
      @on-submit="pickerSubmit" 
      @on-pickerOpen="pickerOpen"
    >
      <my-filter slot="filter" is-flex label-width="60px" @submit="filterSubmitHandle" :columns="2" size="mini">
        <my-input name="caseName" label="案件名" placeholder="请输入案件名" ></my-input> 
        <my-input name="caseId" label="案件id" placeholder="请输入案件ID" ></my-input> 
      </my-filter>
      <template v-slot:option="{item}">
        <div>{{item.id}}</div>
      </template>
    </list-picker> 
    <div>
      <div v-for="(item, index) in selects" :key="index">{{item}}</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>

</style>
<script>
import Mock from 'mockjs'
import ListPicker from '@/components/list-picker'
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
      selects: []
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
    filterSubmitHandle(model) {
      this.$refs.listPicker.filterSubmitHandle(model)
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
  },
  created() {},
  mounted() {}
}
</script>