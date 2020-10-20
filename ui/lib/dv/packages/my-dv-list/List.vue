<template>
  <Box class="my-dv-list" :class="classes" v-bind="$attrs">
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
               v-bind="scrollProps">
      <table class="my-dv-list__body"
             cellspacing="0"
             cellpadding="0">
        <ListColGroup :columns="tableColumns" :default-width="cellWidth"></ListColGroup>
        <tr v-for="(row, rowIndex) in rows" :key="`row_${rowIndex}`">
          <td v-for="(item, itemIndex) in getRow(row)" :key="`item_${itemIndex}`">
            <slot :name="tableColumns[itemIndex].prop" :row="row" :item="item" :index="itemIndex" :rowIndex="rowIndex">
              {{item}}
            </slot>
          </td>
        </tr>
      </table>
    </MyMarquee>
  </Box>
</template>

<script>
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
      scroll: [Boolean, Object]
    },
    data() {
      return {
        headerHeight: 0,
        headerWidth: 0
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
          'is-no-header': !this.header
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
          speed: 1,
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
      updateHeaderHeight() {
        const rect = this.$refs?.header?.getBoundingClientRect()
        this.headerHeight = rect ? rect.height : 0
        this.headerWidth = rect ? rect.width : 0
        this.$nextTick(this.$refs.marquee.renderCopyHtml)
      }
    },
    mounted() {
      this.updateHeaderHeight()
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
    }

    @include e(header) {
      background: $--dv-color-table-header;

      th {
        border-bottom: transparent !important;
      }
    }

    @include e(body-wrapper) {
      background: $--dv-color-background;
    }

    @include e(body) {
      tr:nth-child(odd) {
        background: $--dv-color-table-stripe;
      }
      tr:hover {
        background: $--dv-color-table-hover;
      }

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

  }
</style>
