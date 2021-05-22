<template>
  <div style="padding: 40px">
    <div style="width: 280px">
      <at-input type="input" ref="atInput">
        <div slot="popover">
          <ul>
            <li v-for="item in userList" :key="item.id" @click="listClick(item)">{{item.name}}</li>
          </ul>
        </div>
      </at-input>
    </div>
    
    <!-- @change="contentChange" @on-tagEdit="tagEditChange" -->
  </div>
</template>
<script>
import AtInput from '@/components/at-input'
export default {
  components: {
    AtInput
  },
  data() {
    return {
      userList: [
        {name: '黄吉平', id: 'huangjiping'},
        {name: '李国师', id: 'liguoshi'},
        {name: '寇永明', id: 'kouyongming'},
        {name: '潘浩玮', id: 'panhaowei'}

      ]
    }
  },
  methods: {
    tagEditChange(val) {
      console.log('tag', val)
    },
    contentChange(val) {
      console.log('content', val)
    },
    listClick(data) {
      this.$refs.atInput.tagInsert({
        name: data.name,
        data: data,
        color: 'red'
      })
    }
  }
}
</script>
<style lang="scss" scoped>

</style>