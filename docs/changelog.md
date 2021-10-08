# 更新日志

## v4.2.10
### 修复
- 优化my-cascader / my-tree-select 组件代码，提高性能
- 添加 widgets 补丁代码生成（业务常用代码）
- 优化组件列动态布局（从媒体查询扩展为可监听组件本身宽度）
- my-table 支持层级表头
- 部分组件样式调整
- “@”人输入框


## v4.2.0

### 新特性
- 增加数据可视化大屏组件库
- 重新设计行业图标
- 关系图组件优化
  - 添加链接和分组的编辑功能
  - 增加节点编辑器组件
  - 增加focusScale参数
  - 增加多行文本事件
  - 增加动画及高亮效果
  - update 连线动画
- 新增 MyLocationPicker 经纬度提取输入组件
- 新增 MySearchBox 搜索输入框组件
- 新增 MyBreadcrumb 面包屑导航

### 修复
- my-map-draw 修改功能 添加 指定修改目标的配置
- my-dialog组件初始化后高度不能改变
- my-map-zoom slider 参数无效
- my-map-drawer 增加change事件
- my-map-dawer 文档缺失
- /my/ui/map/marker.html 文档报错
- MyDialog内存泄漏
- 地图Cluster、Heat 数据变化时视图没有更新

## v4.1.0

### 新特性
- 支持页面模板安装
- 增加演示站点
- 增加关系图类库
- MyTable 加个开关，可以配置放开设置 是否 freeze list
- MyDialog支持点击窗体外可关闭
- map 增加墨卡托坐标 与 WGS84坐标 互转方法
- MyPro组件both布局模式支持菜单数据分拆
- 重构右键菜单组件
- Access支持对接单点登录
- my-map-marker 支持多个popup同时显示
- my-paragraph 省略号支持tooltip
- 生成环境默认不生成sourceMap

### 修复
- 修复Animate.css 失效bug
- 修复富文本编辑器表单重置无效
- 文档：示例在可视区内才渲染
- 修复地图文档调色版拖拽bug
- 修复 decryptByDES 解密函数失效

## v4.0.0

- 重新规划重构自研组件库
- 权限控制模块
- 全新地图应用类库
- 图表组件库
- 支持前端微应用
- 重构代码生成器
- 支持运行时静态配置
- 自动注册组件
- 自动生成路由表
- 支持多主题支持切换
- 图标支持按需加载
- 全新文档站点，支持单文件示例代码效果预览

