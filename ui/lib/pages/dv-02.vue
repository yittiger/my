<template>
  <my-dv-page v-bind="$attrs">
    <my-dv-header6>
      <my-dv-title type="primary" strong shadow>数据可视化大屏页面</my-dv-title>
    </my-dv-header6>
    <my-dv-menu :data="menus" :defaultActive="defaultMenuActive" right="0" top="15px"></my-dv-menu>

    <my-dv-box layout :gap="40" top="120px" width="calc(100% - 80px)" height="calc(100% - 160px)"
               x-align="center">
      <my-dv-box layout direction="column" :gap="40" :weight="1" width="100%">
        <my-dv-border6 v-for="(item,index) in stats"
                       :key="index"
                       height="100%">
          <my-dv-icon :icon="{name:item.icon,svg:true}" :size="65" :opacity="0.7" left="20px" type="primary"
                      top="15px"></my-dv-icon>
          <my-dv-number :value="item.value" left="100px" top="10px"></my-dv-number>
          <my-dv-text :level="3" left="100px" top="60px" :opacity="0.7">{{item.label}}</my-dv-text>
        </my-dv-border6>
      </my-dv-box>
      <my-dv-box layout direction="column" :gap="40" :weight="4" width="100%">
        <my-dv-border6 height="100%">
          <my-dv-title :level="6" strong left="20px" top="10px">接入机型占比</my-dv-title>
          <my-dv-loading v-if="loading"></my-dv-loading>
          <my-dv-ring v-else fit :columns="pie.columns" :rows="pie.rows" legend="v" :radius="60" label></my-dv-ring>
        </my-dv-border6>
        <my-dv-border6 height="100%">
          <my-dv-title :level="6" strong left="20px" top="10px">存储</my-dv-title>
          <my-dv-loading v-if="loading"></my-dv-loading>
          <my-dv-progress v-if="!loading" width="33%"
                          height="100%"
                          title="Hdfs"
                          x-align="left"
                          :font-size="20"
                          :radius="60"
                          y-align="middle"
                          :value="10"
                          :color="1"></my-dv-progress>
          <my-dv-progress v-if="!loading" width="33%"
                          height="100%"
                          title="Rdbms"
                          x-align="center"
                          y-align="middle"
                          :font-size="20"
                          :value="30"
                          :color="2"></my-dv-progress>
          <my-dv-progress v-if="!loading" width="33%"
                          height="100%"
                          title="Rdies"
                          x-align="right"
                          y-align="middle"
                          :font-size="20"
                          :value="87"
                          :color="3"></my-dv-progress>
        </my-dv-border6>
      </my-dv-box>
      <my-dv-box layout direction="column" :gap="40" :weight="4" width="100%">
        <my-dv-border6 height="100%">
          <my-dv-title :level="6" strong left="20px" top="10px">30天日均线流量趋势</my-dv-title>
          <my-dv-loading v-if="loading"></my-dv-loading>
          <my-dv-line v-else top="40px" height="calc(100% - 40px)" width="100%" :loader="daysLoader"
                      :extend="lineExtend" area
                      rotate></my-dv-line>
        </my-dv-border6>
        <my-dv-border6 height="100%">
          <my-dv-title :level="6" strong left="20px" top="10px">集群性能</my-dv-title>
          <my-dv-loading v-if="loading"></my-dv-loading>
          <my-dv-line v-else top="20px" height="calc(100% - 20px)" width="100%" :loader="hourLoader"
                      :extend="lineExtend"
                      legend rotate></my-dv-line>
        </my-dv-border6>
      </my-dv-box>
    </my-dv-box>
  </my-dv-page>
</template>
<script>
  import '$ui/icons/computer-fill'
  import '$ui/icons/database-fill'
  import '$ui/icons/backstage-data-fill'
  import '$ui/icons/gantt'
  import '$ui/icons/cloud-disk-fill'
  import dateFormat from '$ui/utils/date'

  export default {
    data() {
      return {
        menus: [
          {text: '导航菜单'},
          {text: '导航菜单'},
          {text: '导航菜单'}
        ],
        defaultMenuActive: 0,
        stats: [
          {
            label: '接入终端数量',
            value: 342343,
            icon: 'icon-computer-fill'
          },
          {
            label: '今日接入数据量',
            value: 72342343,
            icon: 'icon-database-fill'
          },
          {
            label: '今日新增存储数据',
            value: 1342343,
            icon: 'icon-backstage-data-fill'
          },
          {
            label: '当前任务个数',
            value: 323,
            icon: 'icon-gantt'
          },
          {
            label: '当前集群数',
            value: 8,
            icon: 'icon-cloud-disk-fill'
          }
        ],
        pie: {
          columns: ['机型', '数量'],
          rows: [
            ['A机型', 1320],
            ['B机型', 1002],
            ['C机型', 934],
            ['D机型', 890],
            ['E机型', 730],
            ['G机型', 630],
            ['H机型', 530],
            ['I机型', 430]
          ]
        },
        lineExtend: {
          xAxis: {
            axisLabel: {
              interval: 'auto'
            }
          },
          series: {
            showSymbol: false
          }
        },
        loading: true
      }
    },
    methods: {
      daysLoader() {
        const count = 30,
          now = new Date(),
          rows = []
        for (let i = 0; i < count; i++) {
          rows.unshift([
            dateFormat(now, 'MM/dd', {d: -i}),
            Math.random() * 1000 / (i / 10 + 1)
          ])
        }
        return Promise.resolve({
          columns: ['天', '流量'],
          rows
        })
      },
      hourLoader() {
        const count = 12,
          now = new Date(),
          rows = []
        for (let i = 0; i < count; i++) {
          rows.unshift([
            dateFormat(now, 'hh:mm', {m: -5 * i}),
            Math.random() * 1000,
            Math.random() * 1000,
            Math.random() * 1000
          ])
        }
        return Promise.resolve({
          columns: ['时间', '网络', 'CPU', '内存'],
          rows
        })
      }
    },
    mounted() {
      setTimeout(() => {
        this.loading = false
      }, 500)
    }
  }
</script>
<style lang="scss" scoped>
  .my-dv-page {
    background-image: url("~$ui/assets/bg/03.jpg");
    background-size: cover;
  }
</style>
