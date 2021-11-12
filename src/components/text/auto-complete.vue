<template>
  <div class="auto-complete">
    <div class="empty" v-if="items.length === 0">没有匹配到任何结果</div>
    <div
      class="item"
      v-for="item in items"
      :key="item.id"
      @click="select(item)"
    >
      <div class="name">
        <i class="el-icon-user"></i>
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
// import {getPersonByKeyword} from '$my/code/api/user'
export default {
  props: {
    keyword: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      items: []
    };
  },
  watch: {
    keyword(val) {
      if (val) {
        this.load(val);
      }
    }
  },
  methods: {
    load(keyword) {
      // getPersonByKeyword({xm: keyword}).then(res => {
      //   this.items = res.map(item => {
      //     return { id: item.id, name: item.name, address: item.orgName, row: item}
      //   })
      // })
      this.items = [
        { id: '14', name: 'item.name123', src: '' }
      ];
      console.log(keyword, '请求接口......');
    },
    select(item) {
      this.$emit('select', item);
    }
  }
};
</script>

<style lang="scss" scoped>
// @import '../../style/vars';
@import "~@/style/_vars.scss";

.auto-complete {
  max-height: 300px;
  overflow: auto;
}

.item {
  padding: 8px 15px;
  border-bottom: 1px solid $blue-9;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: $blue-9;
  }
}

.name {
  font-size: 16px;
}

.dep {
  color: $grey-primary;
  padding-left: 20px;
}

.empty {
  padding: 20px;
  text-align: center;
  font-size: 16px;
}
</style>
