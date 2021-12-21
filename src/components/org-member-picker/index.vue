<template>
  <div class="org-member-picker">
    <div class="picker-warp">
      <div class="inner">
        <my-slide-layout class="picker-layout" type="horizontal" :edage-width="40" :range="[30, 60]">
          <!--组织结构树组件-->
          <div slot="odd" class="left-side" >
            <org-tree  
              ref="orgTree"
              v-bind="{
                ...$attrs, 
                'orgPropMap': orgPropMap, 
                'orgSelect': orgSelect
              }"
              @on-orgClick="orgClickHandle"
              @on-orgChecked="orgCheckedHandle"
              v-on="$listeners"
            ></org-tree>
          </div>
          <!--人员列表组件-->
          <div slot="even" class="right-side">
            <person-list 
            ref="personList" 
            v-bind="{
              ...$attrs, 
              'personPropMap': personPropMap, 
              'isMultiPerson': isMultiPerson
            }" 
            :sel-dept-label="selDeptLabel" 
            :dept-data="selDeptData" 
            @on-clearSelDept="clearSelDeptHandle"
            @on-personSel="(sels) => {selectPersons = sels}"
            v-on="$listeners"
            ></person-list>
            
          </div>
        </my-slide-layout>
      </div> 
    </div>
    <!--选中结果区域-->
    <div class="select-warp" v-if="isShowResult">
      <!--人员选中结果-->
      <el-row style="padding: 2px 0" v-show="selectPersons.length">
        <el-col :span="2" style="line-height:32px">人员：</el-col>
        <el-col :span="22"> 
          <el-tag 
          v-for="(item, index) in selectPersons" 
          :key="`person_${index}`"
          v-show="index < selPersonShowMax"
          closable
          @close="selPersonRemove(item, index)"
          >{{item[personPropMap.name]}}</el-tag>
          <el-tag
            type="info" 
           key="total-person"
          v-show="selectPersons.length > selPersonShowMax"
          >+{{selectPersons.length}}</el-tag>
        
        </el-col>
      </el-row>

      <!--部门选中结果-->
      <el-row style="padding: 2px 0"  
      v-show="(orgSelect && checkedDepts.length) || (!orgSelect && selDeptLabel)" >
        <el-col :span="2" style="line-height:32px">部门：</el-col>
        <el-col :span="22" v-if="orgSelect">
          <el-tag 
          v-for="(item, index) in checkedDepts" 
          :key="`dept_${index}`"
          v-show="index < selDeptShowMax"
          closable
          @close="selDeptRemove(item)"
          >{{item[orgPropMap.label]}}</el-tag>
          <el-tag
            type="info" 
           key="total-dept"
          v-show="checkedDepts.length > selDeptShowMax"
          >+{{checkedDepts.length}}</el-tag>
        </el-col>
        <el-col v-else :span="22">
          <el-tag   
            v-if="selDeptLabel"
            key="current-dept" 
          >
          {{selDeptLabel}}
          </el-tag>
        </el-col>
      </el-row>
    </div>

    <!--操作按钮区域-->
    <div class="btn-warp" v-show="isShowSubmit">
      <el-button type="primary" size="small" @click="submitClickHandle">确定</el-button>
      <el-button type="warning" size="small" @click="cancelClickHandle">取消</el-button>
    </div>
  </div>
</template>
<style lang="scss" scoped> 
.org-member-picker{
  height: 100%;
  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }
  display: flex;
  flex-flow: column;
  padding: 5px;
  > div {
    width: 100%;
  }
  .picker-warp{
    flex: 1;
    position: relative; 
    .inner{
      position: absolute;
      width: 100%;
      top: 0;
      bottom: 0;
    }
  }
  .select-warp{
    padding-top: 3px;
    border-top: 1px solid  rgba(0,0,0,.04);
  }
  .btn-warp{
    border-top: 1px solid  rgba(0,0,0,.04);
    padding-top: 4px;
    text-align: right;
  }
  .picker-layout{
    .left-side, .right-side{
      width: 100%;
      height: 100%; 
    }
    // .left-side{}
    // .right-side{
    //   background: rgba(0, 0, 0, 0.04);
    // }
  }
  
}
</style>
<script>
/*
  
  
  // 最大显示选中人数
  selDeptShowMax: {
    type: Number,
    default: 5
  },
  // 最大显示选中部门数
  selPersonShowMax: {
    type: Number,
    default: 5
  },
  
  
  // 是否显示结果
  isShowResult: {
    type: Boolean,
    default: true
  },
  // 是否显示确定取消按钮
  isShowSubmit: {
    type: Boolean,
    default: true
  } 
  =======================
  // 部门数据字段映射
  orgPropMap: {
    type: Object,
    default: () => {
      return {
        label: 'label',
        id: 'id',
        children: 'children',
        parentId: 'parentId'
      }
    }
  },
  // 异步获取初始部门树的函数，返回 输出组织架构树 的 Promise对象
  loadOrg: Function,

  // 懒加载获取部门数据
  lazyLoadOrg: Function,

  // 是否选择部门
  orgSelect: {
    type: Boolean,
    default: false
  },

  // 树组件传参
  treeProps: {
    type: Object,
    default: () => { 
      return {
        'check-strictly': true
      } 
    }
  },
  // 远程查询部门
  remoteTreeFilter: {
    type: Boolean,
    default: false
  }
  ====================
  // 人员是否多选 
  // 人员数据字段映射 
  personPropMap: {
    type: Object,
    default: () => {
      return {
        name: 'name',
        cardNum: 'cardNum',
        dept: 'dept',
        id: 'id'
      }
    }
  },
  isMultiPerson: {
    type: Boolean,
    default: true
  }, 
  // 是否默认自动加载人员
  autoLoad: {
    type: Boolean,
    default: false
  },
  // 表格组件其他传参
  tableProps: {
    type: Object,
    default: () => {
      return {}
    }
  },
  // 人员加载函数
  personLoad: {
    type: Function
  },
  // 人员显示列表
  listColumn: {
    type: Array,
    default: () => {
      return [
        { prop: 'name', label: '姓名' },
        { prop: 'cardNum', label: '身份证' },
        { prop: 'dept', label: '单位' }
      ]
    }
  } 
*/

import OrgTree from './org-tree'
import PersonList from './person-list'
export default {
  mixins: [],
  components: {
    OrgTree,
    PersonList
  },
  props: {
    // 人员数据字段映射 
    personPropMap: {
      type: Object,
      default: () => {
        return {
          name: 'name',
          cardNum: 'cardNum',
          dept: 'dept',
          id: 'id'
        }
      }
    },
    // 部门数据字段映射
    orgPropMap: {
      type: Object,
      default: () => {
        return {
          label: 'label',
          id: 'id',
          children: 'children',
          parentId: 'parentId'
        }
      }
    },
    // 最大显示选中人数
    selDeptShowMax: {
      type: Number,
      default: 5
    },
    // 最大显示选中部门数
    selPersonShowMax: {
      type: Number,
      default: 5
    },
    // 是否选择部门
    orgSelect: {
      type: Boolean,
      default: false
    },
    // 人员是否多选 
    isMultiPerson: {
      type: Boolean,
      default: true
    },
    // 是否显示结果
    isShowResult: {
      type: Boolean,
      default: true
    },
    // 是否显示确定取消按钮
    isShowSubmit: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      selDeptData: null, // 选中用于查询人员的部门数据
      checkedDepts: [], // 多选时选中的部门数据列表
      selectPersons: [] // 选中的人员数据列表
    }
  },
  computed: {
    // 当前查询人员部门的名称（在人员列表中显示）
    selDeptLabel() {
      if (!this.selDeptData) {
        return ''
      } else {
        return this.selDeptData[this.orgPropMap.label]
      } 
    } 
  },
  methods: {
    // 部门节点点击（用于刷新人员列表）
    orgClickHandle(nodeData, node, label) {
      this.selDeptData = nodeData 
      this.$refs.personList.searchQuery = ''
      this.$nextTick(() => { 
        this.$refs.personList.$refs.list.refresh(1)
      })

    },
    // 人员列表派出的清除当前部门事件
    clearSelDeptHandle() {
      this.selDeptData = null 
      this.$nextTick(() => { 
        this.$refs.personList.$refs.list.refresh(1)
      }) 
    },
    // 部门选中(checkbox变化)事件
    orgCheckedHandle(depts) {
      this.checkedDepts = depts 
    },
    // 下方结果选中部门的删除事件函数
    selDeptRemove(tag) {
      this.$refs.orgTree.$refs.tree.setChecked(tag[this.orgPropMap.id], false)
    },
    // 下方结果选中人员的删除事件函数
    selPersonRemove(person, index) {
      this.$refs.personList.removePersonSel(index)
    },
    
    // 获取选中人员
    getSelPersons() {
      return this.selectPersons
    },
    // 获取选中部门
    getSelDepts() {
      if (this.orgSelect) {
        return this.checkedDepts
      } else {
        return [this.selDeptData]
      }
    },
    // 取消按钮点击事件
    cancelClickHandle() {
      // 清除选中部门  
      this.checkedDepts.forEach((tag) => {
        this.$refs.orgTree.$refs.tree.setChecked(tag[this.orgPropMap.id], false)
      })
      this.$refs.personList.selectPersons = [] 
      this.$emit('on-cancel')
    },
    // 确定按钮点击事件
    submitClickHandle() {
      const person = this.getSelPersons()
      const dept = this.getSelDepts()
      this.$emit('on-submit', person, dept)
    }

  },
  created() {},
  mounted() {}
}
</script>