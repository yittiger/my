<template>
  <div class="org-member-picker">
    <div class="picker-warp">
      <div class="inner">
        <my-slide-layout class="picker-layout" type="horizontal" :edage-width="40" :range="[30, 60]">
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
             
            ></org-tree>
          </div>
          <div slot="even" class="right-side">
            <person-list 
            ref="personList" 
            v-bind="{...$attrs, 'personPropMap': personPropMap}" 
            :sel-dept-label="selDeptLabel" 
            :dept-data="selDeptData" 
            @on-clearSelDept="clearSelDeptHandle"
            @on-personSel="(sels) => {selectPersons = sels}"
            ></person-list>
            
          </div>
        </my-slide-layout>
      </div> 
    </div>
    <div class="select-warp">
      <el-row>
        <el-col :span="2" style="line-height:32px">人员</el-col>
        <el-col :span="22">
          
          <el-tag 
          v-for="(item, index) in selectPersons" 
          :key="`person_${index}`"
          v-show="index < selPersonShowMax"
          closable
          @close="selPersonRemove(item)"
          >{{item[personPropMap.name]}}</el-tag>
          <el-tag
            type="info" 
           key="total-person"
          v-show="selectPersons.length > selPersonShowMax"
          >+{{selectPersons.length}}</el-tag>
        
        </el-col>
      </el-row>
      <el-row >
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
    <div class="btn-warp">
      <el-button type="primary" size="small">确定</el-button>
      <el-button type="warning" size="small">取消</el-button>
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
  .select-warp{}
  .btn-warp{
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
  submitBtn 控制是否显示提交、取消按钮 ，默认true
  personPropMap：接口返回人员列表字段映射
  multiple: 是否多选
  showOrgList: 是否结合部门进行查询（显示右侧部门列表）
  searchPerson: 通过搜索异步查询人员函数，必传，参数keyword, 返回 输出人员列表的 Promise对象 
  loadOrg: 异步获取初始部门树的函数，必传，返回 输出组织架构树 的 Promise对象
  loadOrgChildren: 异步获取各个子部门树的函数（用于懒加载），选传，返回 输出 子级部门 的 Promise对象
  loadUser: 根据部门信息异步获取部门成员的函数，必传，返回 输出 部门成员数组 的 Promise对象,
  orgPropMap：接口返回部门数据字段映射
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
    selDeptShowMax: {
      type: Number,
      default: 5
    },
    selPersonShowMax: {
      type: Number,
      default: 5
    },
    // 是否选择部门
    orgSelect: {
      type: Boolean,
      default: false
    },
     
    isMultiPerson: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      selDeptData: null,
      checkedDepts: [],
      selectPersons: []
    }
  },
  computed: {
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
    },
    // 部门选中(checkbox变化)事件
    orgCheckedHandle(depts) {
      this.checkedDepts = depts 
    },
    // 下方选中部门的删除事件函数
    selDeptRemove(tag) {
      this.$refs.orgTree.$refs.tree.setChecked(tag[this.orgPropMap.id], false)
    },

    selPersonRemove(person) {
      console.log(person)
    }
  },
  created() {},
  mounted() {}
}
</script>