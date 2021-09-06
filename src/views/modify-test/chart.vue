<template>
  <div class="page">
    <div>
      <my-radio v-model="colorType" :options="[
        {label: 'MY', value: 'my'}, 
        {label: '马卡龙', value: 'macaron'}
      ]"></my-radio>
    </div>
    <div class="color-palette">
      <div class="color-item" v-for="(item, index) in themeColors" :key="`col_${index}`">
        <div class="color" :style="{'background': item}"></div>
        <div class="name">{{item}}</div>
      </div>
    </div>

    <div class="warp" style="width: 60%">
      <!-- <my-chart-pie :data="data" :settings="settings"></my-chart-pie> -->
      <my-dv-page target="parent" fit>
        <my-chart-pie :data="pieData" :settings="pieSettings"></my-chart-pie>   
      </my-dv-page>
    </div>

    <div class="warp" style="width: 100%"> 
      <my-dv-page target="parent" fit>
        <my-dv-line fit :columns="lineData.columns" :rows="lineData.rows" :settings="lineSetting"></my-dv-line>
      </my-dv-page>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.page{
  height: 100%;
  .color-palette{
    display: flex;
    flex-flow: row wrap;
    .color-item{
      margin: 3px;
      .color{
        width: 15px;
        height: 15px;
        margin: 4px auto;
        border: 1px solid;
      }
    }
  }

  .warp{ 
    height: 400px;
    margin-bottom: 20px;
    border: 1px solid;
  }
}
</style>
<script>
export default {
  mixins: [],
  components: {},
  props: {
  },
  data() {
    return {
      colorType: 'my',
      defaultTheme: [
        '#37A2DA', '#32C5E9', '#67E0E3', '#9FE6B8', '#FFDB5C', '#ff9f7f', '#fb7293', '#E062AE', '#E690D1', '#e7bcf3', '#9d96f5', '#8378EA', '#96BFFF'
      ],
      macaronTheme: [
        '#2ec7c9', '#b6a2de', '#5ab1ef', '#ffb980', '#d87a80',
        '#8d98b3', '#e5cf0d', '#97b552', '#95706d', '#dc69aa',
        '#07a2a4', '#9a7fd1', '#588dd5', '#f5994e', '#c05050',
        '#59678c', '#c9ab00', '#7eb00a', '#6f5553', '#c14089'
      ],
      pieData: {
        columns: ['渠道', '访问量'],
        rows: [
          ['直接访问1', 320 + Math.round(Math.random() * 100)],
          ['邮件营销2', 302 + Math.round(Math.random() * 100)],
          ['联盟广告3', 334 + Math.round(Math.random() * 100)],
          ['视频广告4', 390 + Math.round(Math.random() * 100)],
          ['搜索引擎5', 330 + Math.round(Math.random() * 100)],
          ['直接访问6', 320 + Math.round(Math.random() * 100)],
          ['邮件营销7', 302 + Math.round(Math.random() * 100)],
          ['联盟广告8', 334 + Math.round(Math.random() * 100)],
          ['视频广告9', 390 + Math.round(Math.random() * 100)],
          ['搜索引擎10', 330 + Math.round(Math.random() * 100)],
          ['直接访问11', 320 + Math.round(Math.random() * 100)],
          ['邮件营销12', 302 + Math.round(Math.random() * 100)],
          ['联盟广告13', 334 + Math.round(Math.random() * 100)],
          ['视频广告14', 390 + Math.round(Math.random() * 100)],
          ['搜索引擎15', 330 + Math.round(Math.random() * 100)],
          ['直接访问16', 320 + Math.round(Math.random() * 100)],
          ['邮件营销17', 302 + Math.round(Math.random() * 100)]
        ]
      },
      pieSettings: {
        radius: ['50%', '70%'],
        center: ['30%', '50%'],
         legend: 'vertical'
      },

      lineData: {
        columns: ['月份', '开户', '比重'],
        rows: [
          ['1月', 100 + Math.round((Math.random() - 0.5) * 100), Math.round(Math.random() * 20)],
          ['2月', 100 + Math.round((Math.random() - 0.5) * 100), Math.round(Math.random() * 20)],
          ['3月', 100 + Math.round((Math.random() - 0.5) * 100), Math.round(Math.random() * 20)],
          ['4月', 100 + Math.round((Math.random() - 0.5) * 100), Math.round(Math.random() * 20)],
          ['5月', 100 + Math.round((Math.random() - 0.5) * 100), Math.round(Math.random() * 20)],
          ['6月', 100 + Math.round((Math.random() - 0.5) * 100), Math.round(Math.random() * 20)],
          ['7月', 100 + Math.round((Math.random() - 0.5) * 100), Math.round(Math.random() * 20)],
          ['8月', 100 + Math.round((Math.random() - 0.5) * 100), Math.round(Math.random() * 20)],
          ['9月', 100 + Math.round((Math.random() - 0.5) * 100), Math.round(Math.random() * 20)],
          ['10月', 100 + Math.round((Math.random() - 0.5) * 100), Math.round(Math.random() * 20)],
          ['11月', 100 + Math.round((Math.random() - 0.5) * 100), Math.round(Math.random() * 20)],
          ['12月', 100 + Math.round((Math.random() - 0.5) * 100), Math.round(Math.random() * 20)]
        ]
      },
      lineSetting: {
        valueAxis: [ 
          {
            type: 'value',
            name: '开户',
            min: 0,
            max: 200,
            axisLabel: {
              formatter: '{value}'
            }
          },
          {
            type: 'value',
            name: '比重',
            min: 0,
            max: 20,
            axisLabel: {
              formatter: '{value}%'
            }
          }
        ],
        bars: ['开户']
      },
      lineExtent: {
        tooltips: [
          {
            position: [10, 10],
            formatter: '{a}:{b}'
          },
          {
            position: ['100%', '0'],
            formatter: '{a}:/{b}'
          }
        ]
      }
    }
  },
  computed: {
    themeColors() {
      if (this.colorType === 'my') {
        return this.defaultTheme
      } else {
        return this.macaronTheme
      }
    }
  },
  methods: {
  },
  created() {},
  mounted() {}
}
</script>