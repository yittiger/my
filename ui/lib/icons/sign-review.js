
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M957.6 0C247.8 7.6 114.8 634.1 59.1 963.5c-3.9 22.8 7.8 44.2 26.6 54.3 7.2 3.9 15.5 6.1 24.4 6.1 11.8 0 22.8-4 31.6-10.7 8.8-6.8 15.5-16.4 18.5-27.8 9.3-34.9 21-66.1 35.2-93.6 45.4-87.7 116-137.5 212-149.5 193.9-24.2 342-186.2 400.6-333.8 5.6-14.1 0.7-30.2-11.9-38.6l-23.4-15.6c-16.8-11.2-19.2-35-4.9-49.3l23.6-23.6c40.8-40.8 81.7-97.8 135.4-197 12-22.1 24.6-46.3 38-72.9 0.3-0.6 0.5-1.2 0.7-1.8 1.1-4.7-2.6-9.7-7.9-9.7zM839.1 109.7c-8.1 13.7-15.9 26.3-23.5 38-24.2 37.2-46.2 65.4-69.4 88.6l-23.6 23.6c-20.4 20.4-30.5 48.6-27.7 77.3 2.8 28.7 18.3 54.4 42.3 70.4l1.2 0.8c-11.8 25.3-26.2 50.3-43 74.7-23.3 33.7-50.2 64.3-79.8 91.1-31.5 28.4-65.2 51.7-100.4 69.2-37.5 18.6-76.4 30.5-115.6 35.4-44.6 5.6-94.9 19.7-142.5 50.3-6.8 4.4-13.6 9.1-20.3 14.2-3.1 2.4-7.4-0.6-6.3-4.3 37.8-127.3 98.5-246.8 178.3-353.2l1.4-1.9s-90.4 68.3-203 264.5c-2.4 4.2-8.8 1.3-7.3-3.3 12.2-36.5 25.5-71.2 39.7-103.8 22.9-52.8 48.9-101.7 77.3-145.5 31.2-48.1 66.3-91.5 104.3-129 41.2-40.7 87.1-75.6 136.4-104 17.4-10 35.3-19.2 53.8-27.7 38.5-17.7 79.4-32.2 122.2-43.2 40.6-10.5 83.7-18.1 128.7-22.7-8.1 14.5-15.8 27.9-23.2 40.5z"/>
    </svg>
  )
}

Vue.component('icon-sign-review', Icon)
export default Icon

