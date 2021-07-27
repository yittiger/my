# AtInput 可以'@'人的输入框

可以实现'@'添加人的输入框。
组件文档 <api-link href="components/my-at-input">MyAtInput</api-link>

## 何时使用

在填写回复内容时需要使用 "@"添加联系人

## 代码示例

### 基本用法
:::demo
```html
<template>
  <div style="padding: 20px">
    <my-form @submit="handleSubmit" ref="form" :reset-text="false"> 
      <my-form-custom label="留言" >
        <my-at-input type="textarea" ref="atInput" :placeholder="placeholder" v-model="content" @on-tagEdit="tagEditChange" @change="contentChange">
        <div slot="popover">
          <div>标签内容：{{tagName}} </div>
          <ul>
            <li v-for="item in filterList" :key="item.id" @click="listClick(item)" style="cursor:pointer">{{item.name}}</li>
          </ul>
        </div>
      </my-at-input>
    </my-form-custom>
  </my-form> 
  <hr/>
  <div>html：</div>
  <div v-html="content"></div>
  <hr/>
  <div>文本</div>
  <div>{{text}}</div>
  <hr/>
  <el-button @click="getAllData">获取全部数据</el-button>
  
  </div>
</template>
 
<script> 
import {MyAtInput} from '$ui'
export default {
  components: {
    MyAtInput
  },
  data() {
   
    return {
      placeholder: '键入‘@’添加联系人',
      content: '',
      text: '',
      tagName: '',
      userList: [
        {name: '黄吉平', id: 'huangjiping'},
        {name: '李国师', id: 'liguoshi'},
        {name: '寇永明', id: 'kouyongming'},
        {name: '潘浩玮', id: 'panhaowei'} 
      ]
    }
  },
  computed: {
    filterList() {
      if (this.tagName) {
        return this.userList.filter((item) => {
          return item.name.indexOf(this.tagName) >= 0
        })
      } else {
        return this.userList
      }
    }
  },
  methods: {
    getAllData() { 
      const result = this.$refs.atInput.getData()
      // console.log(result)
      this.$alert(JSON.stringify(result))
    },
    tagEditChange(val) {
      this.tagName = val
    },
    contentChange(val, str) {
      this.text = str
      this.$refs.form.currentModel.reply = str 
    },
    listClick(data) {
      this.tagName = ''
      this.$refs.atInput.tagInsert({
        name: data.name, // 必须(标签显示名)
        data: data, // 必须(标签对应数据)
        id: data.id, // 非必须，若无则组件自动创建id 与 @标签一一对应
        color: 'red' // 非必须，标签颜色
      })
    },
    handleSubmit(model) {
      console.log(model)
    }
  }
}
</script> 

```
:::