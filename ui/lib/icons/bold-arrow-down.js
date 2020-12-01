
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M960.5 326.1v74.5L572.5 715.8c-17.1 13.9-38.6 21.5-60.5 21.5-22 0-43.5-7.6-60.5-21.5L64 401v-74l367.3 298.4c22.7 18.5 51.4 28.7 80.7 28.7 29.3 0 58-10.2 80.8-28.7L960.5 326.1m56-125.8c-1.7 0-3.5 0.6-5 1.8L552.4 575.7c-11.8 9.6-26.1 14.4-40.4 14.4-14.3 0-28.6-4.8-40.4-14.3L13 203.1c-1.5-1.2-3.3-1.8-5-1.8-4.1 0-8 3.3-8 8v206.9c0 9.6 4.3 18.8 11.8 24.8l399.3 324.5c29.4 23.9 65.2 35.8 100.9 35.8s71.5-11.9 100.9-35.8l399.8-324.8c7.5-6.1 11.8-15.2 11.8-24.8V208.3c0-4.7-3.9-8-8-8z"/>
    </svg>
  )
}

Vue.component('icon-bold-arrow-down', Icon)
export default Icon

