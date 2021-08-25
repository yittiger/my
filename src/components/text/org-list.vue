<template>
  <my-layout class="org-list" :north="{ height: 'auto' }">
    <div class="header" slot="north" style="padding: 0 5px">
      <h3 @click="handleDown({ id: rootId, name: '' })">
        <i class="el-icon-arrow-left"></i> 南京市公安局
      </h3>
      <el-breadcrumb
        v-if="paths.length > 0"
        separator-class="el-icon-arrow-right"
      >
        <el-breadcrumb-item
          v-for="item in paths"
          :key="item.id"
          @click.native="handleDown(item)"
          >{{ item.name }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="list" v-loading="userLoading">
      <my-header
        v-show="currentOrgList.length"
        title="下属部门"
        icon="el-icon-menu"
        theme="bg-right"
        size="small"
      ></my-header>

      <div class="department" v-show="currentOrgList.length">
        <div
          class="item"
          v-for="item in currentOrgList"
          :key="item.id"
          @click="handleDown(item)"
        >
          <i class="el-icon-folder"></i>
          <span class="dept-name" :title="item.name">{{ item.name }}</span>
          <span class="down"> <i class="el-icon-s-custom"></i> 下级 </span>
        </div>
      </div>
      <my-header
        v-show="users.length"
        title="单位人员"
        icon="el-icon-menu"
        theme="bg-right"
        size="small"
      >
      </my-header>
      <div class="personnel" :class="currentOrgList.length ? '' : 'height-100'">
        <div
          class="item user"
          v-for="item in users"
          :key="item.id"
          @click="select(item, $event)"
          :title="item.address"
        >
          <el-checkbox v-if="multiple" name="check">
            <i
              class="el-icon-s-custom"
              v-if="!imgMap[item.row.idcard]"
              style="font-size: 28px"
            ></i>
            <my-avatar
              v-if="imgMap[item.row.idcard]"
              :src="imgMap[item.row.idcard]"
            ></my-avatar>
            {{ item.name }}-{{ item.row.policeno }}-{{ item.row.tel }}-{{
              item.row.yhxz
            }}
          </el-checkbox>
          <span v-else>
            <i class="el-icon-s-custom" v-if="!imgMap[item.row.idcard]"></i>
            <my-avatar
              v-if="imgMap[item.row.idcard]"
              :src="imgMap[item.row.idcard]"
            ></my-avatar>
            {{ item.name }}-{{ item.row.policeno }}-{{ item.row.tel }}-{{
              item.row.yhxz
            }}
          </span>
        </div>
      </div>
    </div>
  </my-layout>
</template>

<script>
  import {findPath, create} from '$ui/utils/tree'

  export default {
    props: {
      multiple: Boolean
    },
    data() {
      return {
        rootId: '2',
        parentId: null,
        parentName: '',
        list: [
          {id: '3', name: '部门3', parentId: '2'},
          {id: '4', name: '部门4', parentId: '3'},
          {id: '1', name: '部门1', parentId: '2'},
          {id: '2', name: '部门2', parentId: '0'},
          {id: '5', name: '部门5', parentId: '4'}
        ],
        tree: [],
        paths: [],
        users: [],
        userLoading: false,
        loadingMap: {},
        imgMap: {}
      }
    },
    computed: {
      currentOrgList() {
        return this.list.filter(item => item.parentId === this.parentId)
      }
    },
    methods: {
      loadOrg() {
        this.tree = create(this.list, '0', 'id', 'parentId')
        const target = this.list.find(r => r.parentId === '0') 
        this.handleDown(target) 
      },
      loadUser(orgId) {
        this.users = [] 
        this.userLoading = true 
        this.$nextTick(() => {
          this.userLoading = false
          this.users = [
            {id: '12', name: '人员1', address: 'item.orgName', row: 'item'},
            {id: '13', name: '人员2', address: 'item.orgName', row: 'item'},
            {id: '14', name: '人员3', address: 'item.orgName', row: 'item'},
            {id: '15', name: '人员4', address: 'item.orgName', row: 'item'}
          ]
        })
      },
      handleDown(item) {
        this.parentId = item.id
        this.parentName = item.name
        this.paths = findPath(this.tree, n => n.id === item.id)
        this.loadUser(item.id)
      },
      select(item, evt) {
        if (this.multiple) {
          if (typeof evt.target.checked !== 'undefined') {
            this.$emit('select', item, evt.target.checked)
          }
        } else {
          this.$emit('select', item, true)
        }
      }
    },
    created() {
      this.loadOrg()
    }
  }
</script>

<style lang="scss" scoped>
@import "~@/style/_vars.scss";

.org-list {
  height: 100%;
}
.height-100 {
  height: calc(100% - 50px) !important;
}

.list {
  position: absolute;
  top: 0px;
  bottom: 0;
  width: 100%;
  padding: 0;
  height: 100%;
  overflow: auto;
}

.header {
  border-bottom: 1px solid #cccccc;
  h3 {
    cursor: pointer;
  }

  /deep/ .el-breadcrumb {
    margin: 0 20px;
    padding: 8px 5px;
    // border-radius: 4px;
    .el-breadcrumb__item {
      cursor: pointer;
      .el-breadcrumb__inner {
        &:hover {
          color: $blue-8;
        }
      }
      &:last-child {
        .el-breadcrumb__inner {
          &:hover {
            color: inherit; //#606266;
          }
        }
      }
    }
  }
}
.department,
.personnel {
  width: 100%;
  height: calc(50% - 50px);
  overflow: auto;
}
.item {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: 40px;
  line-height: 40px;
  padding: 0 10px;
  border-radius: 4px; // $--border-radius-base;
  cursor: pointer;
  // /deep/ .el-checkbox__label {
  // max-width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  &.user {
    i {
      color: $blue-5;
    }
  }
  // }
  .dept-name {
    flex: 1;
    width: 0;
    margin-left: 5px;
    overflow: hidden;
    height: 40px;
    line-height: 40px;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 700;
  }
  &:hover {
    background: $blue-9; // $--color-primary-light-9;
  }
}

.down {
  float: right;
  color: $blue-5;
  border-left: 1px solid $blue-8;
  line-height: 20px;
  padding-left: 10px;
  margin-top: 10px;
}
</style>
