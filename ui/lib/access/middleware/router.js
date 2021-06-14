/**
 * 判断路径中间件
 * @param instance
 * @param params
 * @return {Promise<any>}
 */
 export default function (instance, params) { 
  const {routerList} = instance.vm.access
  const {routerListProp, routerExcludes} = instance.options
  // 无注册routerList 不拦截
  if (!routerList || (routerList && !routerList.length)) {
    return Promise.resolve(params)
  } else {
    const {args} = params 
    // 无指定路径不拦截
    if (!args.length) { 
      return Promise.resolve(params)
    } else {
      let flag = 1
      args.forEach((path) => {
        const targetIndex = routerList.findIndex((item) => {
          return item[routerListProp] === path
        })
        if (targetIndex >= 0) {
          flag = 1
        } else {
          if (routerExcludes.includes(path)) {
            flag = 1
          } else {
            flag = 0
          }
        }
      })
      if (flag) {
        return Promise.resolve(params)
      } else { 
        return Promise.reject(params)
      } 
    }   
  }
  
}