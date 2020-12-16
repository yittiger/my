<template>
  <my-dv-page v-bind="$attrs">
    <my-dv-box fit>
      <my-map height="100%" width="100%" :zoom="9" :filter="filter">
        <my-map-scatter :coordinate="[113.361999, 23.130592]"
                        :ripple="ripple"
                        fill="red"></my-map-scatter>
      </my-map>
    </my-dv-box>
    <div class="top-mask"></div>
    <div class="left-mask"></div>
    <div class="right-mask"></div>
    <my-dv-border1 class="none-events" fit :opacity="0.7"></my-dv-border1>
    <my-dv-adorn5 top="50px" width="800px" x-align="center" :opacity="0.8"></my-dv-adorn5>
    <my-dv-title :level="2" top="20px" type="primary" strong shadow
                 x-align="center" :opacity="0.8">数据可视化大屏页面
    </my-dv-title>
    <my-dv-box layout :gap="20" right="20px" top="100px" width="25%" height="calc(100% - 140px)">
      <my-dv-box width="100%">
        <my-dv-title :level="6" strong shadow :icon="{name:'icon-star-fill',svg:true}" type="primary" top="10px"
                     left="10px">
          数据模块名称
        </my-dv-title>
        <my-dv-progress width="33%" height="100%" x-align="left" y-align="middle" :value="10" :color="1"
                        :radius="80"></my-dv-progress>
        <my-dv-progress width="33%" x-align="center" y-align="middle" :value="30" :color="2"
                        :radius="80"></my-dv-progress>
        <my-dv-progress width="33%" x-align="right" y-align="middle" :value="87" color="yellow"
                        :radius="80"></my-dv-progress>
      </my-dv-box>
      <my-dv-box width="100%">
        <my-dv-title :level="6" strong shadow :icon="{name:'icon-star-fill',svg:true}" type="primary" top="10px"
                     left="10px">
          数据模块名称
        </my-dv-title>

        <my-dv-line fit :columns="line.columns" :rows="line.rows" legend :settings="line.settings" rotate></my-dv-line>
      </my-dv-box>
      <my-dv-box width="100%">
        <my-dv-title :level="6" strong shadow :icon="{name:'icon-star-fill',svg:true}" type="primary" top="10px"
                     left="10px">
          数据模块名称
        </my-dv-title>
        <my-dv-bar top="20px" fit :columns="bar.columns" :rows="bar.rows" legend></my-dv-bar>
      </my-dv-box>
    </my-dv-box>
  </my-dv-page>
</template>
<script>

  import {deepBlue} from '$ui/map/utils/filters'
  import '$ui/icons/star-fill'

  export default {
    data() {
      return {
        filter: deepBlue,
        ripple: {
          period: 1, //  动画周期，秒数
          scale: 8, // 动画中波纹的最大缩放比
          strokeColor: 'red',
          strokeWidth: 5, // 边框宽度
          type: 'stroke' // 渲染类型 fill 或 stroke
        },
        ring: {
          columns: ['渠道', '访问量'],
          rows: [
            ['直接访问', 320],
            ['邮件营销', 302],
            ['联盟广告', 334],
            ['视频广告', 390],
            ['搜索引擎', 330]
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
        bar: {
          columns: ['星期', '直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
          rows: [
            ['周一', 320, 302, 301, 334, 390, 330, 320],
            ['周二', 120, 132, 101, 134, 90, 230, 210],
            ['周三', 220, 182, 191, 234, 290, 330, 310],
            ['周四', 150, 212, 201, 154, 190, 330, 410],
            ['周五', 320, 132, 401, 334, 290, 330, 320]
          ]
        }
      }
    }
  }

</script>

<style lang="scss" scoped>
  .my-dv-page {
    background: #0d1b35;
  }

  .none-events {
    pointer-events: none;
  }

  .top-mask {
    pointer-events: none;
    width: 100%;
    height: 100px;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(to bottom, #0d1b35 50%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.8;
  }

  .left-mask {
    pointer-events: none;
    width: 5%;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: linear-gradient(to right, #0d1b35 10%, rgba(0, 0, 0, 0) 100%);
  }

  .right-mask {
    pointer-events: none;
    width: 28%;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(to left, #0d1b35 80%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.8;
  }
</style>
