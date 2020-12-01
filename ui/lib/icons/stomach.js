
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M482.4 109.6c3 0 5.7 0.3 7.9 0.7 0.8 2.8 1.6 5.6 2.2 8.5l0.3 1.3 0.3 1.3c2.3 9.1 5.2 20.5 9.4 32.9 8.8 26.4 30.9 46.7 58 53.2 6.4 1.6 13 2.4 19.6 2.4 21.2 0 41.3-8 56.7-22.6 25.4-23.8 57.3-35.4 97.5-35.4 16 0 33.5 1.9 51.9 5.6 11.6 2.4 24.2 8.4 37.4 18s26.8 22.6 40.3 38.6c28.3 33.5 47.2 69.1 52.3 79.2 15.8 31.4 28 67.9 35.4 105.7 7.8 40.3 10.3 81.4 7.2 122.1C954 584 933.4 675.7 862 755.5c-34.6 38.7-80.3 73.3-128.7 97.6C682 878.5 629.4 892 581.1 892c-23.2 0-45.5-3.1-66.3-9.3-17.6-5.3-44.3-13.2-71.5-27.5-30.3-15.9-54.1-36.1-70.8-59.9-9.7-13.9-18.8-31.4-27.5-48.3-24-46.4-53.8-104.2-118.5-106.9-1.4-0.1-2.8-0.1-4.2-0.1-24.3 0-49.4 8.2-68.9 22.5-29 21.3-47.1 55.5-49.5 93.8-1.9 30.1-2.1 54.8-0.4 77.6 0.6 8.4 1.3 15.6 2.6 25.5 0.8 5.8 1.6 10.9 2.4 15.4-2.7 1.6-6.6 3.7-9.5 4.8-1.4-1-3.8-2.9-6.9-6.2-4.9-5.3-8.8-11-11.6-15.2-7.9-11.6-13.7-32.9-15.5-57-2.2-28.7 0.9-60.8 8.9-90.4 7.1-26.4 17.9-50.5 31.3-69.5 13.3-19 29-33 46.4-41.4 19.1-9.2 45.7-14.3 74.8-14.3 26.5 0 54.5 4.2 79 11.7 30.7 9.5 44 20.5 47.4 23.6 0.3 0.3 0.6 0.6 1 0.9 12.2 11.6 49.2 46.7 105.1 48.3 1.3 0 2.5 0.1 3.8 0.1 20.1 0 58.6-4.3 89.7-33.1 68.9-63.8 29.8-175.4 16.9-212.1-12.8-36.5-25.3-54.2-37.5-71.3-8.6-12.1-17.4-24.6-30.5-49.3-0.1-0.3-14.1-27.2-26.2-62.7-14.6-42.9-20.2-79.7-15.6-103.4 1-5.2 2.7-13.9 8.7-21.3 0.4-0.4 0.8-0.9 1.2-1.5 0.9-1.2 2.7-3.4 4-4.6 1.6-0.8 4.8-1.3 9-1.3m0-64c-11.6 0-23.1 1.8-32.8 5.4-16.9 6.3-27.7 20.9-31.4 25.3-15.9 19.5-20.1 40.1-21.9 49.7-16.4 85.6 48.1 208 48.1 208 33.7 64 46.5 61.5 64.2 112 8.5 24.4 38.1 108.7 0 144-16 14.8-38.6 16-46.2 16h-1.9c-33.1-1-57-25.3-64.2-32-33.4-31.2-102.5-52.6-170.1-52.6-36.6 0-72.7 6.3-102.5 20.6-125.6 60.5-151 271.5-96.3 352 8.8 12.9 33.3 49 68.6 50h1.5c20 0 38.2-11 46.5-16 14.8-8.9 28.5-17.3 32-32 2.4-10.3-2.4-14.2-6.5-45.1-1.1-8.2-1.6-14.1-2.2-21.6-1.1-15.7-1.6-36.9 0.5-68.9 1-16.2 7.5-34.5 23.5-46.3 10.7-7.8 23.2-10.1 31-10.1h1.6c41.1 1.7 59.2 75.2 96.2 128 52.6 75.1 137.9 100.5 176.4 112 27.6 8.2 55.9 12 84.6 12 122.8 0 249.4-69.7 328.4-158 143-159.9 137-388.2 63.7-533.6-18.4-36.5-85-151.7-174.4-169.8-22.7-4.6-44.3-6.9-64.7-6.9-56.7 0-104.1 17.8-141.5 52.9-3.5 3.3-8 5.1-12.7 5.1-1.5 0-3-0.2-4.5-0.6-5.9-1.4-10.6-5.6-12.4-11.4-3.3-9.7-5.7-19.1-8-28.2-2.4-11.4-6-22.5-10.7-33.1l-1.7-2.8c-10.7-16.1-35.9-24-60.2-24z"/>
    </svg>
  )
}

Vue.component('icon-stomach', Icon)
export default Icon

