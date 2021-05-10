<template>
  <div>
    <div> 
      默认： <my-edit-tags  :tags-list.sync="arr1" @change="changeHandle"></my-edit-tags> <br/>
      双向绑定数据： {{arr1}}
    </div>  <br/>
    <div> 
      medium: <my-edit-tags color="white" :tags-list.sync="arr2" size="medium"></my-edit-tags> 背景为白色<br/>
      双向绑定数据： {{arr2}}
    </div> <br/>
    <div>     
      small: <my-edit-tags type="warning" :tags-list.sync="arr3" size="small"></my-edit-tags> type: warning<br/>
      双向绑定数据： {{arr3}}
    </div> <br/>
    <div> 
      mini: <my-edit-tags :tags-list.sync="arr4" size="mini"></my-edit-tags><br/>
      双向绑定数据： {{arr4}}
    </div><br/> 
    <div>前面输入
      <my-edit-tags :tags-list.sync="arr5" :is-right="false"></my-edit-tags><br/>
      双向绑定数据： {{arr5}}
    </div><br/>
    <div>只读
      <my-edit-tags :tags-list="arr6" read-only></my-edit-tags>
    </div>

    <hr>
    <div>
      <my-form @submit="handleSubmit" ref="form"> 
        <my-form-custom name="tags">
          <my-edit-tags :tags-list="[]" @change="tagsChangeHandle" ></my-edit-tags>
        </my-form-custom>
        
      </my-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr1: ['1', '2', '3', '4'],
      arr2: ['1', '2', '3', '4'],
      arr3: ['1', '2', '3', '4'],
      arr4: ['1', '2', '3', '4'],
      arr5: ['1', '2', '3', '4'],
      arr6: ['1', '2', '3', '4']
    }
  },
  methods: {
    changeHandle(val) {
      console.log(val, 'change')
    },
    handleSubmit(model) {
      console.log(model)
    },
    tagsChangeHandle(tags) {
      this.$refs.form.currentModel.tags = tags
    }
  }
}
</script>