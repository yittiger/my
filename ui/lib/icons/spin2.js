
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M480 384c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z m0-64c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160-71.6-160-160-160zM259.1 85c3-0.7 5.6 2.1 4.7 5.1l-13.3 42.8L197 305.5c-0.9 2.9-4.7 3.8-6.8 1.5l-41.1-44.4c-7.2-7.8-20-6.5-25.5 2.6-10.2 16.9-19.2 34.6-27 52.9C75 369.3 64 423.8 64 480s11 110.7 32.7 161.9c15.8 37.5 36.9 72.1 62.7 103.2 10.2 12.3 9.6 30.4-1.3 42.1-13.2 14.2-35.8 13.5-48.1-1.4C41.3 702.8 0 596.2 0 480c0-100.3 30.8-193.4 83.4-270.4 4.2-6.1 3.5-14.4-1.5-19.8l-44.7-48.4c-2.1-2.3-0.9-5.9 2.1-6.6l145-32.8 74.8-17zM1001.4 271.8c3-0.6 5.5 2.4 4.5 5.3L956 417.4l-25.6 72.1c-1 2.9-4.8 3.6-6.8 1.3l-28.1-33-118.2-138.7c-2-2.3-0.7-6 2.3-6.5l53.7-9.9c10.7-2 16.4-13.9 11.1-23.5-18.8-34.2-42.4-65.4-70.3-93.4-38.2-38.2-82.7-68.2-132.3-89.2C590.7 75 536.2 64 480 64c-41.2 0-81.5 5.9-120.2 17.6-15.3 4.6-31.7-2.9-38.3-17.5-7.9-17.6 1.4-38.2 19.9-43.7C385.2 7.1 431.8 0 480 0c192 0 357.7 112.8 434.5 275.7 3.1 6.5 10.2 10.2 17.3 8.9l69.6-12.8zM917.7 544c20.5 0 35.6 18.9 31.2 38.9C901.8 798.6 709.8 960 480 960c-29.3 0-58-2.6-85.9-7.7-7.2-1.3-14.3 2.5-17.4 9.1l-26.9 59.1c-1.3 2.8-5.1 3.2-6.9 0.7L262 907.8l-50-70.2c-1.8-2.5-0.2-6 2.9-6.3l36.7-3.5 187.7-18.1c3.1-0.3 5.3 2.8 4 5.6l-25.2 55.3c-4.5 9.9 1.9 21.3 12.7 22.5 16.2 1.9 32.6 2.8 49.1 2.8 56.2 0 110.7-11 161.9-32.7 49.5-20.9 94-51 132.3-89.2 38.2-38.2 68.2-82.7 89.2-132.3 10-23.6 17.7-47.9 23.1-72.7 3.3-14.5 16.3-25 31.3-25z"/>
    </svg>
  )
}

Vue.component('icon-spin2', Icon)
export default Icon

