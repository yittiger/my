# LocationPicker 经纬度提取器

文档 <api-link href="components/my-location-picker">MyLocationPicker</api-link>

## 基本用法

:::demo
```html
<template>
  <my-location-picker v-model="coords"></my-location-picker>
</template>
<script>
export default {
  data() {
    return {
       coords: null
    }
  }
}
</script>
```
:::


## 多选

:::demo
```html
<template>
  <my-location-picker v-model="coords" multiple></my-location-picker>
</template>
<script>
export default {
  data() {
    return {
       coords: null
    }
  }
}
</script>
```
:::


## 表单项
:::demo
```html
<template>
  <my-form :model="model" :rules="rules" @reset="handleReset" @submit="handleSubmit">
    <my-form-custom label="经纬度" name="coordinate">
      <my-location-picker v-model="model.coordinate"></my-location-picker>
    </my-form-custom>
  </my-form>

</template>
<script>
  export default {
    data() {
      return {
        model: {
          coordinate: [113, 23]
        },
        rules: {
          coordinate: {required: true, message: '必填项'}
        }
      }
    },
    methods: {
      handleReset() {
        this.model = {}
      },
      handleSubmit(model) {
        alert(JSON.stringify(model))
      }
    }
  }
</script>

```
:::

## 配置地图
:::demo
```html
<template>
  <my-location-picker v-model="coords" :map="map"></my-location-picker>
</template>
<script>
  export default {
    data() {
      return {
        coords: null,
        map: {
          adapter: 'TDT',
          center: [116.37896038915882, 39.973938807421604],
          zoom: 8
        }
      }
    }
  }
</script>

```
:::

## 配置弹窗
:::demo
```html
<template>
  <my-location-picker v-model="coords" :dialog="dialog"></my-location-picker>
</template>
<script>
  export default {
    data() {
      return {
        coords: null,
        dialog: {
          title: '选择经纬度',
          theme: 'dark'
        }
      }
    }
  }
</script>
```
:::

## 配置输入框
:::demo
```html
<template>
  <my-location-picker v-model="coords" :input="input"></my-location-picker>
</template>
<script>
  export default {
    data() {
      return {
        coords: null,
        input: {
          size: 'small'
        }
      }
    }
  }
</script>

```
:::


## 自定义内容

:::demo
```html
<template>
  <my-location-picker v-model="coords">
    <el-button slot="trigger" type="primary" circle icon="el-icon-location"></el-button>
    <template>
      <my-map-panel title="标题文本"
                    placement="left-top"
                    width="300px"
                    height="400px">
        面板占位内容
      </my-map-panel>
    </template>
  </my-location-picker>
</template>
<script>
  export default {
    data() {
      return {
        coords: [113, 23]
      }
    }
  }
</script>

```
:::

