# SelectField 自定义选择器

自定义选择器， 文档  <api-link href="components/my-select-field">MySelectField</api-link>

继承于 my-tag-input

## 代码示例

### 基础用法

:::demo
```html
<template>
  <div>
    <my-select-field 
      ref="select"
      :pop-props="{footer: true}" 
      v-model="selectItems" 
      :field-props-map="{label: 'xm', id: 'card'}" 
      @on-confirm="confirmHandle"
    > 
      <my-table 
        slot="picker" 
        :columns="columns" 
        :data="optionsList" 
        fit 
        stripe 
        @selection-change="(val) => {selects = val}"
      > </my-table>
    </my-select-field>

    <div v-for="(item, index) in selectItems" :key="index">
      姓名{{item.xm}} / 身份证{{item.card}} / 地址{{item.address}}
    </div>
  </div>  
</template>

<script>
  import Mock from 'mockjs'
  export default {
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
        this.selectItems = [...this.selects]
        this.$refs.select.closePicker()
      }
    },
    created() {
      this.optionsList = this.mock(5).list
      
    }
  }
</script>


```
:::

### 表单用法
引用 “index.vue”； 在my-form 使用时，需结合“my-form-custom” 容器， 且手动设置 width="100%"。并监听“change”事件与“my-form”进行数据绑定
:::demo

```html
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
      <my-form-custom label="人员" name="persons" >  
        <my-select-field 
          width="100%" 
          ref="select"
          type="dialog" 
          v-model="selectPersons" 
          :field-props-map="{label: 'xm', id: 'card'}" 
          @on-confirm="confirmHandle"
          @change="pickerChange"
        > 
          <my-table 
            slot="picker" 
            :columns="columns" 
            :data="optionsList" 
            fit 
            stripe 
            @selection-change="(val) => {selects = val}"
          > </my-table>
        </my-select-field>
       </my-form-custom>
      <my-input name="content" label="内容" width="calc(100% - 20px)" :props="{type:'textarea'}"></my-input>
    </my-form>  
     
    <div v-if="content">
      <div v-show="content.title">标题： {{content.title}}</div>
      <div v-show="content.date">日期： {{content.date}}</div>
      <div v-show="content.persons">人员id： {{content.persons}}</div>
      <div>
        人员标签： <el-tag size="mini" v-for="(item, index) in content.personList" :key="index">{{item.xm}}</el-tag>
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
export default { 
  data() {
    return {
      selectPersons: [], 
      optionsList: [],
      columns: [ 
        { type: 'selection', fixed: 'left'},
        { label: '姓名', prop: 'xm'},
        { label: '身份证', prop: 'card' } 
      ],
      selects: [],
      rules: {
        persons: {required: true, message: '标题是必填项'}
      },
      content: null     
    }
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
     
    pickerChange(val) {
      console.log('change')
      const currentModel = cloneDeep(this.$refs.form.currentModel)
      currentModel.persons = val.map((item) => {
        return item.card
      }).join(',')
      this.$refs.form.currentModel = currentModel 
    },
    handleSubmit(model) {  
      const data = {...model}
      data.personList = this.selectPersons
      console.log(data)
      this.content = data
    },
    confirmHandle() {
      this.selectPersons = [...this.selects]
      this.$refs.select.closePicker()
    }
  },
  created() {
    this.optionsList = this.mock(5).list
  }
}
</script>
```
:::

 