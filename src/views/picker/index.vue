<template>
  <div>
    <!-- <select-field ref="field" v-model="selectItems" @on-confirm="confirmClickHandle"> 
      <ul slot="picker">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
    </select-field>
    <div v-for="(item, index) in selectItems" :key="index">{{item}}</div> -->
    <org-member-picker ></org-member-picker>
  </div>
</template>
<script>
import OrgMemberPicker from '@/components/org-member-picker'
export default {
  components: {OrgMemberPicker},
  props: {
  },
  data() {
    return {
      selectItems: []
    }
  },
  computed: {
  },
  methods: {
    confirmClickHandle() {
      this.selectItems = this.selectItems.concat({name: 'aaa', id: 'aaa'})
      this.$refs.field.closePicker()
    }
  },
  created() {
  },
  mounted() {
  }
}
</script>
<style lang="scss" scoped>
</style>