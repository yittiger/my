<template>
  <my-dv-page v-bind="$attrs">
    <my-dv-header2>
      数据可视化大屏页面
    </my-dv-header2>
    <my-dv-geo top="100px"
               width="65%"
               height="65%"
               x-align="left"
               :json="geoJson"
               :extend="geoExtend"
               :columns="map.columns"
               :rows="map.rows"
               :type="map.type"
               :coords="map.coords"
               debug></my-dv-geo>
    <my-dv-box top="150px" width="15%" left="65%">
      <my-dv-text :level="2">考核总次数</my-dv-text>
      <my-dv-number :value="8329" top="20px" :zoom="1.5" type="warning"></my-dv-number>
      <my-dv-adorn2 width="60%" top="100px"></my-dv-adorn2>
    </my-dv-box>

    <my-dv-box top="300px" width="15%" left="65%">
      <my-dv-text :level="2">考核总次数</my-dv-text>
      <my-dv-number :value="8329" top="20px" :zoom="1.5" type="warning"></my-dv-number>
      <my-dv-adorn2 width="60%" top="100px"></my-dv-adorn2>
    </my-dv-box>

    <my-dv-box top="450px" width="15%" left="65%">
      <my-dv-text :level="2">考核总次数</my-dv-text>
      <my-dv-number :value="0.6" top="20px" :zoom="1.5" type="warning" percentage></my-dv-number>
      <my-dv-adorn2 width="60%" top="100px"></my-dv-adorn2>
    </my-dv-box>

    <my-dv-box top="600px" width="15%" left="65%">
      <my-dv-text :level="2">考核总次数</my-dv-text>
      <my-dv-number :value="0.8" top="20px" :zoom="1.5" type="warning" percentage></my-dv-number>
      <my-dv-adorn2 width="60%" top="100px"></my-dv-adorn2>
    </my-dv-box>

    <my-dv-box width="24%" height="200px" top="90px" right="20px">
      <my-dv-title :icon="{name:'icon-aims', svg:true}"
                   :level="6"
                   :zoom="0.8"
                   strong
                   shadow>KPI考核标准
      </my-dv-title>
      <my-dv-ring top="10px" height="100%" width="33%" :columns="pieChart.columns" :rows="pieChart.rows"
                  :radius="60"></my-dv-ring>
      <my-dv-ring top="10px" height="100%" width="33%" x-align="center" :columns="pieChart.columns"
                  :rows="pieChart.rows" :radius="60"></my-dv-ring>
      <my-dv-ring top="10px" height="100%" width="33%" right="0px" :columns="pieChart.columns" :rows="pieChart.rows"
                  :radius="60"></my-dv-ring>
    </my-dv-box>

    <my-dv-box width="24%" height="calc((100% - 330px)/3)" top="300px" right="20px">
      <my-dv-title :icon="{name:'icon-aims', svg:true}"
                   :level="6"
                   :zoom="0.8"
                   strong
                   shadow>KPI考核标准
      </my-dv-title>
      <my-dv-line fit :columns="lineChart.columns" :rows="lineChart.rows" legend :settings="lineChart.settings"
                  :extend="lineChart.extend"></my-dv-line>
    </my-dv-box>

    <my-dv-box width="24%" height="calc((100% - 330px)/3)" top="calc((100% - 300px)/3 + 300px)" right="20px">
      <my-dv-title :icon="{name:'icon-aims', svg:true}"
                   :level="6"
                   :zoom="0.8"
                   strong
                   shadow>KPI考核标准
      </my-dv-title>

      <my-dv-line fit :columns="lineBar.columns" :rows="lineBar.rows" :settings="lineBar.settings"
                  :extend="lineBar.extend"></my-dv-line>
    </my-dv-box>


    <my-dv-box width="24%" height="calc((100% - 330px)/3)" top="calc((100% - 300px)/3 + 300px)" right="20px">
      <my-dv-title :icon="{name:'icon-aims', svg:true}"
                   :level="6"
                   :zoom="0.8"
                   strong
                   shadow>KPI考核标准
      </my-dv-title>

      <my-dv-line fit :columns="lineBar.columns" :rows="lineBar.rows" :settings="lineBar.settings"
                  :extend="lineBar.extend"></my-dv-line>
    </my-dv-box>

    <my-dv-box width="24%" height="calc((100% - 330px)/3)" bottom="20px"
               right="20px">
      <my-dv-title :icon="{name:'icon-aims', svg:true}"
                   :level="6" :zoom="0.8" strong shadow>KPI考核标准
      </my-dv-title>

      <my-chart-cloud :data="cloud" height="100%" width="100%"></my-chart-cloud>
    </my-dv-box>


    <my-dv-box width="calc((74% - 100px)/4)" height="calc((100% - 330px)/3)" left="20px" bottom="20px">
      <my-dv-title :icon="{name:'icon-aims', svg:true}"
                   :level="6" :zoom="0.8" strong shadow>KPI考核标准
      </my-dv-title>

      <my-dv-list scroll
                  top="30px"
                  width="100%"
                  height="220px"
                  :columns="list.columns"
                  :rows="list.rows"></my-dv-list>
    </my-dv-box>

    <my-dv-box width="calc((74% - 100px)/4)" height="calc((100% - 330px)/3)" bottom="20px"
               left="calc((74% - 100px)*1/4 + 40px)">
      <my-dv-title :icon="{name:'icon-aims', svg:true}"
                   :level="6" :zoom="0.8" strong shadow>KPI考核标准
      </my-dv-title>

      <my-dv-bar fit top="20px" :columns="stack.columns" :rows="stack.rows" :settings="stack.settings"></my-dv-bar>
    </my-dv-box>

    <my-dv-box width="calc((74% - 100px)/4)" height="calc((100% - 330px)/3)" bottom="20px"
               left="calc((74% - 100px)*2/4 + 60px)">
      <my-dv-title :icon="{name:'icon-aims', svg:true}"
                   :level="6" :zoom="0.8" strong shadow>KPI考核标准
      </my-dv-title>

      <my-dv-rank fit top="20px" :columns="rank.columns" :rows="rank.rows"></my-dv-rank>
    </my-dv-box>

    <my-dv-box width="calc((74% - 100px)/4)" height="calc((100% - 330px)/3)" bottom="20px"
               left="calc((74% - 100px)*3/4 + 80px)">
      <my-dv-title :icon="{name:'icon-aims', svg:true}"
                   :level="6" :zoom="0.8" strong shadow>KPI考核标准
      </my-dv-title>

      <my-dv-radar fit top="20px" :columns="radar.columns" :rows="radar.rows"></my-dv-radar>
    </my-dv-box>

  </my-dv-page>
</template>
<script>
  import china from '$ui/charts/geo/world.json'
  import '$ui/icons/aims'

  const coords = [
    {label: '北京', value: [116, 40]},
    {label: '巴黎', value: [2, 49]}
  ]
  export default {
    data() {
      return {
        geoJson: china,
        geoExtend: {
          geo: {
            left: 20,
            right: 20,
            top: 20,
            bottom: 20,
            show: false,
            roam: false
          },
          series: {
            left: 20,
            right: 20,
            top: 20,
            bottom: 20,
            roam: false,
            itemStyle: {
              normal: {
                areaColor: '#2191ad',
                borderColor: '#0a2c34'
              },
              emphasis: {
                areaColor: '#2a71c4'
              }
            }
          }
        },
        map: {
          coords: coords,
          type: {人口数量: 'effectScatter'},
          columns: ['省份', '人口数量'],
          rows: [
            ['北京', 100],
            ['巴黎', 60]
          ]
        },
        pieChart: {
          columns: ['渠道', '访问量'],
          rows: [
            ['直接访问', 320],
            ['邮件营销', 302],
            ['联盟广告', 334],
            ['视频广告', 390],
            ['搜索引擎', 330]
          ]
        },
        lineChart: {
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
          },
          extend: {
            grid: {
              top: 60,
              right: 20,
              left: 50,
              bottom: 40
            },
            xAxis: {
              axisLabel: {
                interval: 'auto'
              }
            }
          }
        },
        lineBar: {
          columns: ['月份', '访问量', '留存率'],
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
            valueAxis: ['访问量', '留存率'],
            bars: ['访问量']
          },
          extend: {
            grid: {
              top: 80,
              right: 50,
              left: 50,
              bottom: 40
            },
            xAxis: {
              axisLabel: {
                interval: 'auto'
              }
            }
          }
        },
        cloud: {
          columns: ['标签', '权重'],
          rows: [
            ['直接访问', 1],
            ['邮件营销', 2],
            ['邮件营销', 2],
            ['邮件营销', 2],
            ['邮件营销', 2],
            ['邮件营销', 2],
            ['邮件营销', 2],
            ['联盟广告', 2],
            ['联盟广告', 2],
            ['联盟广告', 2],
            ['联盟广告', 2],
            ['联盟广告', 2],
            ['联盟广告', 2],
            ['视频广告', 3],
            ['搜索引擎', 4]
          ]
        },
        list: {
          columns: ['省份', '完成率', '完成率', '完成率'],
          rows: [
            ['广东', '89%', '89%', '12%'],
            ['广东', '89%', '89%', '12%'],
            ['广东', '89%', '89%', '12%'],
            ['广东', '89%', '89%', '12%'],
            ['广东', '89%', '89%', '12%'],
            ['广东', '89%', '89%', '12%'],
            ['广东', '89%', '89%', '12%'],
            ['广东', '89%', '89%', '12%'],
            ['广东', '89%', '89%', '12%']
          ]
        },
        stack: {
          columns: ['星期', '直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
          rows: [
            ['周一', 320, 302, 301, 334, 390, 330, 320],
            ['周二', 120, 132, 101, 134, 90, 230, 210],
            ['周三', 220, 182, 191, 234, 290, 330, 310],
            ['周四', 150, 212, 201, 154, 190, 330, 410],
            ['周五', 320, 132, 401, 334, 290, 330, 320]
          ],
          settings: {
            stack: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
          }
        },
        rank: {
          columns: ['渠道', '访问量'],
          rows: [
            ['直接访问', 320],
            ['邮件营销', 302],
            ['联盟广告', 334],
            ['视频广告', 390],
            ['搜索引擎', 330]
          ]
        },
        radar: {
          columns: ['指标名称', '销售', '管理', '客服', '研发', '市场'],
          rows: [
            ['预算分配', 20, 50, 80, 29, 55, 60],
            ['实际开销', 30, 60, 30, 79, 45, 80]
          ]
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .my-dv-page {
    background-image: url("~$ui/assets/bg/03.jpg");
    background-size: cover;
  }
</style>

