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

## 代码示例

### 使用案例

```html
<template>
	<div>
		<el-button size="mini" type="primary" @click="visible = true"
			>select</el-button
		>

		<my-dialog
			:visible.sync="visible"
			target="body"
			title="标题文字"
			width="700px"
			height="500px"
			:footer="true"
			@submit="getResult"
		>
			<dw-person-picker
				ref="picker"
				:submit-btn="false"
				:show-org-list="true"
				:multiple="true"
				:load-org="createOrgTree"
				:load-user="loadUserByOrg"
				:search-person="searchPersonByText"
				@submit="showResult"
			></dw-person-picker>
		</my-dialog>
	</div>
</template>
<script>
	import DwPersonPicker from '@/components/dw-person-picker'
	import axios from 'axios'
	import { create } from '$ui/utils/tree'
	import Mock from 'mockjs'
	export default {
		components: {
			DwPersonPicker,
		},
		props: {},
		data() {
			return {
				visible: false,
				selects: [],
				treeLists: [],
			}
		},
		computed: {},
		methods: {
			mockUser(limit) {
				return Mock.mock({
					[`list|${limit}`]: [
						{
							id: '@id',
							name: '@cname',
							'age|10-100': 18,
							department: '@ctitle',
							other1: '@ctitle',
							other2: '@ctitle',
						},
					],
				})
			},
			createOrgTree() {
				return axios({
					url: '/data/DEPT.json',
					method: 'get',
				}).then((res) => {
					const tree = create(res.data.data, '')
					return Promise.resolve(tree)
				})
			},
			loadUserByOrg(org) {
				return new Promise((resolve) => {
					setTimeout(() => {
						const num = Math.round(Math.random() * 15)
						const users = this.mockUser(num).list
						resolve(users)
					}, 500)
				})
			},
			searchPersonByText(text) {
				return new Promise((resolve) => {
					setTimeout(() => {
						const num = 1 + Math.round(Math.random() * 4)
						const users = this.mockUser(num).list
						resolve(users)
					}, 500)
				})
			},
			showResult(targets, dept) {
				console.log(targets, dept)
			},
			getResult() {
				const targets = this.$refs.picker.getSelctPersons()
				const dept = this.$refs.picker.getSelectDept()
				console.log(targets, dept)
			},
		},
		created() {},
		mounted() {},
	}
</script>
<style lang="scss" scoped></style>
```

## 属性参数(inner) props

### 1.submit-btn

```javascript
type: Boolean
default:true
description: 控制是否显示提交、取消按钮
```

### 2.multiple

```javascript
type: Boolean
default:true
description: 控制是否多选
```

### 3.show-org-list

```javascript
type: Boolean
default:true
description: 是否结合部门进行查询（显示右侧部门列表）
```

### 4.search-person

```javascript
type: Function
required: true
description: 通过搜索异步查询人员函数，必传，参数keyword, 返回输出人员列表的Promise对象
```

### 5.load-org

```javascript
type: Function
required: true
description: 异步获取初始部门树的函数，必传，返回输出组织架构树的Promise对象
```

### 6.load-org-children

```javascript
type: Function
required: false
description: 异步获取各个子部门树的函数（用于懒加载），选传，返回输出子级部门的Promise对象
```

### 8.org-prop-map

```javascript
type: Object
default: {
    name: 'label',
    id: 'id',
    children: 'children',
    parentId: 'parentId'
}
description: 接口返回部门数据字段映射
```

### 8.load-user

```javascript
type: Function
required: true
description: 根据部门信息异步获取部门成员的函数，必传，返回输出部门成员数组的Promise对象
```

### 9.person-prop-map

```javascript
type: Object
default:{
    name: 'name',
    id: 'id',
    cardNo: 'cardNo'
}
description: 接口返回人员列表字段映射
```

## Methods(inner) 
### 1.getSelctPersons
```javascript
description: 通过API获取选中人员
```

### 2.getSelectDept
```javascript
description: 通过API获取选中部门
```

## Events
### 1.submit
```javascript
description: 点击提交按钮 获取当前人员和部门
```

### 2.close
```javascript
description: 点击取消按钮 清空右侧列表选中
```
