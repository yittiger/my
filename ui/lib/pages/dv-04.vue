<template>
  <my-dv-page v-bind="$attrs">
    <my-dv-header3>
      <my-dv-title type="primary" strong shadow x-align="center">数据可视化大屏页面</my-dv-title>
    </my-dv-header3>
    <my-dv-box layout :gap="20" top="100px" left="20px" width="calc(100% - 40px)" height="calc(100% - 120px)">
      <my-dv-box width="100%" :weight="2" layout direction="column" :gap="20">
        <my-dv-box layout :gap="20" height="100%">
          <my-dv-border9 width="100%">
            <my-dv-title :level="6" left="10px" top="10px" shadow strong type="primary">全省技术比中流转情况</my-dv-title>
            <my-dv-box layout :gap="0" top="50px" height="calc(100% - 40px)" width="100%">
              <my-dv-box v-for="(items,index) in chart1" :key="index" layout width="100%" direction="column">
                <my-dv-box v-for="(item,key) in items" :key="key" height="100%" content-align="center">
                  <my-dv-number :value="item.value" :level="3" :position="false"
                                :percentage="item.percentage"></my-dv-number>
                  <my-dv-text :level="4" :position="false" type="secondary">{{item.label}}</my-dv-text>
                </my-dv-box>
              </my-dv-box>

            </my-dv-box>
          </my-dv-border9>
          <my-dv-border9 width="100%">
            <my-dv-title :level="6" left="10px" top="10px" shadow strong type="primary">全省技术比中流转情况</my-dv-title>
            <my-dv-ring fit :columns="pie.columns" :rows="pie.rows" legend="v"></my-dv-ring>
          </my-dv-border9>
        </my-dv-box>
        <my-dv-border9 height="100%" :weight="3">
          <my-dv-title :level="6" left="10px" top="10px" shadow strong type="primary">全省技术比中流转情况</my-dv-title>
          <my-dv-loading v-if="loading"></my-dv-loading>
          <my-dv-geo v-else fit :json="map.json" :columns="map.columns" :rows="map.rows"
                     :visual="map.visual"></my-dv-geo>
          <my-dv-menu :data="menus" :default-active="menuActiveIndex" @click="handleMenuClick" top="0px" right="70px"
                      :zoom="0.7"></my-dv-menu>
        </my-dv-border9>
        <my-dv-box layout :gap="20" height="100%">
          <my-dv-border9 width="100%">
            <my-dv-title :level="6" left="10px" top="10px" shadow strong type="primary">全省技术比中流转情况</my-dv-title>
            <my-dv-list scroll
                        top="30px"
                        width="100%"
                        height="260px"
                        :columns="list.columns"
                        :rows="list.rows"></my-dv-list>
          </my-dv-border9>
          <my-dv-border9 width="100%">
            <my-dv-title :level="6" left="10px" top="10px" shadow strong type="primary">全省技术比中流转情况</my-dv-title>
            <my-dv-list scroll
                        top="30px"
                        width="100%"
                        height="260px"
                        :columns="list.columns"
                        :rows="list.rows"></my-dv-list>
          </my-dv-border9>
        </my-dv-box>
      </my-dv-box>
      <my-dv-box width="100%" layout direction="column" :gap="20">
        <my-dv-border9 height="100%">
          <my-dv-title :level="6" left="10px" top="10px" shadow strong type="primary">全省技术比中流转情况</my-dv-title>
          <my-dv-bar fit :columns="bar.columns" :rows="bar.rows" legend></my-dv-bar>
        </my-dv-border9>
        <my-dv-border9 height="100%">
          <my-dv-title :level="6" left="10px" top="10px" shadow strong type="primary">全省技术比中流转情况</my-dv-title>
          <my-dv-line fit :columns="line.columns" :rows="line.rows" legend :settings="line.settings"></my-dv-line>
        </my-dv-border9>
      </my-dv-box>
    </my-dv-box>


  </my-dv-page>
</template>
<script>
  import china from '$ui/charts/geo/china.json'

  export default {
    data() {
      return {
        chart1: [
          [{
            label: '由人到案 总启动数',
            value: 12383
          }, {
            label: '由人到案 总启动数',
            value: 12383
          }],
          [{
            label: '由人到案 总启动数',
            value: 12383
          }, {
            label: '由人到案 总启动数',
            value: 12383
          }],
          [{
            label: '由人到案 总启动数',
            value: 1,
            percentage: true
          }, {
            label: '由人到案 总启动数',
            value: 0.86,
            percentage: true
          }]
        ],
        pie: {
          columns: ['渠道', '访问量'],
          rows: [
            ['直接访问', 320],
            ['邮件营销', 302],
            ['联盟广告', 334]
          ]
        },
        bar: {
          columns: ['星期', '直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
          rows: [
            ['周一', 320, 302, 301, 334, 390, 330, 320],
            ['周二', 120, 132, 101, 134, 90, 230, 210],
            ['周三', 220, 182, 191, 234, 290, 330, 310],
            ['周四', 150, 212, 201, 154, 190, 330, 410],
            ['周五', 320, 132, 401, 334, 290, 330, 320]
          ]
        },
        line: {
          columns: ['月份', '直接访问', '搜索引擎'],
          rows: [
            ['一月', 100, 30],
            ['二月', 60, 20],
            ['三月', 78, 25],
            ['四月', 90, 40],
            ['五月', 110, 70],
            ['六月', 87, 60],
            ['七月', 90, 76],
            ['八月', 75, 45],
            ['九月', 63, 46],
            ['十月', 80, 70],
            ['十一月', 90, 85],
            ['十二月', 105, 96]
          ],
          settings: {
            stack: ['直接访问', '搜索引擎']
          }
        },
        map: {
          json: china,
          columns: ['省份', '人口数量'],
          rows: [
            ['广东', 100],
            ['北京', 60],
            ['广西', 78],
            ['湖南', 90],
            ['湖北', 110],
            ['福建', 87],
            ['新疆', 90],
            ['贵州', 75],
            ['江苏', 63],
            ['山西', 80],
            ['山东', 90],
            ['黑龙江', 105]
          ],
          visual: {
            show: true,
            color: ['#1de2ff', 'rgba(24,144,255,0.13)']
          }
        },
        list: {
          columns: ['省份', '完成率', '完成率'],
          rows: [
            ['广东', '89%', '89%'],
            ['广东', '89%', '89%'],
            ['广东', '89%', '89%'],
            ['广东', '89%', '89%'],
            ['广东', '89%', '89%'],
            ['广东', '89%', '89%'],
            ['广东', '89%', '89%'],
            ['广东', '89%', '89%'],
            ['广东', '89%', '89%'],
            ['广东', '89%', '89%']
          ]
        },
        menus: [
          {text: '年', width: 150},
          {text: '月', width: 150},
          {text: '日', width: 150}
        ],
        menuActiveIndex: 0,
        loading: true
      }
    },
    methods: {
      handleMenuClick(item, index) {
        console.log(index)
        this.menuActiveIndex = index
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

  .my-dv-list {

    /deep/ {
      td, th {
        text-align: center;
      }
    }
  }

  .my-dv-menu {
    /deep/ {
      .my-dv-menu-item {
        margin-left: -50px;
      }
    }
  }
</style>
