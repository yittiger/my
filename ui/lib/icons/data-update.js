
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M896 578.7V242c0-39.6-23.4-76.6-64-108.2C753.6 72.8 611 32 448 32S142.4 72.8 64 133.8C23.4 165.4 0 202.4 0 242v476c0 116 200.6 210 448 210 67.7 0 131.8-7 189.3-19.6C676.8 959.3 738.6 992 808 992c119.3 0 216-96.7 216-216 0-88-52.6-163.6-128-197.3zM158.4 151.5c36.5-17.1 79.4-30.6 127.7-40.2C337.2 101.1 391.7 96 448 96s110.8 5.1 161.9 15.3c48.3 9.6 91.2 23.1 127.7 40.2 58.2 27.3 94.4 62 94.4 90.5s-36.2 63.3-94.4 90.5c-36.5 17.1-79.4 30.6-127.7 40.2C558.8 382.9 504.3 388 448 388s-110.8-5.1-161.9-15.3c-48.3-9.6-91.2-23.1-127.7-40.2C100.2 305.3 64 270.6 64 242s36.2-63.2 94.4-90.5zM64 350.2c78.4 61 221 101.8 384 101.8s305.6-40.8 384-101.8V398c0 28.6-36.2 63.3-94.4 90.5-36.5 17.1-79.4 30.6-127.7 40.2C558.8 538.9 504.3 544 448 544s-110.8-5.1-161.9-15.3c-48.3-9.6-91.2-23.1-127.7-40.2C100.2 461.3 64 426.6 64 398v-47.8z m0 156c78.4 61 221 101.8 384 101.8s305.6-40.8 384-101.8V558c0 1.1 0 2.2-0.2 3.3-7.8-0.9-15.8-1.3-23.8-1.3-88.2 0-164 52.9-197.6 128.6-0.2 0-0.3 0.1-0.5 0.1C558.8 698.9 504.3 704 448 704s-110.8-5.1-161.9-15.3c-48.3-9.6-91.2-23.1-127.7-40.2C100.2 621.3 64 586.6 64 558v-51.8zM448 864c-56.3 0-110.8-5.1-161.9-15.3-48.3-9.6-91.2-23.1-127.7-40.2C100.2 781.3 64 746.6 64 718v-51.8c78.4 61 221 101.8 384 101.8 50.7 0 99.4-4 144.8-11.2-0.6 6.3-0.8 12.7-0.8 19.2 0 25.9 4.5 50.7 12.9 73.7C555.2 859.2 502.5 864 448 864z m467.5 19.5C886.8 912.2 848.6 928 808 928c-37.7 0-73.3-13.6-101.2-38.6-2.2-1.9-4.3-3.9-6.3-6-14.2-14.2-25.3-30.8-32.8-48.8C660 816.3 656 796.5 656 776c0-11.2 1.2-22.2 3.5-32.9 6.2-28.1 20.2-53.8 41-74.6 2.7-2.7 5.5-5.3 8.4-7.8 19.5-16.8 42.6-28.2 67.5-33.5 10.3-2.2 20.9-3.3 31.7-3.3 32 0 62.5 9.8 88 28 6.9 4.9 13.4 10.4 19.5 16.5 28.6 28.8 44.4 67 44.4 107.6 0 40.6-15.8 78.8-44.5 107.5zM736.2 729.2c-2.5 2.5-0.7 6.8 2.8 6.8h33c2.2 0 4 1.8 4 4v152c0 2.2 1.8 4 4 4h56c2.2 0 4-1.8 4-4V740c0-2.2 1.8-4 4-4h33c3.6 0 5.3-4.3 2.8-6.8l-60.5-60.5c-6.2-6.2-16.4-6.2-22.6 0l-60.5 60.5z"/>
    </svg>
  )
}

Vue.component('icon-data-update', Icon)
export default Icon

