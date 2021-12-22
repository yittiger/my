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
    watch: {
      
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