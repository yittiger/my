
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M113.66994 433.2C171.56994 235.7 298.26994 94.8 529.96994 74.7c16-1.4 38.3-0.1 56.5-3.6 15.7-3.1 34.8-14.4 52.9-21.8 73.4-30.1 235.6-82.8 317.6-18.1 71.1 56.3 58 193.2 14.1 282.5 35 70.5 61 168.8 45.9 278.9-205.9 8.4-445.7 1.1-645.7 3.7 6.7 106.3 73.6 187.6 172.9 199.1 97 11.2 164.1-43.4 208.2-105h246.9c-64.2 183.8-227.3 326.3-479.8 307.8-57.4-4.3-102.2-20.9-151.8-39.9-82.8 45.1-265.9 112.2-338.7 18.1-55.3-71.4-19.8-201.3 10.6-286 61.4-171.6 178.4-341.6 292.9-438.2 0.7-3 3.5-3.7 3.5-7.2-90.4 46-151.4 122.2-222.3 188.2z m868-267.9c-3.4-123.3-162.8-111.2-247-61.6 94 37.5 162.6 101.1 218.8 177.4 12.2-38.7 29.5-70.8 28.2-115.8zM371.26994 465.8h391.7c-11.4-251.8-379.4-231.5-391.7 0zM81.96994 907.7c19.7 111.5 176.2 79.1 247 29-92.9-52-150.8-139.8-197.6-239.1-21.8 53.7-62.4 136.4-49.4 210.1z"/>
    </svg>
  )
}

Vue.component('icon-internet-fill', Icon)
export default Icon

