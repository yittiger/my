<template>
  <el-popover
    ref="popper"
    popper-class="my-theme-popup"
    :placement="placement"
    width="auto" 
    @show="showHandle" 
    v-on="$listeners"
    v-bind="$attrs"
    >
    <div class="my-theme-popup__body" :style="this.popperBodyStyle">
      <svg-line 
      class="svg-line" 
      :style="{'position': 'absolute', ...svgStyle}" 
      ref="svg"
      v-bind="{
        type: svgDirection,
        ...svgProps
      }"
      ></svg-line>
      <template >
        <slot>
        <!-- <div style="width: 280px; height: 150px; border: 1px solid; border-raidus: 5px"></div> -->
        </slot>
      </template>
    </div>
    <template v-slot:reference>
      <slot name="reference">
      <!-- <el-button slot="reference">click 激活</el-button> -->
      </slot>
    </template>
  </el-popover>
</template>
<script>
import SvgLine from '@/components/svg-line'
// const SvgDir = ['left-top', 'right-top', 'left-bottom', 'right-bottom']
export default {
   components: {
    SvgLine
  },
  props: {
    placement: {
      type: String,
      default: 'left-start', 
      validator(val) {
        return ['left-start', 'left-end', 'right-start', 'right-end'].includes(val)
      }
      
    },
    svgProps: {
      type: Object,
      default: () => {
        return {
          width: 70,
          height: 20,
          angle: 145,
          during: 2
        }
      }
    }
  },
  data() {
    return {
      popperDom: null,
      arrowDom: null,
      realPlacement: this.placement,
      arrowTop: 0,
      svgWidth: 0,
      svgHeight: 0
    }
  },
  computed: {
    svgDirection() {
      if (this.realPlacement === 'left-start') { // popper在左
        if (this.arrowTop < 40) { // 箭头在上
          return 'right-top'
        } else {
          return 'right-bottom'
        }
      } else if (this.realPlacement === 'right-start') {
        if (this.arrowTop < 40) { // 箭头在上
          return 'left-top'
        } else {
          return 'left-bottom'
        }
      } else {
        return 'left-top'
      }
    },
    popperBodyStyle() {
      let paddingLeft = 0
      let paddingRight = 0
      let paddingTop = 0
      let paddingBottom = 0
      if(this.svgDirection === 'right-top') {
        paddingLeft = 0
        paddingRight = this.svgWidth
        paddingTop = this.svgHeight
        paddingBottom = 0
      } else if(this.svgDirection === 'left-top') {
        paddingLeft = this.svgWidth
        paddingRight = 0
        paddingTop = this.svgHeight
        paddingBottom = 0
      } else if(this.svgDirection === 'right-bottom') {
        paddingLeft = 0
        paddingRight = this.svgWidth
        paddingTop = 0
        paddingBottom = this.svgHeight
      } else {
        paddingLeft = this.svgWidth
        paddingRight = 0
        paddingTop = 0
        paddingBottom = this.svgHeight
      }
      return {
        'padding-left': paddingLeft + 'px',
        'padding-right': paddingRight + 'px',
        'padding-top': paddingTop + 'px',
        'padding-bottom': paddingBottom + 'px'
      }
    },
    svgStyle() { 
      const style = {}
      if(this.svgDirection === 'right-top') {
        style.right = '0'
        style.top = '0'
      } else if(this.svgDirection === 'left-top') {
        style.left = '0'
        style.top = '0' 
      } else if(this.svgDirection === 'right-bottom') {
        style.right = '0'
        style.bottom = '0' 
      } else {
        style.left = '0'
        style.bottom = '0' 
      }
      return style
    }
  },
  methods: {
    getSvgSize() { 
      const svgDom = this.$refs.svg.$el 
      this.svgWidth = parseInt(svgDom.getAttribute('width')) - 5
      this.svgHeight = parseInt(svgDom.getAttribute('height')) - 3 
       
    },
    showHandle() {

      if (!this.popperDom) {
        this.popperDom = this.$refs.popper.$refs.popper
        this.arrowDom = this.popperDom.getElementsByClassName('popper__arrow')[0]
      }
      // console.log(this.popperDom, this.arrowDom)
      this.arrowTop = parseInt(this.arrowDom.style.top)
      this.realPlacement = this.popperDom.getAttribute('x-placement')  
    } 
  },
  created() {
  },
  mounted() {
    this.getSvgSize()
  }
}
</script>
<style lang="scss">
.el-popover.el-popper.my-theme-popup{
  background: transparent !important;
  box-shadow: none !important;
  border: 0px solid !important;
  padding: 0 !important;
  min-width: 0;
  margin: 0 !important;

  .popper__arrow{
    display: none;
  }
  &__body{
    position: relative;
  }
}
</style>