<template>
  <div >
    <div>
      <el-switch v-model="darkTheme" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
    </div>
    <div style="width: 100px; height: 300px; border: 1px solid; overflow: auto">
      <el-tree class="is-line" style="width: 100%" :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    </div> 
  </div>
</template>
<script>
// import Mock from 'mockjs'
// import OrgMemberPicker from '$ui/widgets/org-member-picker'
// // import axios from 'axios'
// import CityData from '@/assets/data/CITY.json'
// import {create as createTree} from '$ui/utils/tree'
import skin from '$ui/utils/skin' 
export default {
   mixins: [skin()],
    data() {
      return {
        darkTheme: false,
        data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    watch: {
      darkTheme(val) {
        if (val) {
          this.changeTheme('dark')
        } else {
          this.changeTheme('default')
        }
      }
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      }
    }
  };
</script>
<style lang="scss" scoped>
</style>