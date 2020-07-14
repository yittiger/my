<script>
  /**
   * 右键菜单组件
   * @module $ui/components/my-contextmenu
   */
  import {Contextmenu, ContextmenuGroup, ContextmenuSubmenu, ContextmenuItem} from 'v-contextmenu'
  import {MyIcon} from '$ui'

  /**
   * 插槽
   * @member slots
   * @property {string} default 作用域插槽，定义菜单项内容，参数 item：菜单项数据项
   */

  /**
   * 菜单显示时触发
   * @event show
   */

  /**
   * 菜单隐藏时触发
   * @event hide
   */

  /**
   * 右键菜单触发显示时
   * @event contextmenu
   * @param {VNode} vnode 触发的元素虚拟节点
   */

  export default {
    name: 'MyContextmenu',
    components: {
      Contextmenu,
      ContextmenuSubmenu,
      ContextmenuGroup,
      ContextmenuItem,
      MyIcon
    },
    /**
     * 属性参数
     * @member props
     * @property {string} [eventType=contextmenu] 触发其显示的事件类型
     * @property {string} [theme=default] 主题风格，可选 'default', 'dark', 'bright'
     * @property {boolean} [disabled] 禁用
     * @property {boolean} [autoPlacement=true] 是否自动切换方位，即当菜单显示时溢出浏览器窗口可视区域，自动切换显示方位
     * @property {Array} [data] 菜单项数据配置
     * @property {string} [data.title] 菜单项名称
     * @property {string|Object} [data.icon] 图标
     * @property {boolean} [data.divider] 显示分隔线
     * @property {boolean} [data.disabled] 禁用
     * @property {boolean} [data.autoHide=true] 点击菜单项后隐藏
     * @property {number} [data.maxWidth] 最大宽度，对group=true才有效
     * @property {Array} [data.group] 分组菜单项
     * @property {Array} [data.children] 子菜单项
     *
     */
    props: {
      // 触发其显示的事件类型
      eventType: {
        type: String,
        default: 'contextmenu'
      },
      // 主题
      theme: {
        type: String,
        default: 'default',
        validator(val) {
          return ['default', 'dark', 'bright'].includes(val)
        }
      },
      // disabled
      disabled: {
        type: Boolean
      },
      // 是否自动切换方位，即当菜单显示时溢出浏览器窗口可视区域，自动切换显示方位
      autoPlacement: {
        type: Boolean,
        default: true
      },
      // 数据：[{divider, title, icon, disabled, autoHide, maxWidth, group:[],children:[]}]
      data: Array
    },
    methods: {
      createIcon(icon) {
        if (!icon) return null
        const iconProps = typeof icon === 'object' ? icon : {name: icon}
        return (<MyIcon class="my-contextmenu__placeholder" {...{props: iconProps}}></MyIcon>)
      },
      createItems(items = []) {
        const hasIcon = !!items.find(item => item.icon)
        return items.map(item => {
          if (item.group) {
            return (
              <ContextmenuGroup {...{props: item}}>
                {this.createItems(item.group)}
              </ContextmenuGroup>
            )
          } else if (item.children) {
            return (
              <ContextmenuSubmenu {...{
                props: item,
                on: {
                  mouseenter: this.handleMouseEnter.bind(this, item),
                  mouseleave: this.handleMouseLeave.bind(this, item)
                }
              }}>
                <template slot="title">
                  {
                    [
                      this.createIcon(item.icon),
                      (hasIcon && !item.icon) ? (<i class="my-contextmenu__placeholder"></i>) : null,
                      item.title
                    ]
                  }
                </template>
                {this.createItems(item.children)}
              </ContextmenuSubmenu>
            )
          } else {
            const scopedSlots = item => {
              return this.$scopedSlots.default
                ? this.$scopedSlots.default({
                  item: item
                })
                : [
                  this.createIcon(item.icon),
                  (hasIcon && !item.icon) ? (<i class="my-contextmenu__placeholder"></i>) : null,
                  item.title
                ]
            }
            return (
              <ContextmenuItem {...{
                props: item,
                on: {
                  click: this.handleClick.bind(this, item),
                  mouseenter: this.handleMouseEnter.bind(this, item),
                  mouseleave: this.handleMouseLeave.bind(this, item)
                }
              }}>
                {
                  scopedSlots(item)
                }
              </ContextmenuItem>
            )
          }
        })
      },
      // 继承输入组件暴露的方法
      extendMethods(ref, names = []) {
        if (!ref) return

        names.forEach(name => {
          // 子组件的方法加到实例
          this[name] = (...args) => {
            ref[name].apply(ref, args)
          }
        })
      },
      handleClick(item, vm, e) {
        /**
         * 点击菜单项时触发
         * @event click
         * @param {object} 菜单项数据
         */
        this.$emit('click', item, vm, e)
      },
      handleMouseEnter(item, vm, e) {
        /**
         * 鼠标进入菜单项时触发
         * @event mouseenter
         * @param {object} 菜单项数据
         */
        this.$emit('mouseenter', item, vm, e)
      },
      handleMouseLeave(item, vm, e) {
        /**
         * 鼠标离开菜单项时触发
         * @event mouseenter
         * @param {object} 菜单项数据
         */
        this.$emit('mouseleave', item, vm, e)
      }
    },
    render() {
      const props = {
        eventType: this.eventType,
        theme: this.theme,
        disabled: this.disabled,
        autoPlacement: this.autoPlacement

      }
      return (
        <Contextmenu {...{on: this.$listeners, props: props}} ref="contextmenu" class="my-contextmenu">
          {this.createItems(this.data)}
        </Contextmenu>
      )
    },
    mounted() {
      this.extendMethods(this.$refs.contextmenu, ['show', 'hide', 'hideAll'])
    }
  }
</script>

