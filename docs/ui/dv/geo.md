# Geo 地图


图表组件是基于ECharts进行封装，统一风格和简化使用。 相关概念，需参考[图表组件库](../charts/README.md)。

文档 <api-link href="dv/my-dv-geo">MyDvGeo</api-link>

:::tip 提示
继承 <api-link href="dv/my-dv-box">MyDvBox</api-link>
:::

## 基本setting参数

| 参数名 | 类型 | 默认值 | 描述 |
|----|----|----|----|
| type | Object, String | 'map' | 地图数据展示类型，可选类型有：'map' 'scatter' 'effectScatter' 'lines', 或者这些类型的对象（参考echart对应的series 类型） |
| geo | Boolean | true | 是否开启Geo |
| dataHelper | Object, Function |  | 构造序列数据项辅助函数 |
| typeHelper | Object, Function |  | 序列构造辅助函数 |  

## 基础用法
:::demo
```html
<template>
   <div style="height:600px">
     <my-dv-page target="parent" fit>
        <my-dv-geo fit :json="json" :columns="columns" :rows="rows"  :visual="{show:true}"></my-dv-geo>
     </my-dv-page>
   </div>
</template>
<script>
import china from '$ui/charts/geo/china.json'
export default {
  data() {
    return {
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
        ]
    }
  }
}
</script>
```
:::

## 散点

:::demo
```html
<template>
  <div style="height:600px">
    <my-dv-page target="parent" fit>
      <my-dv-geo fit :json="json"
                 :columns="columns"
                 :rows="rows"
                 :type="type"
                 :typeHelper="typeHelper"></my-dv-geo>
    </my-dv-page>
  </div>
</template>
<script>
  import china from '$ui/charts/geo/china.json'

  export default {
    data() {
      return {
        json: china,
        type: {'人口数量': 'scatter'},
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
        ]
      }
    },
    methods: {
      typeHelper({type}) {
        if (type === 'scatter') {
          return {
            label: {
              show: true,
              formatter: '{b}:{@[2]}',
              position: 'top'
            }
          }
        }
      }
    }
  }
</script>

```
:::

## 动效散点

:::demo
```html
<template>
  <div style="height:600px">
    <my-dv-page target="parent" fit>
      <my-dv-geo fit :json="json"
                 :columns="columns"
                 :rows="rows"
                 :type="type"></my-dv-geo>
    </my-dv-page>
  </div>
</template>
<script>
  import china from '$ui/charts/geo/china.json'

  export default {
    data() {
      return {
        json: china,
        type: {'人口数量': 'effectScatter'},
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
        ]
      }
    }
  }
</script>

```
:::


## 连线
:::demo
```html
<template>
  <div style="height:600px">
    <my-dv-page target="parent" fit>
      <my-dv-geo fit
                 :json="json"
                 :loader="loader"
                 :type="type"></my-dv-geo>
    </my-dv-page>
  </div>
</template>
<script>
  import china from '$ui/charts/geo/china.json'

  export default {
    data() {
      return {
        json: china,
        type: {'航线1': 'lines', '航线2': 'lines'}
      }
    },
    methods: {
      loader() {
        const line1 = {
          columns: ['航线', '航线1'],
          rows: [
            ['广东->北京', ['广东', '北京']],
            ['湖南->北京', ['湖南', '北京']],
            ['贵州->北京', ['贵州', '北京']],
            ['新疆->北京', ['新疆', '北京']],
            ['西藏->北京', ['西藏', '北京']]
          ]
        }
        const line2 = {
          columns: ['航线', '航线2'],
          rows: [
            ['广东->广西', ['广东', '广西']],
            ['湖南->新疆', ['湖南', '新疆']],
            ['上海->贵州', ['上海', '贵州']],
            ['福建->甘肃', ['福建', '甘肃']],
            ['西藏->广东', ['西藏', '广东']]
          ]
        }
        return Promise.resolve([line1, line2])
      }
    }
  }
</script>

```
:::

## 迁徙图
:::demo
```html
<template>
  <div style="height:600px">
    <my-dv-page target="parent" fit>
      <my-dv-geo fit
                 ref="geo"
                 :extend="extend"
                 :visual="null"
                 :json="json"
                 :coords="coords"
                 :loader="loader"
                 :type="type"
                 :typeHelper="typeHelper"
                 :dataHelper="dataHelper"></my-dv-geo>
    </my-dv-page>
  </div>
</template>
<script>
  import {LinearGradient} from 'echarts/lib/util/graphic'
  import china from '$ui/charts/geo/china.json'
  import coordinates from '$ui/dv/utils/coordinates'

  const linesArray = [['黑龙江', '珠海'], ['黑龙江', '舒兰'], ['黑龙江', '大连'], ['辽宁', '集安'], ['吉林', '抚顺'], ['山东', '南京'], ['北京', '沈阳'], ['黑龙江', '环翠'], ['天津', '大连'], ['吉林', '兴和'], ['河北', '勃利'], ['吉林', '大连'], ['吉林', '沈阳'], ['黑龙江', '闵行'], ['天津', '朝阳'], ['吉林', '黄岛'], ['内蒙古', '上海'], ['内蒙古', '南京'], ['辽宁', '杭州'], ['黑龙江', '海城'], ['吉林', '西城'], ['四川', '上海'], ['黑龙江', '西城'], ['吉林', '丹东'], ['吉林', '宁波'], ['辽宁', '海淀'], ['辽宁', '青岛'], ['吉林', '苏州'], ['黑龙江', '抚顺'], ['吉林', '临安'], ['辽宁', '烟台'], ['黑龙江', '海淀'], ['黑龙江', '南昌'], ['内蒙古', '沈阳'], ['山西', '城阳'], ['吉林', '广州'], ['上海', '沈阳'], ['四川', '阳泉'], ['河北', '桦川'], ['内蒙古', '海淀'], ['安徽', '河北'], ['辽宁', '呼和浩特'], ['广西', '茂名'], ['吉林', '东城'], ['内蒙古', '盘锦'], ['山东', '哈尔滨'], ['黑龙江', '沈阳'], ['黑龙江', '丰台'], ['四川', '盘锦'], ['黑龙江', '皇姑'], ['河北', '虎林'], ['辽宁', '宝山'], ['黑龙江', '吉林'], ['黑龙江', '青岛'], ['吉林', '烟台'], ['山东', '临江'], ['黑龙江', '黄岛'], ['吉林', '石家庄'], ['吉林', '汤原'], ['黑龙江', '临江'], ['吉林', '济南'], ['吉林', '太原'], ['吉林', '威海'], ['湖北', '深圳'], ['内蒙古', '荣成'], ['辽宁', '郑州'], ['黑龙江', '朝阳'], ['吉林', '昆山'], ['吉林', '双城'], ['黑龙江', '克拉玛依'], ['辽宁', '上海'], ['吉林', '海阳'], ['吉林', '宣武门外东大街'], ['山东', '海淀'], ['内蒙古', '威海'], ['黑龙江', '晋中'], ['西藏', '广州'], ['辽宁', '无锡'], ['黑龙江', '城阳'], ['河北', '丰台'], ['黑龙江', '扬州'], ['辽宁', '天津'], ['吉林', '扬州'], ['吉林', '嘉兴'], ['河北', '延寿'], ['吉林', '义乌'], ['吉林', '张家港'], ['辽宁', '贵阳'], ['吉林', '辽宁'], ['河南', '营口'], ['吉林', '合肥'], ['黑龙江', '苏州'], ['黑龙江', '榆树'], ['吉林', '常熟'], ['吉林', '乳山'], ['四川', '青岛'], ['黑龙江', '深圳'], ['天津', '东城'], ['黑龙江', '上海'], ['天津', '宁波'], ['吉林', '海门'], ['山西', '沈阳'], ['吉林', '成都'], ['吉林', '南昌'], ['黑龙江', '常州'], ['内蒙古', '兰山'], ['吉林', '河南'], ['黑龙江', '福田'], ['吉林', '常州'], ['吉林', '双流'], ['吉林', '潍坊'], ['吉林', '延安'], ['辽宁', '长春'], ['黑龙江', '南京'], ['辽宁', '和平'], ['北京', '哈尔滨'], ['吉林', '武汉'], ['吉林', '海陵'], ['吉林', '日照'], ['吉林', '台州'], ['辽宁', '厦门'], ['黑龙江', '贵阳'], ['吉林', '鞍山'], ['辽宁', '荣成'], ['黑龙江', '天津'], ['黑龙江', '河西'], ['黑龙江', '秦皇岛'], ['吉林', '荆州'], ['黑龙江', '东城'], ['吉林', '即墨'], ['辽宁', '西城'], ['黑龙江', '大兴'], ['河北', '哈尔滨'], ['黑龙江', '江苏'], ['吉林', '和平'], ['江苏', '鸡东'], ['辽宁', '辉南'], ['吉林', '深圳'], ['福建', '泰顺'], ['上海', '深圳'], ['吉林', '秦皇岛'], ['吉林', '徐汇'], ['吉林', '石景山'], ['辽宁', '城阳'], ['黑龙江', '威海'], ['黑龙江', '惠州'], ['吉林', '龙口'], ['黑龙江', '四平'], ['吉林', '南充'], ['河北', '东港'], ['辽宁', '西安'], ['内蒙古', '滨海'], ['河南', '青岛'], ['黑龙江', '昆山'], ['辽宁', '长沙'], ['吉林', '哈尔滨'], ['河北', '尚志'], ['辽宁', '东城'], ['辽宁', '珠海'], ['黑龙江', '铁岭'], ['黑龙江', '蓬莱'], ['北京', '天津'], ['内蒙古', '天津'], ['黑龙江', '宁波'], ['吉林', '上海'], ['辽宁', '佛山'], ['吉林', '长宁'], ['黑龙江', '珲春'], ['山东', '黄浦'], ['辽宁', '威海'], ['天津', '长春'], ['新疆', '上海'], ['河北', '鸡西'], ['陕西', '呼和浩特'], ['吉林', '连云港'], ['黑龙江', '杭州'], ['黑龙江', '嘉兴'], ['陕西', '盘锦'], ['河北', '同江'], ['吉林', '杭州'], ['黑龙江', '舟山'], ['河南', '大连'], ['辽宁', '绵阳'], ['吉林', '溆浦'], ['吉林', '朝阳'], ['吉林', '无锡'], ['浙江', '沈阳'], ['吉林', '湖里'], ['黑龙江', '无锡'], ['黑龙江', '长宁'], ['辽宁', '胶州'], ['吉林', '青岛'], ['河北', '海淀'], ['黑龙江', '厦门'], ['黑龙江', '中山'], ['河北', '太原'], ['新疆', '吉林'], ['吉林', '武侯'], ['北京', '廊坊'], ['浙江', '临汾'], ['湖北', '天津'], ['黑龙江', '泉州'], ['黑龙江', '温州'], ['黑龙江', '唐山'], ['北京', '铁岭'], ['辽宁', '即墨'], ['北京', '上海'], ['黑龙江', '广州'], ['吉林', '廊坊'], ['黑龙江', '荣成'], ['吉林', '海城'], ['湖南', '沈阳'], ['北京', '青岛'], ['河北', '大连'], ['内蒙古', '珠海'], ['黑龙江', '房山'], ['黑龙江', '金坛'], ['河北', '齐齐哈尔'], ['吉林', '大兴'], ['吉林', '密云'], ['黑龙江', '和平'], ['内蒙古', '龙井'], ['吉林', '道里'], ['山东', '武汉'], ['甘肃', '常熟'], ['黑龙江', '烟台'], ['吉林', '海淀'], ['黑龙江', '长沙'], ['天津', '石家庄'], ['吉林', '佛山'], ['辽宁', '黄骅'], ['内蒙古', '中山'], ['黑龙江', '北京'], ['黑龙江', '三河'], ['河北', '庆安'], ['吉林', '长沙'], ['黑龙江', '西安'], ['内蒙古', '朝阳'], ['辽宁', '丰台'], ['黑龙江', '延吉'], ['黑龙江', '长春'], ['吉林', '天津'], ['吉林', '昌平'], ['吉林', '赣州'], ['吉林', '厦门'], ['内蒙古', '秦皇岛'], ['内蒙古', '菏泽'], ['吉林', '闵行'], ['辽宁', '石景山'], ['吉林', '珠海'], ['内蒙古', '青岛'], ['北京', '海门'], ['内蒙古', '长春'], ['吉林', '城阳'], ['吉林', '大同'], ['湖北', '邢台'], ['吉林', '胶州'], ['吉林', '重庆'], ['河北', '佳木斯'], ['甘肃', '大连'], ['吉林', '南京'], ['内蒙古', '日照'], ['吉林', '鸡东'], ['黑龙江', '即墨'], ['江苏', '朝阳'], ['吉林', '南通'], ['黑龙江', '张家港'], ['吉林', '三河'], ['吉林', '咸阳'], ['吉林', '中山'], ['黑龙江', '胶州']]
  export default {
    data() {
      return {
        json: china,
        coords: coordinates,
        extend: {
          tooltip: null
        },
        type: {size: 'effectScatter', line: 'lines'}
      }
    },
    methods: {
      loader() {
        const cities = coordinates.map(n => {
          return [n.label, n.value]
        })
        const lines = linesArray.map((n, i) => {
          return [i, n]
        })
        return Promise.resolve([
          {
            columns: ['城市', 'size'],
            rows: cities
          },
          {
            columns: ['序号', 'line'],
            rows: lines
          }
        ])
      },
      typeHelper({type}) {
        if (type === 'effectScatter') {
          return {
            symbolSize: 2,
            showEffectOn: 'render',
            label: {
              show: false,
              position: 'right',
              formatter: '{b}'
            },
            emphasis: {
              label: {
                show: true
              }
            }
          }
        }
        if (type === 'lines') {
          return {
            large: true,
            effect: {
              show: true,
              constantSpeed: 30,
              symbol: 'pin',
              symbolSize: 3,
              trailLength: 0
            },
            lineStyle: {
              color: new LinearGradient(0, 0, 0, 1, [{
                offset: 0, color: '#58B3CC'
              }, {
                offset: 1, color: '#F58158'
              }], false),
              width: 1,
              opacity: 0.2,
              curveness: 0.1
            }
          }
        }
      },
      dataHelper(row, i, {type}) {
        if (type === 'effectScatter') {
          return {
            itemStyle: {
              color: Math.random() > 0.9 ? '#58B3CC' : '#F58158'
            },
            symbolSize: Math.random() > 0.9 ? Math.random() * 15 : 2
          }
        }
      }
    }
  }
</script>

```
:::

## 下钻

:::demo
```html
<template>
<div style="height:600px">
  <my-dv-page target="parent" fit>
    <my-dv-geo fit
               ref="geo"
               :json="json"
               :name="mapName"
               :type="type"
               :visual="null"
               @click="handleClick"
               :on-register="handleMapRegister"
               :loader="loader"
               debug></my-dv-geo>
    <my-dv-box left="10%"
               top="10%">
      <my-breadcrumb :data="breadcrumb"
                     theme="arrow"
                     :active="activeIndex"
                     @click="handleMenuClick"></my-breadcrumb>
    </my-dv-box>
  </my-dv-page>
</div>
</template>
<script>
  import geoArray from '$ui/charts/geo/index.json'


  export default {
    data() {
      return {
        breadcrumb: [
          {label: '全国', geo: 'china.json'}
        ],
        mapName: 'china.json',
        type: {
          人口数量: 'effectScatter'
        }
      }
    },
    computed: {
      activeIndex() {
        return this.breadcrumb.length - 1
      }
    },
    methods: {
      json({map}) {
        this.$refs.geo.loading = true
        const [path, file] = map.split('/')
        if (!file) return import('$ui/charts/geo/china.json')
        return path === 'province'
          ? import('$ui/charts/geo/province/' + file)
          : import('$ui/charts/geo/city/' + file)
      },
      handleClick(params) {
        const name = params.name.replace('市', '')
        const geoItem = geoArray.find(item => item.name === name)
        if (geoItem) {
          this.mapName = geoItem.geo
          this.breadcrumb.push({
            label: params.name,
            ...geoItem
          })
        }
      },
      handleMapRegister() {
        this.$refs.geo.loading = false
      },
      handleMenuClick(item, index) {
        this.breadcrumb.splice(index + 1)
        this.mapName = item.geo
      },
      loader({name}) {
        // 可以根据name重新请求加载数据
        return Promise.resolve({
          columns: ['省份', '人口数量'],
          rows: [
            ['广东', 225344],
            ['广州市', 1323]
          ]
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  .my-dv-page {
    background: #fff;
    background: url("~$ui/assets/bg/02.png") no-repeat center center;
  }
</style>

```
:::

