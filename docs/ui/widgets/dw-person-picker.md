# 单位-人-联动

## 样例：

![cover](/my/img/dw.jpg)

## 安装命令

```sh
npm run widgets dw-person-picker
```

执行命令后，工具生成在项目的 **`".my/widgets/dw-person-picker"`** 路径下；

> 生成文件目录如下：
>
> -   **`auto-complete.vue`**
> -   **`index.vue`**
> -   **`input-area.vue`**
> -   **`org-list.vue`**
>     其中： “index.vue” 为入口文件， “dw-person-picker”文件夹可以放置于“src/helper”作为工具函数使用

## dw-person-picker 提供的方法

### 会暴露两个方法出来

#### 1.getSelectPeoloe()

获取已选的当前人员

#### 2.getPaths()

获取当前路径部门

## dw-person-picker 使用

### 可 props 三个参数

#### 1.visible

是否隐藏选择单位，默认展示

#### 2.multiple

是否多选，默认多选

#### 3.value

已选的当前人员

```javascript
// 参数例子
 [
        { id: '12', name: '人员1', src: '' },
        { id: '13', name: '人员2', src: '' }
      ],
```

#### 4.companyList

部门列表

```javascript
// 参数例子
;[
	{ id: '3', name: '部门3', parentId: '2' },
	{ id: '4', name: '部门4', parentId: '3' },
	{ id: '1', name: '部门1', parentId: '2' },
	{ id: '2', name: '部门2', parentId: '0' },
	{ id: '5', name: '部门5', parentId: '4' },
]
```

## 注：

### 在 org-list 里有 loadUser 方法，是每次点击部门获取该部门底下的员工的

```javascript
  loadUser(orgId) {
      this.users = [];
      this.userLoading = true;
      this.$nextTick(() => {
        this.userLoading = false;
        this.users = [
          { id: '12', name: '人员1', src: '', isSelect: false },
          { id: '13', name: '人员2', src: '', isSelect: false },
          { id: '14', name: '人员3', src: '', isSelect: false },
          { id: '15', name: '人员4', src: '', isSelect: false }
        ];
        this.users.map(x => {
          this.selectData.forEach(y => {
            if (x.id === y.id) {
              x.isSelect = true;
            }
          });
          return x;
        });
      });
    },
```

### 在 auto-complete 里有 load 方法，是搜索功能

```javascript
load(keyword) {
      // getPersonByKeyword({xm: keyword}).then(res => {
      //   this.items = res.map(item => {
      //     return { id: item.id, name: item.name, address: item.orgName, row: item}
      //   })
      // })
      this.items = [
        { id: '14', name: 'item.name123', src: '' }
      ];
      console.log(keyword, '请求接口......');
    },
```

## 使用案例

```html
<template>
	<div class="login-page">
		<orgs :value="lists" :companyList="treeLists"></orgs>
	</div>
</template>

<script>
	import Orgs from '@/components/text'
	export default {
		components: {
			Orgs,
		},
		data() {
			return {
				lists: [
					{ id: '12', name: '人员1', src: '' },
					{ id: '13', name: '人员2', src: '' },
				],
				treeLists: [
					{ id: '3', name: '部门3', parentId: '2' },
					{ id: '4', name: '部门4', parentId: '3' },
					{ id: '1', name: '部门1', parentId: '2' },
					{ id: '2', name: '部门2', parentId: '0' },
					{ id: '5', name: '部门5', parentId: '4' },
				],
			}
		},
		watch: {},
		methods: {},
		mounted() {},
	}
</script>

<style lang="scss" scoped>
	.login-page {
		height: 100%;
	}
</style>
```
