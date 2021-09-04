# dict 全局字典管理

## 需求：
- 系统中经常需要使用大量的字典数据，用于表单操作（如select、radio、checkbox）； 
- 有时后端返回（用于展示）的数据是根据前端表单提交的字典值（后端不进行翻译）；
- 有时用户需要对填写的表单内容在提交前先按固定模板生成文档进行预览，表单中的字典值需要翻译为对应的内容。

鉴于以上常见的三种情况（可能有其他需求）， 导致如下问题： 
1. 页面中需要（异步）获取字典数据的需求变得频繁且不固定。
2. 同一个字典数据可能需要在系统多处地方获取调用，造成频繁接口调用
3. 同时部分功能在未返回字典数据前不能使用或者影响使用体现。
4. 不同开发者对字典的调用方式各有不同，可能造成重复代码的编写。

## 解决方案
后端尽量确保调用字典的方式单一，且一个类型的字典数据对应一个固定ID；
前端封装一个全局方法函数``$getOptionsMap``(暂定)，通过传入一个数组，返回字典集合：
> **$getOptionsMap() 传参要求**
> - 传入一个对象的数组
> - 数组中每个对象的key 为： 
>   - name: 当前页面中 字典数据所对应的字段名称（自定义，根据业务需求命名）
>   - code：获取字典数据的唯一ID，通常有后端提供
>   - custFetch：获取字典的自定义函数(用于特殊字典)，需要返回一个Promise


**期望效果**
- 返回一个对象集合：key 为 当前规定字典对应的 name，value为 字典数组（字典数组已具备value、label、id、parentId字段方便表单组件调用）
- 在同一个数组中，同一个字典ID 对应多个 name时，可以只调用一次接口获取字典（此情况多出现在动态表单需求中）
- 当字典数据通过接口获取后，可以缓存在本地，在其他地方再次需要时，无需调接口获取

## 安装命令
```sh 
npm run widgets dict
```
执行命令后，工具生成在项目的 **``".my/widgets/dict-management"``** 路径下；
> 生成文件目录如下：
> - **``filter/date-format.js``** 
> - **``filter/index.js``** 
> - **``dict-model.js``** 
> - **``dict-opts.js``**
> - **``index.js``**
> 其中： “index.js”为 全部工具函数的输出文件， “dict-management”文件夹可以放置于“src/helper”作为工具函数使用

## dict-management 提供的方法 使用
### dictModuleInit(): 字典管理Vuex模块生成函数
#### 描述：
此函数 用于在vuex中生成 全局管理字典的 module 子模块
#### 使用：
在项目store/modules下面的“dict.js”文件 使用``“dictModuleInit”``方法生成子模块
```javascript
// 引入‘addFormatFilter’ 和 ‘dictModuleInit’
import {addFormatFilter, dictModuleInit} from '@/helper/dict-management/index';
import axios from 'axios' 
const getCommonDict = function (dictCode) {
  // 调接口获取字典方法 根据项目实际情况自行编写。
  return axios({
    url: '/data/' + dictCode + '.json'
  }).then((res) => {
    return Promise.resolve(res.data.data) // 接口返回的数组[{label, value, parentId, id, fullName}]
  }).catch(() => {
    return Promise.resolve([])
  })
}
// 将‘addFormatFilter’ 于 ‘getCommonDict’ 传入 module初始化函数
export default dictModuleInit(getCommonDict, addFormatFilter)
```
在 "src/store/index.js" 中引入 dict 的模块文件， 并在modules 中注册
```javascript
import dictModule from './modules/dict'
export default {
  // ... 
  modules: {
    dict: dictModule
  }
  // ...
}
```
> **getCommonDict**方法的返回数据处理：
> getCommonDict 返回的数据 为 字典数组，每个元素必须含有以下字段：
> - label: 字典中文
> - value: 字典对应code
> - id: 字典的id，可以是 字典的code
> - parentId: 当前字典的父id，用于生成树
> - fullName: 字典全名（如省市区全程）， 若无，则以label代替（字典管理内部以实现）。
 
### getOptionsMap 使用
#### 描述：
注册字典数据的函数， 根据传入的数组，生成对应的字典数据集合；
#### 参数： 
- @property {Array} [dictList] 当前要获取的字典
- @property {string} [dictList.name] 字典对应的字段名（按当前模块需求命名）
- @property {string} [dictList.code] 字典唯一代码（根据接口获取对应字典唯一ID）
- @property {Function} [custFetch] 自定义的字典获取函数，需要返回 Promise
#### 使用： 
```javascript
// 引入方法
import {getOptionsMap} from '@/helper/dict-management/index'
// 将 “$getOptionsMap” 注册为全局方法
Vue.$prototype.$getOptionsMap = getOptionsMap
const dictList = [
    [
      {name: 'city', code: 'CITY'}, 
      {name: 'org', code: 'DEPTS'},
      {
        name: 'other', 
        code: 'CustDicts', 
        custFetch: () => {
          const arr = [
            {dictCode: '610404', dictName: '渭城区'},
            {dictCode: '141127', dictName: '岚县'},
            {dictCode: '710409', dictName: '丰原区'}
          ]
          return Promise.resolve(arr)
        }
      }
  ]
  this.$getOptionsMap(dictList).then((res) => {
    this.optionsMap = res 
  })
```
### getOptionMap 使用: 
#### 描述：
根据字典Id 返回 对应字典数据结合 
#### 参数： 
@property {String} [dictCode] 需要获取的字典数据的对应唯一ID
#### 使用：
使用 ``“getOptionMap”``方法 必须确保 对应ID 的字典 已经获取成功
```javascript
Vue.$prototype.$getOptionsMap = getOptionsMap
Vue.$prototype.$getOptionMap = getOptionMap
const dictList = [
    [
      {name: 'city', code: 'CITY'}, 
      {name: 'org', code: 'DEPTS'}
  ]
  this.$getOptionsMap(dictList).then((res) => {
    const cityMap = this.$getOptionMap('CITY')
    console.log(cityMap) // {'440104': {...}, ...}
  })
``` 

### findPathInOpts 使用: 
#### 描述：
根据某个字典ID, 获取完整的 字典层级， 如 用“越秀区” 获取 “广东省广州市越秀区” 
> PS: findPathInOpts 与 "$ui/utils/tree" 中的“findPath()”区别是： findPath 在 完整的树状数据中查找。findPathInOpts 在 原始字典数据（一维数组）中查找
#### 参数： 
@property {String} [dictvalue] 字典项的value / id
#### 使用：
```javascript
findPathInOpts('440104') // 返回 ['440', '44010', '440104']  
```

### formatFilterInit
#### 描述
根据 全局字典函数``getOptionsMap``调用后 注册数据的 formatFilter 过滤器文件
#### 参数
项目的 Vuex Store 实例 
#### 使用
在 main.js 中引入注册即可
```javascript
// main.js 
// 全局（字典）过滤器
import {formatFilterInit} from '@/helper/dict-management/index' 
const store = new Vuex.Store(vuexOptions) // 注册 store
// 注册全局过滤器‘formFilter’， 需要将store 作为参数传入
Vue.filter('formatFilter', formatFilter(store));
```
在 代码中使用如下：
```html
<div>{{cityValue|formatFilter('CITY')}}</div>
<!--
  其中： cityValue是字典值的赋值变量名，‘CITY’是 获取字典数据的codeId
  建议在使用formatFilter前，在组件或页面 中先调用 getOptionsMap方法。
 -->
```

## 工具代码解析：
### dictModuleInit.js
此方法生成了“dictModule”， 在dictModule中，注册了``fetchDictByCode`` 的action， 通过异步方式获取 字典数据，并保存在state 中。
```javascript
 actions: {
    fetchDictByCode(context, { dictCode, custFetch }) {
      // actions 会传入 字典Code 和 自定义获取字典的方法，若没有 自定义方法，则使用前面注册的“getComonDict”方法
      const fetchFn = custFetch ? custFetch(dictCode) : getCommonDict(dictCode) 
      return fetchFn.then(res => { 
        const arr = Array.isArray(res) && res.map(item => {
          return {
            ...item 
          };
        }) || [];
        const obj = {},
          map = {};
        // 获取字典数据后，会以 字典CodeId 作为唯一key 存放在 state中；  
        obj[dictCode] = arr;
        context.commit('setOptions', obj);
        // 把单个字典数组解析成以字典value 为key 的 结合，可以用于快速获取字典内容
        arr.forEach(r => {
          map[r.value] = r;
        });
        context.commit('setOptionMap', { [dictCode]: map });

        // actions 方法最终会返回 Promise.resolve
        return Promise.resolve(Object.freeze(arr));
      });
    }
  }
```

### getOptionsMap()方法
##### getOptionsMap()方法
“getOptionsMap()”方法，在Vue中注册后可以在页面中进行调用，其原理是：
- 将传入的 dictList 数组 对 相同的“code” 进行去重合并（确保相同的字典ID仅调用一次接口）
- 将 合并后的接口 转化为 “``fetchEditOpt()``”方法：
  > **fetchEditOpt() 方法**
  > - fetchEditOpt 方法 return 一个 promise；
  > - promise中 先根据 字典CodeID 在 store 的dict module 里面获取已加载的字典数据；
  > - 若dict module 中没有字典数据，则通过 dict module 中的actions 加载数据并存在store中
- 最后 用Promise.all() 将 ``fetchEditOpt()``方法的数组 一同调用并最终返回一个字典结合

```javascript
// 单个字典数据获取函数 
const fetchEditOpt = function(dictCode, dictNames, custFetch) {
  return new Promise((resolve, reject) => {
    if (this.$store.state.dict.options[dictCode]) {
      // 已存在 
      const obj = dictNames.reduce((total, name) => {
        total[name] = this.$store.state.dict.options[dictCode]
        return total
      }, {}) 
      resolve(obj);
    } else {
      return this.$store
        .dispatch('dict/fetchDictByCode', { dictCode, custFetch })
        .then(res => {
          const obj = dictNames.reduce((total, name) => {
            total[name] = res
            return total
          }, {}) 
          resolve(obj);
        });
    }
  });
};
// 将DictList 进行合并的函数
const _flatDictList = function(arr) {
  const fetchMap = {}
  const codeMap = arr.reduce((total, item) => {
    const custFetch = item.custFetch || null
    fetchMap[item.code] = custFetch
    if (total[item.code]) {
      total[item.code].push(item.name)
    } else {
      total[item.code] = [item.name]
    }
    return total
  }, {}) 
  const list = Object.entries(codeMap).map((entry) => {
    return {
      code: entry[0],
      names: entry[1],
      custFetch: fetchMap[entry[0]]
    }
  }) 
  return list
}
export const getOptionsMap = function(DictList) {
  const fetchActions = _flatDictList(DictList).map(item => {
    return fetchEditOpt.apply(this, [item.code, item.names, item.custFetch]);
  });

  return Promise.all(fetchActions).then(res => {
    const optMap = res.reduce((total, item) => {
      total = { ...total, ...item };
      return total;
    }, {});

    return Promise.resolve(optMap);
  });
};
```

## 使用案例
```html
<template>
<div>
  <my-form :model="model" v-if="optionsMap"> 
    <my-cascader label="城市" name="city" :options="optionsMap.city"></my-cascader>
    <my-cascader label="部门" name="org" :options="optionsMap.org"></my-cascader> 
    <my-cascader label="地区" name="chengshi" :options="optionsMap.chengshi"></my-cascader>
    <my-select label="其他" name="other" :options="optionsMap.other"></my-select>
  </my-form>
  <div>
    {{model.city|formatFilter('CITY')}}
  </div>
</div>  
</template>
<script>
export default {
  data() {
    return {
      optionsMap: null,
      model: {
        city: '',
        chengshi: '',
        dept: '',
        other: ''
      }
    }
  },
  created() {
    const dictList = [
      [
        {name: 'city', code: 'CITY'},
        {name: 'chengshi', code: 'CITY'},
        {name: 'org', code: 'DEPTS'},
        {
          name: 'other', 
          code: 'CustDicts', 
          custFetch: () => {
            const arr = [
              {dictCode: '610404', dictName: '渭城区', parentCode: '610400', sortNo: 1},
              {dictCode: '141127', dictName: '岚县', parentCode: '141100', sortNo: 1},
              {dictCode: '710409', dictName: '丰原区', parentCode: '710400', sortNo: 1}
            ]
            return Promise.resolve(arr)
          }
        }
    ]
    this.$getOptionsMap().then((res) => {
      this.optionsMap = res

      const otherOptMap = this.$getOptionMap('CustDicts')
      console.log(otherOptMap) // 输出 {'610404': {...}, '141127': {...}, }
    })
  }
}
</script>
```