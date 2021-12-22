 
<template>
  <div >
     <my-form 
      ref="form"
      @submit="handleSubmit"
      inline
      label-width="60px"
      item-width="calc(50% - 20px)"
      footer-block
      size="small"
      footer-align="right"
      :rules="rules" 
    > 
      
      <my-input name="title" label="标题"  ></my-input>
      <my-date-picker name="date" label="日期" :props="{valueFormat:'yyyy-MM-dd'}"  ></my-date-picker>
      <my-form-custom label="案件" name="case" >  
        <list-picker 
          ref="listPicker"
          :field-props="{type: 'popover', width: '100%'}"
          :list-load="caseListLoadFn"
          :options-props-map="casePropsMap"
          v-model="selects"
          @change="pickerChange" 
        > 
        </list-picker> 
      </my-form-custom>
      <my-input name="content" label="内容" width="calc(100% - 20px)" :props="{type:'textarea'}"></my-input>
    </my-form>  
     
    <div v-if="content">
      <div v-show="content.title">标题： {{content.title}}</div>
      <div v-show="content.date">日期： {{content.date}}</div>
      <div v-show="content.case">人员id： {{content.case}}</div>
      <div>
        人员标签： <el-tag size="mini" v-for="(item, index) in content.caseList" :key="index">{{item.caseName}}</el-tag>
      </div>
      <div v-show="content.content">内容： {{content.content}}</div>
    </div>    
  </div>
</template>
<style scoped lang="scss">

</style>
<script> 
import Mock from 'mockjs' 
import {cloneDeep} from '$ui/utils/util'
import ListPicker from '@/components/list-picker'
export default {
  components: {ListPicker}, 
  data() {
    return {
       casePropsMap: {
        label: 'caseName',
        id: 'id',
        value: 'id'
      }, 
      selects: [],
      rules: {
        case: {required: true, message: '标题是必填项'}
      },
      content: null     
    }
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
    pickerChange(val) { 
      const currentModel = cloneDeep(this.$refs.form.currentModel)
      currentModel.case = val.map((item) => {
        return item.id
      }).join(',')
      this.$refs.form.currentModel = currentModel 
    },
    handleSubmit(model) {  
      const data = {...model}
      data.caseList = this.selects
      console.log(data)
      this.content = data
    }
  },
  created() {
     
  }
}
</script>

 