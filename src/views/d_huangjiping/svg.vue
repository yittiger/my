<template>
  <div ref="el" style="font-size:30px;">
    <my-icon name="icon-user" svg ></my-icon>
    <em class="my-icon icon-exit"></em>
    <img :src="img" alt="">
  </div>
</template>
<script>
import '$ui/icons/user'
import {svgToImg} from '$ui/map/utils/util'
export default {
  components: {},
  props: {
  },
  data() {
    return {
      img: ''
    }
  },
  computed: {
  },
  methods: {
  },
  created() {
  },
  mounted() {
    svgToImg('el-icon-location', 30, 'blue', 'element-icons').then((res) => {
      this.img = res
   
    })
    const IconList = [
      // {
      //   fontClass: 'icon-cloud-link', 
      //   size: 40,
      //   color: 'red',
      //   fontFamily: 'MyIcon'
      // }, 
      // {
      //   fontClass: 'icon-cloud-link-fill', 
      //   size: 20,
      //   color: 'green',
      //   fontFamily: 'MyIcon'
      // },
      // {
      //   fontClass: 'icon-cloud-download', 
      //   size: 28,
      //   color: 'blue',
      //   fontFamily: 'MyIcon'
      // }, 
      // {
      //   fontClass: 'icon-loading-fill', 
      //   size: 60,
      //   color: 'orange',
      //   fontFamily: 'MyIcon'
      // },
      // {
      //   fontClass: 'el-icon-s-custom', 
      //   size: 48,
      //   color: 'pink',
      //   fontFamily: 'element-icons'
      // }, 
      {
        fontClass: 'el-icon-s-opportunity', 
        size: 38,
        color: 'violet',
        fontFamily: 'element-icons'
      }, 
      {
        fontClass: 'el-icon-s-data', 
        size: 18,
        color: 'pinkblue',
        fontFamily: 'element-icons'
      }
      // {
      //   fontClass: 'el-icon-s-check', 
      //   size: 28,
      //   color: 'gray',
      //   fontFamily: 'element-icons'

      // }
    ] 
    const size = IconList.reduce((total, item) => {
      total.w += item.size
      if (total.h < item.size) {
        total.h = item.size
      }
      return total
    }, {w: 0, h: 0})
    console.log(size)

    const canvas = document.createElement('CANVAS')
    canvas.width = size.w
    canvas.height = size.h
    canvas.style.border = '1px solid'
    const ctx = canvas.getContext('2d')
    setTimeout(() => { 
      IconList.forEach((item, index) => {
        const span = document.createElement('SPAN')
        span.className = item.fontClass
        document.body.appendChild(span)
        const content = window.getComputedStyle(span, '::before').content

        ctx.fillStyle = item.color;
        ctx.font = `${item.size - 2}px ${item.fontFamily}`;

        const margin = item.size * index
        ctx.fillText(content, margin + 2, item.size - 4); 
      })

      document.body.appendChild(canvas)

    }, 400)
  }
}
</script>
<style lang="scss" scoped>
</style>