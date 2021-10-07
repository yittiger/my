<template>
  <div ref="warp" style="height: 100%">
     <!-- <my-water-fall :is-horizontal="false" :data="showImgs" :margin="5" :item-height="200" :columns="{
      xxl: 8,
      xl: 6,
      lg: 4,
      md: 3,
      sm: 2,
      xs: 2
    }"
    :listen-el="true"
    ref="waterFall"
  >
    <template v-slot="{scope}">
      <my-water-fall-slot v-for="(item, index) in scope.data" :key="index" :width="item.$width" :height="item.$height" :left="item.$left" :top="item.$top">
        <div style="height: 100%"  > 
          <img :src="item.src" style="width: 100%" />
        </div>
      </my-water-fall-slot>
    </template>
    
  </my-water-fall>  -->
  <my-card-list :data="data" :columns="columns" :listen-el="true">
    <el-card slot-scope="{item}">{{item}}</el-card>
  </my-card-list>

  <div>
    <el-button @click="loadMore" type="small">更多</el-button>
    <el-button @click="test">test</el-button>
  </div>
  </div>
</template>
<script> 
import Mock from 'mockjs'
const RandomNum = function (start = 0, end = 100) {
  return start + Math.floor(Math.random() * (end - start))
}
export default {
  data() {
    return {
      isHorizontal: true,
      showImgs: [],
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      columns: {
        xxl: 8,
        xl: 6,
        lg: 4,
        md: 3,
        sm: 2,
        xs: 1
      }
    }
  },
  methods: {
    test() {
      this.$refs.warp.style.width = '50%'
    },
    getImgs() {
      const arr = []
      for (let index = 0; index < 10; index++) {
        const w = RandomNum(100, 350)
        const h = RandomNum(100, 350) 
        arr.push({
          width: w,
          height: h,
          name: 'img' + index,
          src: Mock.Random.dataImage(`${w}x${h}`)
        })  
      }
      return arr
    }, 
    loadMore() {
      this.showImgs = this.showImgs.concat(this.getImgs())
      console.log(this.showImgs)
    }
  },
  created() {
    this.showImgs = this.getImgs()
  }
}
</script>
<style lang="scss" scoped>
</style>