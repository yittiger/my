<template>
  <div>
    <el-button @click="exportData">导出</el-button>
    <el-table @selection-change="handleSelectionChange" :data="list" style="width: 100%" size="mini">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="姓名" prop="name" align="center"></el-table-column>
      <el-table-column label="专业技能" align="center">
        <el-table-column label="前端" align="center">
          <el-table-column label="JavaScript" prop="js" align="center"></el-table-column>
          <el-table-column label="CSS" prop="css" align="center"></el-table-column>
        </el-table-column>
        <el-table-column label="后端" align="center">
          <el-table-column label="java" align="center">
            <el-table-column label="nio" prop="nio" align="center"></el-table-column>
            <el-table-column label="基础" prop="basic" align="center"></el-table-column>
          </el-table-column>
          <el-table-column label="框架" align="center">
            <el-table-column label="SpringBoot" prop="springboot" align="center"></el-table-column>
            <el-table-column label="MyBatis" prop="mybatis" align="center"></el-table-column>
          </el-table-column>
        </el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>
<style lang="scss" scoped>
</style>
<script>
// import complexTableExport from './table-export'
import excel from '$ui/utils/excel'
export default {
  mixins: [],
  components: {},
  props: {
  },
  data() {
    return {
      selectionData: [],
      list: [
        { name: '张三', js: '熟练', css: '一般', nio: '了解', basic: '精通', springboot: '熟练', mybatis: '了解' },
        { name: '张三', js: '熟练', css: '一般', nio: '了解', basic: '精通', springboot: '熟练', mybatis: '了解' },
        { name: '张三', js: '熟练', css: '一般', nio: '了解', basic: '精通', springboot: '熟练', mybatis: '了解' },
        { name: '张三', js: '熟练', css: '一般', nio: '了解', basic: '精通', springboot: '熟练', mybatis: '了解' }
      ],
      revealList: [
        {
          name: '姓名',
          prop: 'name'
        },
        {
          name: '专业技能',
          child: [
            {
              name: '前端',
              child: [
                {
                  name: 'JavaScript',
                  prop: 'js'
                },
                {
                  name: 'CSS',
                  prop: 'css'
                }
              ]
            },
            {
              name: '后端',
              child: [
                {
                  name: 'java',
                  child: [
                    {
                      name: 'nio',
                      prop: 'nio'
                    },
                    {
                      name: '基础',
                      prop: 'basic'
                    }
                  ]
                },
                {
                  name: '框架',
                  child: [
                    {
                      name: 'SpringBoot',
                      prop: 'springboot'
                    },
                    {
                      name: 'MyBatis',
                      prop: 'mybatis'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  },
  computed: {
  },
  methods: {
    handleSelectionChange(selection) {
      this.selectionData = selection
    },
    exportData() {
      if (!this.selectionData.length) return
      console.log(this.selectionData)
      excel.complexTableExport('text.xls', this.selectionData, this.revealList)
    }
  },
  created() {},
  mounted() {}
}
</script>