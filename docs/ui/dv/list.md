# List 列表

数据列表 <api-link href="dv/my-dv-list">MyDvList</api-link>

:::tip 提示
继承 <api-link href="dv/my-dv-box">MyDvBox</api-link>
:::

## 基础用法
:::demo
```html
<template>
  <div style="height:500px" class="table-origin">
    <my-dv-page target="parent" fit>
      <my-dv-list fit
                  :columns="columns"
                  :rows="rows"></my-dv-list>
    </my-dv-page>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        columns: ['列一', '列二', '列三'],
        rows: [
          ['行1列1', '行1列2', '行1列3'],
          ['行2列1', '行2列2', '行2列3'],
          ['行3列1', '行3列2', '行3列3'],
          ['行4列1', '行4列2', '行4列3'],
          ['行5列1', '行5列2', '行5列3'],
          ['行6列1', '行6列2', '行6列3'],
          ['行7列1', '行7列2', '行7列3'],
          ['行8列1', '行8列2', '行8列3'],
          ['行9列1', '行9列2', '行9列3'],
          ['行10列1', '行10列2', '行10列3']
        ]
      }
    }
  }
</script>
```
:::

## 圆角
:::demo
```html
<template>
  <div style="height:500px" class="table-origin">
    <my-dv-page target="parent" fit>
      <my-dv-list width="80%"
                  x-align="center"
                  y-align="middle"
                  radius
                  :columns="columns"
                  :rows="rows"></my-dv-list>
    </my-dv-page>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        columns: ['列一', '列二', '列三'],
        rows: [
          ['行1列1', '行1列2', '行1列3'],
          ['行2列1', '行2列2', '行2列3'],
          ['行3列1', '行3列2', '行3列3'],
          ['行4列1', '行4列2', '行4列3'],
          ['行5列1', '行5列2', '行5列3'],
          ['行6列1', '行6列2', '行6列3'],
          ['行7列1', '行7列2', '行7列3'],
          ['行8列1', '行8列2', '行8列3'],
          ['行9列1', '行9列2', '行9列3'],
          ['行10列1', '行10列2', '行10列3']
        ]
      }
    }
  }
</script>
```
:::

## 定义列宽度

:::demo
```html
<template>
  <div style="height:500px" class="table-origin">
    <my-dv-page target="parent" fit>
      <my-dv-list width="80%"
                  x-align="center"
                  y-align="middle"
                  radius
                  :columns="columns"
                  :rows="rows"></my-dv-list>
    </my-dv-page>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        columns: [
          {label:'列一', width: 100 },
          {label:'列二', width: 200 },
          {label:'列三', width: 100 }
        ],
        rows: [
          ['行1列1', '行1列2', '行1列3'],
          ['行2列1', '行2列2', '行2列3'],
          ['行3列1', '行3列2', '行3列3'],
          ['行4列1', '行4列2', '行4列3'],
          ['行5列1', '行5列2', '行5列3'],
          ['行6列1', '行6列2', '行6列3'],
          ['行7列1', '行7列2', '行7列3'],
          ['行8列1', '行8列2', '行8列3'],
          ['行9列1', '行9列2', '行9列3'],
          ['行10列1', '行10列2', '行10列3']
        ]
      }
    }
  }
</script>
```
:::

## 定义单元格
:::demo
```html
<template>
  <div style="height:500px" class="table-origin">
    <my-dv-page target="parent" fit>
      <my-dv-list width="80%"
                  x-align="center"
                  y-align="middle"
                  radius
                  :columns="columns"
                  :rows="rows">
        <template v-slot:one="{rowIndex}">
          <el-tag size="small" type="success">{{rowIndex}}</el-tag>
        </template>
      </my-dv-list>
    </my-dv-page>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        columns: [
          {label: '列一', width: 100, prop: 'one'},
          {label: '列二', width: 200, prop: 'two'},
          {label: '列三', width: 100, prop: 'three'}
        ],
        rows: [
          ['行1列1', '行1列2', '行1列3'],
          ['行2列1', '行2列2', '行2列3'],
          ['行3列1', '行3列2', '行3列3'],
          ['行4列1', '行4列2', '行4列3'],
          ['行5列1', '行5列2', '行5列3'],
          ['行6列1', '行6列2', '行6列3'],
          ['行7列1', '行7列2', '行7列3'],
          ['行8列1', '行8列2', '行8列3'],
          ['行9列1', '行9列2', '行9列3'],
          ['行10列1', '行10列2', '行10列3']
        ]
      }
    }
  }
</script>
```
:::

## 滚动

:::demo
```html
<template>
  <div style="height:500px" class="table-origin">
    <my-dv-page target="parent" fit>
      <my-dv-list width="80%"
                  x-align="center"
                  y-align="middle"
                  radius
                  :columns="columns"
                  :rows="rows"
                  scroll>
        <template v-slot:one="{rowIndex}">
          <el-tag size="small" type="success">{{rowIndex}}</el-tag>
        </template>
      </my-dv-list>
    </my-dv-page>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        columns: [
          {label: '列一', width: 100, prop: 'one'},
          {label: '列二', width: 200, prop: 'two'},
          {label: '列三', width: 100, prop: 'three'}
        ],
        rows: [
          ['行1列1', '行1列2', '行1列3'],
          ['行2列1', '行2列2', '行2列3'],
          ['行3列1', '行3列2', '行3列3'],
          ['行4列1', '行4列2', '行4列3'],
          ['行5列1', '行5列2', '行5列3'],
          ['行6列1', '行6列2', '行6列3'],
          ['行7列1', '行7列2', '行7列3'],
          ['行8列1', '行8列2', '行8列3'],
          ['行9列1', '行9列2', '行9列3'],
          ['行10列1', '行10列2', '行10列3']
        ]
      }
    }
  }
</script>
```
:::
