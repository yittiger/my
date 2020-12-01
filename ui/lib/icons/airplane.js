
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M947.424343 67.0037c3.888608 0 6.780136 0.398832 8.874002 0.997079 0.299124 1.296203 0.598247 2.891529 0.797663 4.885686 0.498539 6.381305-0.199416 17.94742-6.381305 36.692503-12.164362 36.692502-33.50185 70.393768-63.2148 100.206426L776.325609 320.859981c-19.542746 19.542746-27.619085 47.361246-21.337488 74.382083l108.881012 472.415969-34.498929 25.824343L648.300682 564.346641l-40.979942-74.481792-60.123856 60.123856-185.157546 185.157546c-18.146835 18.146835-25.226095 44.868549-18.445959 69.695813l31.108861 113.966115-20.340409 20.440117-57.332035-76.376241c-38.68666-51.44927-84.352872-97.115482-135.901851-135.702435l-76.077117-56.933203 19.941577-20.240701 113.866407 31.10886c6.181889 1.695034 12.563194 2.492697 18.944499 2.492698 19.143914 0 37.191042-7.478092 50.751314-21.038365l185.157546-185.157546 60.024148-60.024148-74.282375-40.979941L136.799221 198.418695l38.886076-38.886076 453.870302 108.482181c6.082181 1.495618 12.26407 2.193574 18.545667 2.193574 21.337488 0 41.378773-8.275755 56.434664-23.331646l110.177215-110.177215c29.912366-29.912366 62.716261-50.651607 100.405842-63.314508 15.753846-5.284518 26.223174-6.381305 32.305356-6.381305m0-63.813048c-15.753846 0-33.202726 3.190652-52.546057 9.571958-46.563583 15.654138-88.440896 41.877313-125.332814 78.76923L659.368257 201.709056c-2.991237 2.991237-7.07926 4.686271-11.266991 4.68627-1.196495 0-2.492697-0.099708-3.689192-0.398831l-475.606621-113.666992c-2.193574-0.697955-4.387147-0.997079-6.481013-0.997078-5.483934 0-10.569036 2.293281-15.454722 6.879844L53.543135 191.439143c-5.483934 5.483934-7.577799 11.765531-6.680428 19.642454 1.495618 7.777215 5.583642 13.659981 12.363778 17.44888l369.318014 203.703213-185.157547 185.257254c-1.495618 1.495618-3.589484 2.293281-5.683349 2.293282-0.697955 0-1.39591-0.099708-2.093866-0.299124l-136.599805-37.29075c-0.997079-0.498539-2.891529-0.797663-5.882765-0.797663-6.680428 0-12.26407 2.293281-16.55151 6.680429l-69.795521 70.593184c-4.985394 5.882765-7.178968 11.865239-6.680428 18.246543 1.196495 7.577799 4.187731 13.261149 9.571957 16.551509l113.168452 84.751704c46.663291 34.89776 88.141772 76.376241 123.13924 122.939825l85.050828 113.26816c4.387147 5.483934 10.070497 8.674586 17.44888 9.571957h1.495619c6.680428 0 12.26407-2.293281 16.551509-6.680428l69.895229-70.194353c6.381305-6.780136 8.275755-14.15852 5.882765-22.434275l-37.29075-136.699513c-0.797663-2.791821 0-5.68335 2.093866-7.777215L592.264849 595.05667l203.40409 369.716845c2.891529 6.281597 7.876923 10.070497 15.355014 11.566115 1.39591 0.498539 3.090944 0.797663 4.985395 0.797663 5.783057 0 10.469328-1.39591 13.759688-4.387147l93.326582-69.795521c8.275755-6.680428 11.266991-14.756767 8.774294-24.029601L817.106134 380.884129c-1.196495-5.384226 0.398832-10.967868 4.28744-14.856476l111.174294-110.974878c36.891918-36.891918 63.314508-78.769231 78.76923-125.332814 15.454722-46.663291 12.463486-82.55813-8.774294-107.784226-14.856475-12.463486-33.202726-18.745083-55.138461-18.745083z"/>
    </svg>
  )
}

Vue.component('icon-airplane', Icon)
export default Icon

