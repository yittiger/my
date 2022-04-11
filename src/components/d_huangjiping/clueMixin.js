import {MyCrud} from '$ui'
const defaultPagination = {
  backaground: true,
  layout: 'total,->,sizes,prev,pager,next,jumper',
  pageSizes: [10, 20, 50]
}
/*
adapterName
*/
export default function (options) {
  const {
    adapterName,
    tableName = 'table',
    clueId = ''
  } = options
  return { 
    data() {
      return {
        adapter: MyCrud.adapter.call(this, adapterName),
          
        // -------------------简表属性---------------------
        clueId: clueId,
        rowsPerPage: 10,
        pagination: defaultPagination,

        initColumns: [], // 初始化所有列
        operationBtns: [],

        // 条件初始数据
        filterData: [],

        // 导出条数限制
        exportProps: {
          useExport: 'true',
          exportMaxNum: 2000
        } 
      }
    },
    computed: {
      
    },
    methods: {
      deleteClickHandle(row, index) {
        this.$confirm('删除该条数据，是否继续？', '提示', {
          type: 'warning'
        }).then(() => {
          this.adapter.remove({
            row,
            index
          }).then(res => { 
            this.$refs[tableName].load()
          }).catch(e => {
            console.log('删除接口错误', e)
          })
        })
      },
      getItemDetail(row, index) {
        return this.adapter.get({
          row,
          index
        }).then((res) => {
          return Promise.reslove(res)
        })
      },
      formSubmitHandle(model, uniId) {
        return new Promise((resolve, reject) => {
          if (!uniId) { // 新增
            this.adapter.add({row: model, index: 0}).then((res) => {
              resolve(res)
            }).catch((err) => {
              reject(err)
            })
          } else { // 编辑
            this.adapter.update({row: model, index: 0}).then((res) => {
              resolve(res)
            }).catch((err) => {
              reject(err)
            })
          }
        }) 
      }, 
      reload() {
        this.$refs[tableName].load()
      }, 
      refresh() {
        this.$refs[tableName].refresh(1)
      },

      getSimpleClueConfig(config) {
        // 设置 pagination

        // 设置 tableCol

        // 设置 查询表单

        // 列表导出配置


      } 
    
    },
    mounted() {
    
    }
  }
}