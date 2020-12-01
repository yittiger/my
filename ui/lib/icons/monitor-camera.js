
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M509.9 385.5c87.6 0 171.9 5.9 243.8 17 96.2 14.9 139.3 34.4 156.4 44.7l36.5 22c-2.9 3.3-6.2 6.2-9.9 8.6-0.5 0.4-1.1 0.7-1.7 1.1-32.6 20.7-53.8 54.7-58.2 93.1-9.1 79.3-50.3 152.8-116.1 207.2-8.1 6.7-16.5 13-25.1 19v-12.3l-0.7-209.9v-6.3l-1.2-6.2c-20.8-103-113.7-177.6-220.9-177.6-108.5 0-202.3 74.9-223.2 178.2l-1.3 6.3v226.5c-7.8-5.5-15.4-11.2-22.8-17.3-65.7-54-107-127.3-116.5-206.3-4.6-37.9-25.5-71.5-57.5-92-1.6-1.1-3.3-2.1-4.8-3.2-2.9-2-5.6-4.3-8-6.9l39.1-24.6c16.2-10.2 57.4-29.5 151.3-44.2 70.4-11.1 153.7-16.9 240.8-16.9m2.9 288.4c7.4 0 15.7 10.3 15.7 24.1s-8.3 24.1-15.7 24.1-15.7-10.3-15.7-24.1v-0.2c0-7.9 2.7-15.1 7.4-19.8 2.7-2.7 5.5-4.1 8.3-4.1m0.5-577.9C344 96 174.8 123.1 71.1 176.8c-41.9 21.7-68.4 64.6-69 111.8-0.6 46-1.3 105.5-0.7 150 0.5 36.9 18.7 71.4 49.1 92.2 2.1 1.5 4.3 2.9 6.5 4.3 15.9 10.2 26.3 27 28.5 45.8 23.6 196.3 205.7 349 427.3 349 222.4 0 405-153.6 427.6-350.6 2.2-19 12.8-36.1 29-46.4 0.7-0.5 1.5-0.9 2.2-1.4 32.2-20.9 51.3-56.9 51.3-95.3V290c0-47.9-26.8-91.7-69.4-113.6C849.2 122.6 681.2 96 513.3 96zM83.8 392.4c-2.3-23.4-1.8-82.7-1.5-115.6 0.1-12 7-23 17.8-28.3 96.8-47.8 258.3-70.6 416.8-70.6 165.8 0 328.5 25 410.4 72.5 9.9 5.7 15.9 16.2 15.9 27.6v114.3c-78.3-47.1-256.2-70.9-433.3-70.9-175.8 0.1-350.6 23.6-426.1 71z m429 457.5c-69.3 0-138.5-28.4-160.4-65.7V576.7c14.8-73.2 83.4-126.8 160.4-126.8S656.2 503 670.9 576l0.7 209.9c-21.9 37.2-89.5 64-158.8 64z m0-240c-44 0-79.8 39.4-79.7 88.1 0 48.7 35.7 88.1 79.7 88.1s79.7-39.4 79.7-88.1-35.8-88.1-79.7-88.1z"/>
    </svg>
  )
}

Vue.component('icon-monitor-camera', Icon)
export default Icon

