
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M807 196.3c13.4-3.5 28.4 3.8 34 16.4 6.1 12.1 1.7 26.5-5.4 37.1-19.9 31-52.9 50.2-85.9 64.5-38.1 15.6-81 28-122 16.1-3.3-0.4-3.3-5.1 0.3-4.9 67.4-9.6 123.7-56.9 158.8-113.3 4.1-7.8 11.4-14 20.2-15.9zM908.6 206.2c8.7-16.3 35.9-13 40.5 4.9 12.3 43.9 10.4 90.4 3.1 135-7.9 37.4-23.3 73.2-44.3 105.1-24 34.4-55.4 63.5-90.9 85.8-7.9 4.3-15.9 9.9-19 18.7-3.4 9 0.4 19 6.2 26.1 16.6 18.6 38.1 32.1 60.9 41.9 46.6 19.7 98.2 25.8 148.5 23.4 8.2-0.9 13.9 9.9 8.4 16-76.1 66.8-174.6 106.4-275.4 114.1-124.9 9.1-254.5-30.2-349.1-113.3-44.5-38.3-80.2-85.4-113.6-133.4-15.3-21.8-31.4-44.3-55.1-57.7-19.8-12.5-44.5-17-67.2-11.4 42.4 42.3 83.6 86.6 114.8 138 12.6 21.3 24 44.2 26.6 69.1 2.9 48.1-19 96.7-56.6 126.7-35.6 29.3-85.2 40.5-130 29.4-41-9.6-77.1-37.5-97.2-74.4-14-25.4-21-54.5-18.8-83.2 3.3-27.1 16.6-51.7 30.7-74.7 29.4-45.8 66.1-86.5 104.6-124.8 1.5-1.4 2.2-3.3 3-5-13.4-0.9-28.5-3.1-37.5-14.1-2-2.2-4.7-7-0.6-8.5 14.8-3.4 29.4 3.2 41.9 10.5-4.1-8.9-2.8-21.1 5.7-26.9 7.7-2.5 10.5 7.5 11.8 13.1 18.3-18.8 44.7-30.9 55.5-56.1 9.8-25.2 17.4-51.6 31.4-74.9 20.3-35.8 53.2-63.6 90.9-79.6 40.9-16.4 88-17.2 129.3-1.9 21.9 8.2 42.5 19.8 60.2 35.1 23.8 20.5 35.6 51.8 61.1 70.6 17.1 12.8 38.9 18 60 18.1 52.6 1.2 105.2-12.3 151.6-37 45.2-24.2 80.5-62.7 108.6-104.7M296.7 341.6c-18.3 2.9-31.3 23.2-26 41.1 4.4 18.1 25.8 29.4 43.1 22.4 15.7-5.3 25.2-23.6 20.6-39.5-3.8-16.2-21.3-27.3-37.7-24z"/>
    </svg>
  )
}

Vue.component('icon-cainiao', Icon)
export default Icon

