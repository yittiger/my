# ResponsiveCol Mixin
## 描述：
让组件根据媒体查询或自身宽度实现列布局自适应

## 使用事例：
引入 responsiveCol.js （``import responsiveCol from '$ui/utils/responsive-col'``）, 并在组件中注册即可。
```javascript
import responsiveCol from '$ui/utils/responsive-col'
export default { 
  mixins: [responsiveCol]
}
```
responseColMixins 注册后，组件可接收两个“props”:
**``listenEl``**
**``columns``**
> ``listenEl``
> 是否开启监听组件自身宽度来进行自适应列布局（默认为否）， 为否时以媒体查询来控制

> ``columns``
> 组件的默认列，默认为3列，也可以传入断点的json如：
> ```javascript
> {
>   xxl: 8,
>   xl: 6,
>   lg: 4,
>   md: 3,
>   sm: 2,
>   xs: 1
> }
> ```
mixin注册后，组件可以根据“``currentColumn``”的值（data）来输出组件的列数

## MyUI事例
以下为本框架中使用responsiveColMixin 的组件

### MyCard事例

通过配置“``listen-el``”属性 开启组件根据媒体查询或组件宽度实现列自适应
:::demo(MyCard)

```html
<template>
  <div style="height: 400px">
    <my-slide-layout type="horizontal" :edage-width="40" :range="[5, 55]">
      <div slot="odd" style="width: 100%; height: 100%;background: lightgreen">
      <el-switch  v-model="isListenEl"></el-switch>
      <div v-show="isListenEl">
        监听自身宽度实现动态列变化（滑动左侧面板，卡片可以自适应）
      </div>
      <div v-show="!isListenEl">
        媒体查询实现动态列变化 （滑动左侧面板，卡片不会自适应，但改变浏览器宽可以）
      </div>
      </div>
      <div slot="even" style="width: 100%; height: 100%;">
        <my-card-list :data="data" :columns="columns" :listen-el="isListenEl">
          <el-card slot-scope="{item}">{{item}}</el-card>
        </my-card-list> 
      </div>
    </my-slide-layout>
  </div>
</template>
<style scoped lang="scss">

</style>
<script>
   
  export default {
     
    data() {
      return {
        isListenEl: false,
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
        columns: {
          xxl: 8,
          xl: 6,
          lg: 4,
          md: 3,
          sm: 2,
          xs: 1
        }
      }
    }
  }
</script>

```

:::

### MyWaterFall事例

通过配置“``listen-el``”属性 开启组件根据媒体查询或组件宽度实现列自适应
:::demo(MyWaterFall)

```html
<template>
  <div style="height: 400px">
    <my-slide-layout type="horizontal" :edage-width="40" :range="[5, 55]">
      <div slot="odd" style="width: 100%; height: 100%;background: lightgreen">
      <el-switch  v-model="isListenEl"></el-switch>
      <div v-show="isListenEl">
        监听自身宽度实现动态列变化（滑动左侧面板，卡片可以自适应）
      </div>
      <div v-show="!isListenEl">
        媒体查询实现动态列变化 （滑动左侧面板，卡片不会自适应，但改变浏览器宽可以）
      </div>
      </div>
      <div slot="even" style="width: 100%; height: 100%">
        <my-water-fall :is-horizontal="false"   :data="showImgs" :margin="5" :item-height="200" :columns="{
            xxl: 8,
            xl: 6,
            lg: 4,
            md: 3,
            sm: 2,
            xs: 1
          }"
          :listen-el="isListenEl"
          ref="waterFall"
        >
        <template v-slot="{scope}">
          <my-water-fall-slot 
          v-for="(item, index) in scope.data" :key="index" :width="item.$width" :height="item.$height" :left="item.$left" :top="item.$top">
              <div style="height: 100%"  > 
                <img :src="item.src" style="width: 100%" />
              </div>
            </my-water-fall-slot>
        </template> 
        </my-water-fall>
      </div>
    </my-slide-layout>
  </div>
</template> 
<script>
  import Mock from 'mockjs'
  const RandomNum = function (start = 0, end = 100) {
    return start + Math.floor(Math.random() * (end - start))
  } 
  export default {
     
    data() {
      return {
        isListenEl: false,
        showImgs: []
      }
    },
    computed: {
    },
    methods: {
      getImgs() {
        const arr = []
        for (let index = 0; index < 10; index++) {
          const w = RandomNum(100, 350)
          const h = RandomNum(100, 350) 
          arr.push({
            width: w,
            height: h,
            name: 'img' + index,
            src: Mock.Random.dataImage(`${w}x${h}`)
          })  
        }
        return arr
      }, 
      loadMore() {
        this.showImgs = this.showImgs.concat(this.getImgs())
        console.log(this.showImgs)
      }
    },
    created() {
      this.showImgs = this.getImgs()
    }
  }
</script>

```

:::

### KeyValList

通过配置“``listen-el``”属性 开启组件根据媒体查询或组件宽度实现列自适应
:::demo(MyKeyValList)

```html
<template>
  <div style="height: 400px">
    <my-slide-layout type="horizontal" :edage-width="40" :range="[5, 55]">
      <div slot="odd" style="width: 100%; height: 100%;background: lightgreen">
        <el-switch  v-model="isListenEl"></el-switch>
        <div v-show="isListenEl">
          监听自身宽度实现动态列变化（滑动左侧面板，卡片可以自适应）
        </div>
        <div v-show="!isListenEl">
          媒体查询实现动态列变化 （滑动左侧面板，卡片不会自适应，但改变浏览器宽可以）
        </div>
      </div>
      <div slot="even" style="width: 100%; height: 100%">
        <my-key-val-list :columns="{
            xxl: 5,
            xl: 4, 
            lg: 4,
            md: 3,
            sm: 2,
            xs: 1
          }" 
          :column="column" 
          :data="data" 
          :listen-el="isListenEl"
        > 
          <template v-slot:titleA>
            <div style="text-align: center">
            **********************************分割线**********************************
            </div>
          </template>
          <template v-slot:name="scope">
            <my-description :title="scope.label" :width="100" align="right">
            <a>{{scope.value}}</a> 
            </my-description>  
          </template>  
        </my-key-val-list>
      </div>
    </my-slide-layout>  
  </div>
</template>
<style scoped lang="scss">

</style>
<script>
   
  export default {
     
    data() {
      return {
        isListenEl: false,
        column: [
          { label: '姓名', prop: 'name'},
          { label: '身份证', prop: 'id', devide: 'titleA' },
          { label: '地址', prop: 'address', span: 24}, 
          { label: '电话', prop: 'phone'},
          { label: '年龄', prop: 'age'},
          { label: '日期', prop: 'date'},
          { label: '性别', prop: 'gender'}
        ],
        data: {
          name: '王菲',
          id: '23456',
          age: '21',
          address: '广东省广州市荔湾区黄沙大道西郊游泳场三号楼12345号',
          date: '19871009',
          phone: '1234',
          gender: '男'
        }
      }
    }
  }
</script>

```

:::

### MyFilter事例

通过配置“``listen-el``”属性 开启组件根据媒体查询或组件宽度实现列自适应
:::demo(MyFilter)

```html
<template>
  <div style="height: 400px">
    <my-slide-layout type="horizontal" :edage-width="40" :range="[5, 55]">
      <div slot="odd" style="width: 100%; height: 100%;background: lightgreen">
      <el-switch  v-model="isListenEl"></el-switch>
      <div v-show="isListenEl">
        监听自身宽度实现动态列变化（滑动左侧面板，卡片可以自适应）
      </div>
      <div v-show="!isListenEl">
        媒体查询实现动态列变化 （滑动左侧面板，卡片不会自适应，但改变浏览器宽可以）
      </div>
      </div>
      <div slot="even" style="width: 100%; height: 100%;">
        <my-filter label-width="80px" collapsible  :is-flex="true" :listen-el="isListenEl" > 
          <my-input label="标题" name="title" disabled></my-input>
          <my-input name="keyword" label="关键字" placeholder="请输入关键字"></my-input>
          <my-input name="keyword2" label="关键字2" placeholder="请输入关键字"></my-input>
          <my-input name="keyword3" label="关键字3" placeholder="请输入关键字" collapsible></my-input>
          <my-select name="category" label="类别" :options="categories" collapsible></my-select>
          
          <my-range label="范围" mode="date" name="range" collapsible></my-range>
        </my-filter>
      </div>
    </my-slide-layout>
  </div>
</template>
<style scoped lang="scss">

</style>
<script>
   
  export default {
     
    data() {
      return {
        isListenEl: false,
        categories: [
          {label: '选项一', value: 1},
          {label: '选项二', value: 2},
          {label: '选项三', value: 3}
        ] 
      }
    }
  }
</script>

```

:::