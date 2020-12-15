<template>
  <Box class="my-dv-list" :class="classes" :default-height="contentHeight" v-bind="$attrs">
    <table v-if="header"
           ref="header"
           class="my-dv-list__header"
           cellspacing="0"
           cellpadding="0">
      <ListColGroup :columns="tableColumns" :default-width="cellWidth"></ListColGroup>
      <thead>
      <tr>
        <th v-for="(col, index) in tableColumns"
            :key="`tr_${_uid}_col_${index}`">
          <slot name="column" :col="col" :index="index">
            {{col.label}}
          </slot>
        </th>
      </tr>
      </thead>
    </table>
    <MyMarquee class="my-dv-list__body-wrapper"
               ref="marquee"
               :data="rows"
               :style="bodyStyle"
               @resize="marqueeResize"
               v-bind="scrollProps">
      <table v-if="rows.length" class="my-dv-list__body"
             cellspacing="0"
             cellpadding="0">
        <ListColGroup :columns="tableColumns" :default-width="cellWidth"></ListColGroup>
        <tr v-for="(row, rowIndex) in rows" :key="`row_${rowIndex}`">
          <td v-for="(item, itemIndex) in getRow(row)" :key="`item_${itemIndex}`">
            <slot :name="getSlotName(itemIndex)" :row="row" :item="item" :index="itemIndex" :rowIndex="rowIndex">
              {{item}}
            </slot>
          </td>
        </tr>
      </table>
      <div v-else class="my-dv-list__empty">
        <slot name="empty">暂无数据</slot>
      </div>
    </MyMarquee>

  </Box>
</template>

<script>
  /**
   * 列表
   * @module $ui/dv/my-dv-list
   */
  import Box from '../my-dv-box'
  import ListColGroup from './ColGroup'
  import {MyMarquee} from '$ui'

  export default {
    name: 'MyDvList',
    components: {
      Box,
      ListColGroup,
      MyMarquee
    },
    /**
     * 属性参数
     * @member props
     * @property {String[]|Object[]} [columns] 数据列
     * @property {string} [columns.label] 列头文本
     * @property {string} [columns.prop] 列名称，如果行是对象格式，必须要设置
     * @property {number} [columns.width] 列宽度
     * @property {Array} [rows] 数据行
     * @property {boolean} [header=true] 显示列头
     * @property {boolean} [border] 显示边框
     * @property {boolean} [radius] 显示圆角
     * @property {Boolean|Object} [scroll] 滚动配置
     */
    props: {
      // [{label, prop, width}]
      columns: {
        type: Array,
        default() {
          return []
        }
      },
      rows: {
        type: Array,
        default() {
          return []
        }
      },
      header: {
        type: Boolean,
        default: true
      },
      border: Boolean,
      radius: Boolean,
      background: Boolean,
      scroll: [Boolean, Object]
    },
    data() {
      return {
        headerHeight: 0,
        headerWidth: 0,
        contentHeight: 'auto'
      }
    },
    computed: {
      tableColumns() {
        return this.columns.map(col => {
          return typeof col === 'object' ? col : {label: col}
        })
      },
      classes() {
        return {
          'is-border': this.border,
          'is-radius': this.radius,
          'is-no-header': !this.header,
          'is-odd': this.rows.length % 2 === 0,
          'is-no-background': !this.background
        }
      },
      bodyStyle() {
        return {
          height: `calc(100% - ${this.headerHeight}px)`
        }
      },
      scrollProps() {
        return {
          disabled: !this.scroll,
          speed: 0.5,
          ...this.scroll
        }
      },
      cellWidth() {
        let total = this.headerWidth
        let count = 0
        this.tableColumns.forEach(n => {
          if (n.width || n.minWidth) {
            total -= (n.width || n.minWidth || 0)
          } else {
            ++count
          }
        })
        return count > 0 ? total / count : 0
      }
    },
    watch: {
      header() {
        this.updateHeaderHeight()
      }
    },
    methods: {
      getRow(row) {
        if (Array.isArray(row)) {
          return row
        }
        return this.tableColumns.map(col => row[col.prop])
      },
      getSlotName(itemIndex) {
        const col = this.tableColumns[itemIndex]
        return col?.prop
      },
      updateHeaderHeight() {
        const rect = this.$refs?.header?.getBoundingClientRect()
        this.headerHeight = rect ? rect.height : 0
        this.headerWidth = rect ? rect.width : 0
        if (this.$refs.marquee) {
          this.$nextTick(this.$refs.marquee.renderCopyHtml)
        }
      },
      marqueeResize({height}) {
        if (this.$attrs.height) {
          this.contentHeight = this.$attrs.height
        } else {
          this.contentHeight = height ? `${height}px` : 'auto'
        }
      }
    },
    mounted() {
      this.updateHeaderHeight()
      this.marqueeResize({})
    }
  }
</script>

<style lang="scss">
  @import "../../style/vars";


  @include b(dv-list) {
    table {
      width: 100%;
      border-collapse: collapse;

    }

    td, th {
      padding: 8px 10px;
      text-align: left;
    }

    @include e(header) {
      background: $--dv-color-table-header;
      color: $--dv-text-normal;
      th {
        border-bottom: transparent !important;
      }
    }

    @include e(body-wrapper) {
      background: $--dv-color-background;
      color: $--dv-text-normal;
    }

    @include e(body) {
      tr:nth-child(odd) {
        background: $--dv-color-table-stripe;
      }
      tr:hover {
        background: $--dv-color-table-hover;
      }
    }

    @include e(empty) {
      padding: 20px;
      text-align: center;
      color: $--dv-text-secondary;
    }

    @include when(border) {
      td, th {
        border: 1px solid $--dv-color-border;
      }
    }

    @include when(radius) {

      @include e(header) {
        border-radius: 4px 4px 0 0;
      }

      @include e(body-wrapper) {
        border-radius: 0 0 4px 4px;
      }
      @include when(no-header) {
        @include e(body-wrapper) {
          border-radius: 4px 4px 4px 4px;
        }
      }
    }

    @include when(odd) {
      .my-marquee__copy-content {
        tr:nth-child(odd) {
          background: transparent;
        }

        tr:nth-child(even) {
          background: $--dv-color-table-stripe;
        }
      }
    }

    @include when(no-background) {
      @include e(body-wrapper) {
        background: transparent;
      }
      @include e(header) {
        background: transparent;
      }
    }

  }
</style>
