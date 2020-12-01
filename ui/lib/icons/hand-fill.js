
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M950.5 471.1c34.1 33.3 34.1 74 5.2 117.8 0 0-186.9 316.8-257.3 358.1-67.7 49.5-149.3 76.5-233.1 77-125.4 0-236.6-78.6-275.5-194.8l-0.1-0.3-0.3-0.9-2.3-7.1L51 387.5c-12-34.1 5.9-71.6 40-83.7 34.2-11.8 71.8 7.5 83.9 40.9l77.6 202.4c3.3 8.4 5.4 4.5 5.4-2.1l-52.1-368.9c-6.4-34.8 17.3-70.1 53-76.3 35.7-6.3 70 18.8 76.4 53.6l58.5 315.2c0.6 5.4 4.8 4.1 4.5-0.6l1.3-404c0-35.4 29.5-64 65.8-64S531 28.7 531 64l18.3 401c0.7 10.3 6.9 9 9.6 1.3l54.2-308.5c4.3-35.1 37.1-62 73.1-57.9 35.9 4.6 61.5 37.3 57.3 73.3L686.2 547c-3.4 26.7-11.9 74.4 0 88.1 3 3.5 10.3 13.1 22.5 14.8 14.9 2.1 31.1-8.1 41.6-26 25.5-46.3 51.1-92.6 76.6-139 26.8-37.2 89.4-47.1 123.6-13.8z"/>
    </svg>
  )
}

Vue.component('icon-hand-fill', Icon)
export default Icon

