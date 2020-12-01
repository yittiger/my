
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M989.7 510.8l-202.3-101c-10.8-5.4-17.7-16.5-17.7-28.6V172.7c0-26.7-16.6-50.6-41.6-59.9L550.5 46.3c-24.2-9-50.8-9-74.9 0.1l-176.9 66.8c-24.9 9.4-41.4 33.2-41.4 59.9v207.1c0 12.1-6.9 23.2-17.7 28.6l-204 101.9C13.9 521.6 0.1 543.8 0.2 568.1l0.5 226c0 23.2 12.6 44.5 32.9 55.8l223.8 124.6 1.2 0.7c18.9 10.5 41.9 10.4 60.8-0.2l2-1.1L497 873.2c9.9-5.7 22.1-5.6 32 0.1l176.7 102.5c18.9 10.7 42 10.8 61 0.3l3-1.7L992.4 851c20.4-11.3 33-32.8 33-56l-0.3-226.9c0-24.3-13.7-46.5-35.4-57.3zM321 192l115.3 46.1c27 10.8 44.7 36.9 44.7 66v163c0 5.9-6.2 9.8-11.6 7.2L339 409.5c-10.9-5.4-17.7-16.5-17.8-28.6L321 192z m-63.7 703.4L82.5 809.6c-10.9-5.4-17.9-16.5-17.9-28.7l-0.4-189.5L217.9 668c24.1 12 39.4 36.7 39.4 63.6v163.8z m64-274.3c-20.1 10.1-43.7 10-63.8 0l-0.2-0.1-149.1-75 149.1-74.4 16.8-8.4c9.2-4.6 20-4.5 29.1 0.3l18.1 9.4 129.8 64.3c5.8 2.9 6 11.1 0.2 14.2l-130 69.7z m141.9 203.8l-141.8 70.6-0.8-163.6c-0.1-27 15.1-51.8 39.2-63.9l108.8-54.5c5.3-2.7 11.6 1.2 11.6 7.1l0.8 175.6c0 12.1-6.9 23.2-17.8 28.7zM385 144l128-48 128 48-103 38.6c-16.1 6-33.8 6-49.9 0L385 144z m320 48l0.6 187.8c0 12.2-6.8 23.3-17.7 28.7l-131.4 65.7c-5.3 2.7-11.6-1.2-11.6-7.2V304.1c0-29.1 17.7-55.2 44.7-66L705 192z m0.7 710.3l-143.8-77.2c-10.4-5.6-16.9-16.4-16.9-28.2v-176c0-5.9 6.3-9.8 11.6-7.2l109.3 54.6c24 12 39.2 36.5 39.3 63.4l0.5 170.6z m-2-280.5l-129.2-70.5c-5.7-3.1-5.5-11.3 0.3-14.2l131-65.3 16.1-8.5c9.1-4.8 19.9-4.9 29.1-0.3l18.7 9.3L916.9 546l-146.2 76.4c-21.1 11-46.2 10.8-67-0.6z m66 279.4l-0.6-169.1c-0.1-27 15.1-51.7 39.3-63.8L961 592v188.7c0 11.9-6.6 22.7-17 28.3l-174.3 92.2z"/>
    </svg>
  )
}

Vue.component('icon-components', Icon)
export default Icon

