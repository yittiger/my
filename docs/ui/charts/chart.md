# 图表基础组件

`my-chart` 是封装ECharts的Vue组件，所有图表都是基于`my-chart`进行扩展。

## 使用注意
**``my-chart组件并未引入echart的series组件，因此直接使用“my-chart”组件时，需要先引入echart的控件：``**
```html
<template>
   <my-chart :options="options" width="500px" height="300px"></my-chart>
</template>
<script>
import 'echarts/lib/chart/bar' // 引入bar控件，使my-chart 能够使用“bar”样式
export default {
  // ......
}
</script>
``` 

## 通用参数

### 尺寸相关

与尺寸相关的有以下3个参数：

#### width

设置图表宽度，默认100%， 支持像素和百分比单位

#### height

设置图表高度，默认400px， 支持像素和百分比单位

:::demo(chart-1)
```html
<template>
   <my-chart :options="options" width="500px" height="300px"></my-chart>
</template>

<script>
import 'echarts/lib/chart/bar'
export default {
  data() {
    return {
      options: {
           title: {
               text: 'ECharts 入门示例'
           },
           tooltip: {},
           legend: {
               data:['销量']
           },
           xAxis: {
               data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
           },
           yAxis: {},
           series: [{
               name: '销量',
               type: 'bar',
               data: [5, 20, 36, 10, 10, 20]
           }]
      }

    }
  }
}

</script>

```
:::

#### fit

自动适应父容器尺寸

:::demo(chart-2)
```html
<template>
   <div class="container">
       <div class="wrapper">
         <my-chart :options="options" fit></my-chart>
       </div>
   </div>
</template>

<script>
import 'echarts/lib/chart/bar'
export default {
  data() {
    return {
      options: {
           title: {
               text: 'ECharts 入门示例'
           },
           tooltip: {},
           legend: {
               data:['销量']
           },
           xAxis: {
               data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
           },
           yAxis: {},
           series: [{
               name: '销量',
               type: 'bar',
               data: [5, 20, 36, 10, 10, 20]
           }]
      }
    }
  }
}

</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  min-height: 400px;
  position: relative;
}
.wrapper {
    position: absolute;
    width: 100%;
    height:100%;
}
</style>

```
:::



### 主题风格

通过设置 `theme` 指定主题风格，内置了两套风格: 默认`light`，`dark`

`theme` 支持设置对象形式

:::demo(chart-3)
```html
<template>
   <my-chart :options="options" theme="dark"></my-chart>
</template>

<script>
import 'echarts/lib/chart/bar'
export default {
  data() {
    return {
      options: {
           title: {
               text: 'ECharts 入门示例'
           },
           tooltip: {},
           legend: {
               data:['销量']
           },
           xAxis: {
               data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
           },
           yAxis: {},
           series: [{
               name: '销量',
               type: 'bar',
               data: [5, 20, 36, 10, 10, 20]
           }]
      }
    }
  }
}
</script>

```
:::

### 主题颜色

my-chart的主题颜色如下, 如果需要更改chart 的主题样式，可以通过 “extend.color: ['red', 'green']” 来实现

:::demo(chart-7)
```html
<template>
  <div class="color-palette">
    <div class="color-item" v-for="(item, index) in themeColors" :key="`col_${index}`">
      <div class="color" :style="{'background': item}"></div>
      <div class="name">{{item}}</div>
    </div>
  </div>
</template>

<script> 
export default {
  data() {
    return {
      themeColors: [
        '#37A2DA', '#32C5E9', '#67E0E3', '#9FE6B8', '#FFDB5C', '#ff9f7f', '#fb7293', '#E062AE', '#E690D1', '#e7bcf3', '#9d96f5', '#8378EA', '#96BFFF'
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.color-palette {
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
</style>
```
:::

### 显示加载动画

可设置`loading`显示加载中提示


:::demo(chart-4)
```html
<template>
   <my-chart :options="options" :loading="loading"></my-chart>
</template>

<script>
import 'echarts/lib/chart/bar'
export default {
  data() {
    return {
      loading: true,
      options: {
           title: {
               text: 'ECharts 入门示例'
           },
           tooltip: {},
           legend: {
               data:['销量']
           },
           xAxis: {
               data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
           },
           yAxis: {},
           series: [{
               name: '销量',
               type: 'bar',
               data: [5, 20, 36, 10, 10, 20]
           }]
      }
    }
  },
  created() {
    setTimeout(()=>{
      this.loading = false
    }, 1000 * 10)
  }
}

</script>

```
:::

### 扩展ECharts选项

通过 `extend` 设置 ECharts 的 option

:::demo(chart-5)
```html
<template>
   <my-chart :options="options" :extend="extend"></my-chart>
</template>

<script>
import 'echarts/lib/chart/bar'
export default {
  data() {
    return {
      options: {
           title: {
               text: 'ECharts 入门示例'
           },
           tooltip: {},
           legend: {
               data:['销量']
           },
           xAxis: {
               data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
           },
           yAxis: {},
           series: [{
               name: '销量',
               type: 'bar',
               data: [5, 20, 36, 10, 10, 20]
           }]
      },
      extend: {
        color: ['green'],
        'yAxis.name': '销量',
        series: {
          label: {
             show: true,
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

### 开发辅助

通过设置`debug打印 `ECharts` 的 `option` 校验参数传递是否正确


:::demo(chart-6)
```html
<template>
   <my-chart :options="options" debug></my-chart>
</template>

<script>
import 'echarts/lib/chart/bar'
export default {
  data() {
    return {
      options: {
           title: {
               text: 'ECharts 入门示例'
           },
           tooltip: {},
           legend: {
               data:['销量']
           },
           xAxis: {
               data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
           },
           yAxis: {},
           series: [{
               name: '销量',
               type: 'bar',
               data: [5, 20, 36, 10, 10, 20]
           }]
      }

    }
  }
}

</script>

```
:::




## 指标和维度


数据由指标和维度组成。以一组常见的数据为例：

| 日期 | 访问用户 | 下单用户 |
|----|----|----|
| 2018-05-22 | 32371 | 29810 |
| 2018-05-23 | 12328 | 11398 |
| 2018-05-24 | 92381 | 82910 |

“维度” 指的是数据的属性，例如表格中的 “日期” 维度，表示生成的每组数据的日期。

“指标” 是量化衡量标准，例如表格中的 “访问用户” 和 “下单用户”。

图表的组件用 `data` 属性数据格式如下所示：

```js
{
  columns: ['日期', '访问用户', '下单用户'],
  rows: [
    ['2018-05-22', 32371, 29810],
    ['2018-05-23', 12328, 11398],
    ['2018-05-24', 92381, 82910]
  ]
}

```

`columns` 中是维度和指标的集合，大部分图表都是单维度多指标，所以默认第一个值为 维度，剩余的值为指标。


`rows` 中是数据的集合。

以上面的这组数据为例绘制一个折线图

:::demo
```html
<template>
  <my-chart-line :data="data"></my-chart-line>
</template>   
<script>
export default {
  data() {
    return {
      data: {
          columns: ['日期', '访问用户', '下单用户'],
          rows: [
            ['2018-05-22', 32371, 29810],
            ['2018-05-23', 12328, 11398],
            ['2018-05-24', 92381, 82910]
          ]
      }
    }
  }
}
</script> 
```
:::


### columns 

`columns`的各项可以是字符串或对象描述，如一下两者是等价的：

```js
{
  columns: ['日期', '访问用户', '下单用户'], // 字符串形式
  columns: [ // 对象形式
    {
      name: 'date',
      displayName: '日期'
    },
    {
      name: 'vistor',
      displayName: '访问用户'
    },
    {
      name: 'order',
      displayName: '访问用户'
    }
  ] 
}
```

`columns` 还支持对该列数数据进行预处理的属性设置，如：

- type ：表示数据类型，通常不需要设置，echarts 会自动识别，可选值：number | ordinal | float | float | time
- unit ：表示转换数据单位，需要对数据进行转换时设置，可选值：k（千） | w（万） | p（百分比）
- precision ： 转换数据精度，保留几位小数，默认：0
- sort ：Boolean值， 表示排序，从大到小

```js
{
  columns: [
    '日期',
    {
      name: 'vistor',
      displayName: '访问用户',
      type: 'number',
      unit: 'k',
      precision: 2,
      sort: true
    }
  ]
} 
```

### rows 

`rows` 中是数据的集合。 可以是一个二维数组 或 对象数组形式，以下两者也是等价的。

```js
{
  columns: ['日期', '访问用户', '下单用户'],
  rows: [
    ['2018-05-22', 32371, 29810],
    {'日期': '2018-05-22', '访问用户': 32371, '下单用户': 29810}
  ]
}
```

也可设置字段属性的别名。

```js
{
  columns: [ 
    {
      name: 'date',
      displayName: '日期'
    },
    {
      name: 'vistor',
      displayName: '访问用户'
    },
    {
      name: 'order',
      displayName: '访问用户'
    }
  ] 
  rows: [
    {date: '2018-05-22', vistor: 32371, order: 29810}
  ]
}
```

## 图表组件私有参数

不用的图表组件都有自己的私有参数，实现了高频的需求。参数名 `settings`，是对象类型。

## 扩展参数

当私有参数不能满足需求时，可以通过扩展参数 `extend` 设置需要的功能。 兼容ECharts option对象。

为了能够更方便的设置属性配置项等，可以通过extend属性实现对已配置好的内部属性进行单独的设置， extend为对象类型，对象内的属性可以是函数，也可以对象，也可以是其他类型的值

- 当属性为函数时，设置的是函数的返回值
- 当属性为对象时，如果在options中对应的属性为对象(eg: tooltip)或包含对象的数组(eg: series)， 对应的配置会被合并，否则将直接覆盖对应的配置

:::demo(chart-7)
```html
<template> 
  <div style="height: 450px">
  <my-chart-line fit :data="lineData" :settings="lineSetting" :extend="lineExtend"></my-chart-line>
  </div>
</template>   
<script>
export default {
  data() {
    return {
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
        // 单独设置比重（柱状）的tooltip 样式
        'series[1].tooltip':  
          { 
            backgroundColor: 'red',
            formatter: function(params, ticket, cb) { 
              return `比重<br/><span style="display: inline-block;width:10px; height:10px;background:${params.color};border-radius: 50%;margin-right: 5px"></span>${params.value[0]}: ${params.value[2]}%`
            }
          }
        
      }
    }
  }
}
</script> 
```
:::