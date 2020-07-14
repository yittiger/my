<template>
  <div>
    <el-divider content-position="left">DataInput</el-divider>
    <el-row>
      <my-cron></my-cron>
    </el-row>
    <!--    <el-row>-->
    <!--      <my-editor></my-editor>-->
    <!--    </el-row>-->
    <el-row>
      <my-filter label-width="60px" collapsible @submit="handleSubmit">
        <my-input name="keyword" label="关键字" placeholder="请输入关键字"></my-input>
        <my-select name="category" label="类别" :options="categories"></my-select>
        <my-input label="标题" name="title" collapsible></my-input>
        <my-range label="范围" mode="date" name="range" collapsible></my-range>
      </my-filter>
    </el-row>
    <el-row>
      <my-range label="范围" name="range" mode="date" :props="{valueFormat:'yyyy-MM-dd'}"></my-range>
    </el-row>
    <el-row>
      <my-form @submit="handleSubmit" :model="model">
        <my-tag-input name="tags" label="标签" :props="{collapseTags:true}"></my-tag-input>
        <my-tag-select name="tag1"
                       :options="fruit"
                       :props="{tag:true, collapsible:true}"></my-tag-select>
      </my-form>
    </el-row>
  </div>
</template>

<script>
  import tree from '@/mock/tree.json'

  export default {
    data() {
      return {
        options: tree,
        fruit: ['苹果', '香蕉', '雪梨', '草莓',
          '水蜜桃', '桔子', '椰子',
          '葡萄', '海棠', '枇杷', '山楂', '樱桃'].map(n => ({
          label: n,
          value: n
        })),
        categories: [
          {
            label: '选项一',
            value: 1
          },
          {
            label: '选项二',
            value: 2
          },
          {
            label: '选项三',
            value: 3
          }
        ],
        model: {
          tree: ['layout', 'color'],
          tags: ['苹果', '香蕉']
        }
      }
    },
    methods: {
      handleSubmit(model) {
        alert(`submit: ${JSON.stringify(model)}`)
      }
    }
  }
</script>

<style scoped>

</style>
