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


> **期望效果**
> - 返回一个对象集合：key 为 当前规定字典对应的 name，value为 字典数组（字典数组已具备value、label、id、parentId字段方便表单组件调用）
> - 在同一个数组中，同一个字典ID 对应多个 name时，可以只调用一次接口获取字典（此情况多出现在动态表单需求中）
> - 当字典数据通过接口获取后，可以缓存在本地，在其他地方再次需要时，无需调接口获取
> **其他好处**
> 1. 在调用``“$getOptionsMap”`` 方法后，可以通过 ``$getOptionMap(dictId)`` 获取某个某个字典数据 的 以 每个字典value 为 key，以字典本身为value的集合。
> 2. 提供一个 findLevel 函数，可以通过 一个字典的value，获取完整的父级关系， 例如：越秀区id => 广东省/广州市/越秀区 
> 3. 在html模板中，通过名为``“formatFilter”``的vue.filter 将字典value的变量解析成对应的中文。例如  \{city|formatFilter('CITY')\} => '广州'
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

## 安装命令
```sh 
npm run widgets dict
```
执行命令后，工具生成在项目的 **``".my/widgets/dict-management"``** 路径下；
> 生成文件目录如下：
> - **``modules/dict.js``** 
> - **``utils/filter``** 
> - **``utils/dictOpts.js``** 
> 

## modules/dict.js 使用
#### 描述：
vuex全局管理字典的 module 文件
#### 使用：
modules下面的``“dict.js”``文件可以复制到 ``“./src/store/modules”``下，并在 ``“./src/store/index.js`` 中引入使用
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
#### dict.js 的修改
dict.js 开头有 ``getCommonDict``方法，需要根据项目需求自行修改。以下为参考：
```javascript
// 全局formatFilter 的添加字典函数
import { addFormatFilter } from '@/helper/filter'; // 引入 filter 中的“addFormatFilter”方法，引入路径根据你将filter文件放置位置为准

// --------------以下代码为定义字典加载方法-------
import axios from 'axios'
// 建议命名为“getCommonDict” 作为系统内常规获取字典的方法， 下面action中调用，后端字典接口 尽量以一个唯一ID为参数获取对应字典数据
const getCommonDict = function (dictCode) {
  // 调接口获取字典方法 根据项目实际情况自行编写。
  return axios({
      url: '/assets/data/' + dictCode + '.json'
    }).then((res) => {
      // 有数据 输出 数据
      if (res.data.code === 0) {
        return Promise.resolve(res.data.data)
      } else {
        // 没数据输出空数组
        return Promise.resolve([])
      }
    }).catch(() => {
      // 建议接口报错也输出空数组
      return Promise.resolve([])
    })
}
// --------------以上代码为定义字典加载方法-------

```
## utils/dictOpts 使用
#### 描述：
调用并获取字典的函数文件， 里面提供三个api:
1. ``getOptionsMap(dictList)``: 根据字典配置数组 返回 对应字典数据结合
  ```javascript
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
    this.$getOptionsMap().then((res) => {
      this.optionsMap = res 
    })
  ```
2. ``getOptionMap(dictList)``: 根据字典Id 返回 对应字典数据结合  
  ```javascript
  Vue.$prototype.$getOptionsMap = getOptionsMap
  Vue.$prototype.$getOptionMap = getOptionMap
  const dictList = [
      [
        {name: 'city', code: 'CITY'}, 
        {name: 'org', code: 'DEPTS'}
    ]
    this.$getOptionsMap().then((res) => {
      this.optionsMap = res 
      const cityMap = this.$getOptionMap('CITY')
      console.log(cityMap) // {'440104': {...}, ...}
    })
  ```
#### utils/dictOpts.js使用：
将 “``dictOpts.js``”文件（无需utils文件夹）放置到项目中某位置（建议 helper文件夹<自定义工具函数>）， 在 main.js 中引入注册即可
```javascript
// main.js 
// 全局字典管理函数
import {getOptionsMap, getOptionMap} from '@/helper/dictOpts'

Vue.prototype.$getOptionsMap = getOptionsMap // 注册字典管理
Vue.prototype.$getOptionMap = getOptionMap // 注册字典管理
```
或者在组件下引入
```javascript
import {getOptionsMap} from '@/helper/dictOpts'
export default {
  methods: {
    getOptionsMap,
    // ....
  },
  created() {
    this.getOptionsMap([]).then((res) => {})
  }
}
```

## utils/filter 使用
###描述
根据 全局字典函数``getOptionsMap``调用后 注册数据的 formatFilter 过滤器文件
#### 使用方式：
将utils下的``filter文件夹``（无需utils）直接复制到项目某处（建议helper文件夹下）， 在 main.js 中引入注册即可
```javascript
// main.js 
// 全局（字典）过滤器
import formatFilter from '@/helper/filter';
// 注册全局过滤器‘formFilter’
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
#### store/dict.js
在dict.js 的 vuex module中，注册了``fetchDictByCode`` 的action， 通过异步方式获取 字典数据，并保存在state 中。
```javascript
 actions: {
    fetchDictByCode(context, { dictCode, custFetch }) {
      // actions 会传入 字典Code 和 自定义获取字典的方法，若没有 自定义方法，则使用前面注册的“getComonDict”方法
      const fetchFn = custFetch ? custFetch(dictCode) : getCommonDict(dictCode) 
      return fetchFn.then(res => { 
        const arr = Array.isArray(res) && res.map(item => {
          return {
            ...item,
            value: item.dictCode || item.orgCode,
            label: item.dictName || item.orgName,
            id: item.dictCode || item.orgCode,
            parentId: item.parentCode
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

#### utils/dictOpts.js 
##### getOptionsMap()方法
dictOpts.js 文件 提供了 “getOptionsMap()”方法，可以在页面中进行调用，其原理是：
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

