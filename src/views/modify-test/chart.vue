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
        <my-chart-pie :data="pieData" :settings="pieSettings"  :extend="{
          'color': themeColors
        }"></my-chart-pie>   
      </my-dv-page>
    </div>

    <div class="warp" style="width: 100%"> 
      <my-dv-page target="parent" fit>
        <my-dv-line fit :columns="lineData.columns" :rows="lineData.rows" :settings="lineSetting" :extend="lineExtend"  theme="dark"></my-dv-line>
      </my-dv-page>
    </div>

    <div class="warp" >
       <my-chart-line :data="themeData" theme="dark"></my-chart-line>
    </div>

    <div class="warp" >
      <my-chart-map debug
                :data="mapChart.data"
                :register="mapChart.register"
                map="china"
                :extend="mapChart.extend"
                :settings="mapChart.settings" ></my-chart-map>  
    </div>
  </div>
</template>:
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
import china from '$ui/charts/geo/china.json'
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
      pieExtend: {
        color: []
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
      lineExtend: {
        'series[1].tooltip':  
          { 
            formatter: function(params, ticket, cb) {
              // console.log(params)
              return `比重<br/><span style="display: inline-block;width:10px; height:10px;background:${params.color};border-radius: 50%;margin-right: 5px"></span>${params.value[0]}: ${params.value[2]}%`
            }
          }
        
      },

      themeData: {
        columns: ['月份', '访问量'],
        rows: [
          ['一月', 100],
          ['二月', 60],
          ['三月', 78],
          ['四月', 90],
          ['五月', 110],
          ['六月', 87],
          ['七月', 90],
          ['八月', 75],
          ['九月', 63],
          ['十月', 80],
          ['十一月', 90],
          ['十二月', 105]
        ]
      },

      mapChart: {
        register: china,
        data: {
          columns: ['省份', '面积'],
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
          ]
        },
        extend: {
          visualMap: null,
          // geo: {
          //   id: 'chinaGeo',
          //   show: true,
          //   name: 'china',
          //   roam: true,
          //   center: [115.97, 29.71]
          // },
          'series.0.roam': true,
          'series.0.center': [115.97, 29.71]
        },
        settings: {
          geo: true,
          dataHelper: row => {
            return {
              itemStyle: {
                borderColor: 'blue',
                borderWidth: 2,
                areaColor: row[1] > 90 ? 'red' : 'green'
              },
              label: {
                show: true,
                color: '#fff'
              }
            }
          } 
        } 
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