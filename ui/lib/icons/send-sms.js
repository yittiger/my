
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M960 275.5l-112-64.7V128c0-8.8-7.2-16-16-16H711.2c-22.5 0-44.5-5.9-64-17.1L543.4 35a64.158 64.158 0 0 0-64 0L375.7 94.8c-19.5 11.2-41.5 17.2-64 17.2H192c-8.8 0-16 7.2-16 16v82.1L64 274.8C24.4 297.7 0 339.9 0 385.7V928c0 35.3 28.7 64 64 64h896c35.3 0 64-28.7 64-64V386.3c0-45.7-24.4-88-64-110.8zM527.6 99.8l8.1 4.7c3.5 2.1 2.1 7.5-2 7.5h-44.4c-4.1 0-5.5-5.4-2-7.5l8.1-4.7c9.9-5.8 22.2-5.8 32.2 0zM240 184c0-4.4 3.6-8 8-8h528c4.4 0 8 3.6 8 8v374.5c0 5.7-3 11-8 13.9l-162.3 93.7c-5 2.9-11.1 2.9-16.1 0l-54.8-32c-19.9-11.6-44.4-11.7-64.3-0.2l-52.4 30.2c-5 2.9-11.1 2.9-16 0L248 570.5c-5-2.9-8-8.1-8-13.9V184zM64 388.7c0-22.7 12.1-43.8 31.7-55.3l80.3-47V522c0 3.1-3.3 5-6 3.5L68 466.7c-2.5-1.4-4-4.1-4-6.9v-71.1z m0 470.7V552c0-6.2 6.7-10 12-6.9l100 57.7 64 37 102.2 59c5.3 3.1 5.3 10.8 0 13.9l-102.2 59-64 37-100 57.6c-5.3 3.1-12-0.8-12-6.9zM893.4 928H127c-8.2 0-11.1-10.8-4-14.9l53-30.6 64-37 178.2-102.9 64-37 12-6.9c9.9-5.7 22.1-5.7 32 0l15.5 8.9 64 37 178.3 103 64 37 49.4 28.5c7.1 4.1 4.2 14.9-4 14.9z m66.6-66.5c0 6.2-6.7 10-12 6.9l-100-57.7-64-37-102.3-59.1c-5.3-3.1-5.3-10.8 0-13.9l102.3-59 64-37L948 547c5.3-3.1 12 0.8 12 6.9v307.6z m0-399.5c0 2.9-1.5 5.5-4 6.9l-102 58.4c-2.7 1.5-6-0.4-6-3.5V286.7l80.2 46.8C947.9 345 960 366 960 388.8V462zM704 232v48c0 4.4-3.6 8-8 8H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8zM704 360v48c0 4.4-3.6 8-8 8H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8zM704 488v48c0 4.4-3.6 8-8 8H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8z"/>
    </svg>
  )
}

Vue.component('icon-send-sms', Icon)
export default Icon

