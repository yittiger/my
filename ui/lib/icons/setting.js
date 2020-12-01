
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M512 352c42.7 0 82.9 16.6 113.1 46.9C655.4 429.1 672 469.3 672 512s-16.6 82.9-46.9 113.1C594.9 655.4 554.7 672 512 672s-82.9-16.6-113.1-46.9C368.6 594.9 352 554.7 352 512s16.6-82.9 46.9-113.1S469.3 352 512 352m0-64c-123.7 0-224 100.3-224 224s100.3 224 224 224 224-100.3 224-224-100.3-224-224-224zM658.7 91.7c2.6 0 5.2 0.3 7.8 1 22.7 5.7 47.1 15.8 70.6 29.4 23.5 13.6 44.5 29.6 60.8 46.4 8.4 8.7 11.2 21.2 7.4 32.7-17.6 53-15.3 99.3 6.8 137.5s61 63.4 115.7 74.7c11.9 2.4 21.3 11.2 24.6 22.7 6.4 22.5 9.8 48.7 9.8 75.9 0 27.2-3.4 53.4-9.8 75.9-3.3 11.6-12.8 20.3-24.6 22.7-54.7 11.2-93.6 36.4-115.7 74.7-22.1 38.3-24.4 84.6-6.8 137.5 3.8 11.5 1 24-7.4 32.7-16.2 16.8-37.3 32.9-60.8 46.4-23.5 13.6-47.9 23.7-70.6 29.4-2.6 0.6-5.2 1-7.8 1-9.2 0-18-4-24.2-10.9-37.1-41.7-78.3-62.9-122.5-62.9s-85.4 21.2-122.5 62.9c-6.2 6.9-15 10.9-24.2 10.9-2.6 0-5.2-0.3-7.8-1-22.7-5.7-47.1-15.8-70.6-29.4-23.5-13.6-44.5-29.6-60.8-46.4-8.4-8.7-11.2-21.2-7.4-32.7 17.6-53 15.3-99.3-6.8-137.5-22.1-38.3-61-63.4-115.7-74.7-11.9-2.4-21.3-11.2-24.6-22.7-6.4-22.5-9.8-48.7-9.8-75.9 0-27.2 3.4-53.4 9.8-75.9 3.3-11.6 12.8-20.3 24.6-22.7 54.7-11.2 93.6-36.4 115.7-74.7s24.4-84.6 6.8-137.5c-3.8-11.5-1-24 7.4-32.7 16.2-16.8 37.3-32.9 60.8-46.4 23.5-13.6 47.9-23.7 70.6-29.4 2.6-0.6 5.2-1 7.8-1 9.2 0 18 4 24.2 10.9 37.1 41.7 78.3 62.9 122.5 62.9s85.4-21.2 122.5-62.9c6.2-6.9 15-10.9 24.2-10.9m0-64c-27.2 0-53.5 11.5-72 32.4-24.5 27.6-49.6 41.4-74.7 41.4s-50.1-13.8-74.7-41.4c-18.5-20.9-44.9-32.4-72-32.4-7.8 0-15.6 0.9-23.3 2.9-57.9 14.4-120.5 50.6-161.9 93.5-24.9 25.8-33.4 63.3-22.1 97.3 23.3 70.1-2.3 114.5-74.7 129.3-35.1 7.2-63.3 33.3-73.2 67.8-16.4 57.3-16.4 129.6 0 187 9.9 34.5 38.1 60.6 73.2 67.8 72.3 14.9 97.9 59.3 74.7 129.3-11.3 34.1-2.8 71.5 22.1 97.3 41.4 42.9 104.1 79 161.9 93.5 7.7 1.9 15.5 2.9 23.3 2.9 27.2 0 53.5-11.5 72-32.4 24.5-27.6 49.6-41.4 74.7-41.4s50.1 13.8 74.7 41.4c18.5 20.9 44.9 32.4 72 32.4 7.8 0 15.6-0.9 23.3-2.9 57.9-14.4 120.5-50.6 161.9-93.5 24.9-25.8 33.4-63.3 22.1-97.3-23.3-70.1 2.3-114.5 74.7-129.3 35.1-7.2 63.4-33.3 73.2-67.8 16.4-57.3 16.4-129.6 0-187-9.9-34.5-38.1-60.6-73.2-67.8-72.3-14.9-97.9-59.3-74.7-129.3 11.3-34.1 2.8-71.5-22.1-97.3C802.5 81.2 739.9 45 682 30.6c-7.7-2-15.5-2.9-23.3-2.9z"/>
    </svg>
  )
}

Vue.component('icon-setting', Icon)
export default Icon

