
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M764 736H260c-2.2 0-4-1.8-4-4v-56c0-2.2 1.8-4 4-4h504c2.2 0 4 1.8 4 4v56c0 2.2-1.8 4-4 4zM764 864H260c-2.2 0-4-1.8-4-4v-56c0-2.2 1.8-4 4-4h504c2.2 0 4 1.8 4 4v56c0 2.2-1.8 4-4 4zM864 96v832c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h640c17.7 0 32 14.3 32 32zM160 0c-35.3 0-64 28.7-64 64v896c0 35.3 28.7 64 64 64h704c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H160zM752.2 473.5c-31.6 32.7-72.7 54.5-117.4 62.5l-31.7 5.7c-19.4 3.5-39.3 3-58.5-1.3l-32.2-8c-64.4-15.9-123.1-49.3-169.8-96.5l-22.8-30.4-8-10.6c-11.8-15.8-20.4-33.7-25.2-52.8l-7.8-31.2c-11-44.1-7.9-90.5 9-132.7 3.8-9.5 11.9-16.6 21.8-19.2l34.3-8.9c7.2-1.8 14.7 1 18.9 7.1l52.4 76.6c5 7.3 7.5 16 7.2 24.8-0.4 10.5-4.7 20.5-12.1 28L391 306c-10.9 10.9-17 25.6-17 41 0 15.4 6.1 30.1 17 41l19.8 19.8c9.3 9.3 19.7 17.6 30.8 24.6 9.8 6.2 20.3 11.4 31.1 15.5l45.8 17.5c14.4 5.5 30.3 5 44.3-1.3 14-6.3 25-17.9 30.4-32.2l9.8-25.7c3.8-9.9 11.1-17.9 20.6-22.5 7.9-3.9 16.9-5.1 25.6-3.6l91.3 16.4c7.3 1.3 13 7 14.2 14.3l6 34.9c1.8 10.2-1.4 20.5-8.5 27.8z"/>
    </svg>
  )
}

Vue.component('icon-cdr', Icon)
export default Icon

