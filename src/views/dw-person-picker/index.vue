<template>
  <div class="login-page">
    <orgs :value="lists" :companyList="treeLists"></orgs>
  </div>
</template>

<script>
import Orgs from '@/components/text';
export default {
  components: {
    Orgs
  },
  data() {
    return {
      lists: [
        { id: '12', name: '人员1', src: '' },
        { id: '13', name: '人员2', src: '' }
      ],
      treeLists: [
        { id: '3', name: '部门3', parentId: '2' },
        { id: '4', name: '部门4', parentId: '3' },
        { id: '1', name: '部门1', parentId: '2' },
        { id: '2', name: '部门2', parentId: '0' },
        { id: '5', name: '部门5', parentId: '4' }
      ]
    };
  },
  watch: {},
  methods: {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
.login-page {
  height: 100%;
}
</style>
