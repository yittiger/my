<template>
  <my-wrapper title="dynamic-dialog" sub-title="动态创建my-dialog的注意点" back fit>
  <div>
    <h4>sample1</h4>
    <p>场景1： 未知需要dialog个数时，可使用MyDialog提供的create方法动态创建（见文档）（PS: 动态引入必须配置'target'属性，否则无效）</p>
    <div>
      <el-button @click="openDialogClick">普通动态创建dialog</el-button>  
    </div> 
    <h4>sample2</h4>
    <p>场景2：根据相对路径动态引入组件放入dialog内部, 需要注意：<br/>
      <ul>
        <li>使用import(相对路径)动态引入组件</li>
        <li>使用“this.$createElement(Module.default)”注册组件</li>
        <li>动态引入的组件未注册全局Vue的全局变量，需要在Dialog.create()的“extend”参数进行拓展，例如拓展 "$access"/"$store"变量。</li>
      </ul>
    </p>
    <div> 
      <el-button @click="importCompClick">动态引入外部组件创建dialog</el-button> 
    </div> 
  </div>
 </my-wrapper>
</template>
<style lang="scss" scoped>
 
</style>
<script>
import {MyDialog} from '$ui'
 
export default {
  mixins: [],
  components: {},
  props: {
  },
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {
    openDialogClick() { 
      const dialog = MyDialog.create({
        props: {
          title: '标题',
          width: '300px',
          height: '200px',
          draggable: true,
          target: 'body'
        },
        on: {
          open: () => {
            console.log('open')
          }
        }
      }, '这里是内容文本，也可以是vnode')
       
      dialog.show()
      
      
    },
    importCompClick() {
      console.log(this.$access)
      import('../../components/strange-sample/dynamic-dialog/test.vue').then((res) => {
        // console.log(res)
        const dialog = MyDialog.create({
          props: {
            title: '动态组件',
            width: '300px',
            height: '200px',
            draggable: true,
            target: 'body'
          },
          on: {
            open: () => {
              console.log('open')
            }
          }
        }, this.$createElement(res.default), {
          access: this.$access,
          store: this.$store
        })
       
        dialog.show()
      })
    }
  },
  created() {},
  mounted() {
    // console.log(Module.create)
  }
}
</script>