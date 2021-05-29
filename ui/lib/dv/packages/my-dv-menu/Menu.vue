<template>
  <Box class="my-dv-menu"
       :style="styles"
       v-bind="$attrs"
       v-on="$listeners">
    <MyDvMenuItem v-for="(item,index) in data"
                  :key="`my-dv-menu-item-${item.key}-${index}`"
                  :icon="item.icon"
                  :text="item.text"
                  :width="item.width"
                  :height="svgHeight"
                  @click.native.stop="handleClick(item, index)"
                  :active="(item.key && item.key ===defaultActive) || index ===defaultActive"
                  :light="light"
                  :dark="dark"
                  :reverse="reverse"
                  :stroke-width="strokeWidth">
      <slot v-bind="{item, index}"></slot>
    </MyDvMenuItem>
  </Box>
</template>

<script>

/**
 * 导航菜单
 * @module $ui/dv/my-dv-menu
 */
import MyDvMenuItem from './MenuItem'
import Box from '../my-dv-box'
import Rect from '../../mixins/Rect'
import Color from '../../mixins/Color'

/**
 * 插槽
 * @member slots
 * @property {string} default 作用域插槽，参数：item 菜单项对象，index 菜单项索引
 *
 */
export default {
  name: 'MyDvMenu',
  mixins: [Rect, Color],
  inheritAttrs: false,
  components: {
    Box,
    MyDvMenuItem
  },
  /**
   * 属性参数
   * @member props
   * @property {Object[]} [data] 菜单项对象数组
   * @property {string|number} [data.key] 菜单项标识
   * @property {string} [data.text] 菜单项文本
   * @property {string|object} [data.icon] 图标配置
   * @property {string} [data.to] 跳转路由path，router为true时有效
   * @property {number} [data.width] 菜单项宽度，默认 200
   * @property {boolean} [reverse] 水平翻转
   * @property {boolean} [router] 开启路由跳转
   * @property {number} [strokeWidth=1] 描边宽度
   * @property {string|number} [defaultActive] 默认选择菜单项目，可以设置菜单项的key或索引
   */
  props: {
    // {key, text,icon, to, width}
    data: {
      type: Array
    },
    // 水平翻转
    reverse: Boolean,
    // 路由模式
    router: Boolean,
    // 描边宽度
    strokeWidth: {
      type: Number,
      default: 1
    },
    // 当前选择菜单项
    defaultActive: [String, Number]
  },
  computed: {
    styles() {
      return {
        opacity: this.opacity
      }
    },
    svgHeight() {
      return this.$attrs.height ? Number.parseInt(this.$attrs.height) : undefined
    }
  },
  methods: {
    handleClick(item, index) {
      if (this.router && item.to && this.$router) {
        this.$router.push(item.to)
      }
      /**
       * 点击菜单时触发
       * @event click
       * @param {object} item 菜单项对象
       * @param {number} index 菜单项索引
       */
      this.$emit('click', item, index)
    }
  }
}
</script>

<style lang="scss">
  @import "../../style/vars";

  @include b(dv-menu) {
    white-space: nowrap;
  }

</style>
