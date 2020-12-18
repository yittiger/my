<template>
  <Box class="my-dv-header1"
       default-width="100%"
       default-height="auto"
       top="0px"
       left="0px"
       v-bind="$attrs"
       v-on="$listeners">
    <svg width="1920px" height="147px" :style="svgStyle">
      <path opacity="0.1"
            d="M1184.9,145.2H735.3c-1.7,0-3-1.4-3-3v-29.4c0-1.7,1.3-3,3-3h449.6c1.7,0,3,1.3,3,3v29.4 C1187.9,143.9,1186.5,145.2,1184.9,145.2z"/>
      <path :fill="color"
            d="M9,4.9v22.8h175.5l22.1-22.8H9z M132.3,25.7h-4.9l3.3-3.4h4.9L132.3,25.7z M136.6,25.7l6.2-6.4h4.9l-6.2,6.4 H136.6z M145.8,25.7l9-9.3h4.9l-9,9.3H145.8z M154.6,25.7l12.6-12.9h4.9l-12.6,12.9H154.6z M163.9,25.7L179,10.1h4.9l-15.1,15.6 H163.9z M177.9,25.7H173L191.1,7h4.9L177.9,25.7z"/>
      <polygon :fill="color" points="6,4.9 9,4.9 9,27.7 4.1,27.7"/>
      <rect x="3" y="4.9" :fill="color" width="6" height="57"/>
      <polygon
        :fill="color"
        points="491.6,44.2 273.8,44.2 251.8,22.2 206.5,22.2 192.9,35.9 4.8,35.9 4.8,34.9 192.4,34.9 206.1,21.2 252.2,21.2 274.2,43.2 491.6,43.2"/>
      <path :fill="color"
            d="M154.5,42.6H6.8c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h147.8c0.3,0,0.5,0.2,0.5,0.5S154.8,42.6,154.5,42.6z"/>
      <path
        :fill="color"
        d="M713.7,126.5c-0.1,0-0.3,0-0.4-0.1l-57.7-57.7H393l-8.8,8.8H267.5l-25.9-25.9H6c-0.3,0-0.5-0.2-0.5-0.5 s0.2-0.5,0.5-0.5h236.1L268,76.4h115.8l8.8-8.8h263.5l58,58c0.2,0.2,0.2,0.5,0,0.7C714,126.4,713.8,126.5,713.7,126.5z"/>
      <polygon opacity="0.6" :fill="color" points="252.3,61.8 4.8,61.8 5.5,53.2 243.8,53.2"/>
      <polygon opacity="0.8" :fill="color" points="580.7,68 628.5,68 688.9,7.6 641,7.6"/>
      <polygon opacity="0.5" :fill="color" points="310.6,28.8 594.1,28.8 612,10.8 328.5,10.8"/>
      <path
        :fill="color"
        d="M687.4,116.1c-0.1,0-0.3,0-0.4-0.1l-47.8-47.8c-0.2-0.2-0.2-0.5,0-0.7s0.5-0.2,0.7,0l47.8,47.8 c0.2,0.2,0.2,0.5,0,0.7C687.6,116,687.5,116.1,687.4,116.1z"/>
      <path
        :fill="color"
        d="M669.3,82.6c-0.4,0-0.8-0.1-1.1-0.4l-12.7-12.7h-19.8c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5h21l13.6,13.6 c0.6,0.6,0.6,1.5,0,2.1C670.1,82.5,669.7,82.6,669.3,82.6z"/>
      <path :fill="color"
            d="M612.6,11.3H216c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h396.6c0.3,0,0.5,0.2,0.5,0.5S612.8,11.3,612.6,11.3z "/>

      <polygon :fill="color" points="575.7,49.8 571.3,49.9 615.2,6 803.8,6 803.8,9 616.4,9"/>
      <polygon :fill="color" points="544.4,49.8 574.9,49.8 613.5,11.2 582.9,11.2"/>
      <polygon :fill="color" points="787.2,13.5 753.2,13.5 745.7,6 779.7,6"/>
      <polygon :fill="color" points="814.5,15.7 788,15.7 778.3,6 804.9,6"/>
      <polygon opacity="0.7" :fill="color" points="859.4,12 827.5,12 815.8,0.3 847.7,0.3"/>
      <polygon :fill="color" points="1052.9,17.7 865.4,17.7 853.7,6 1065.3,6"/>
      <polygon opacity="0.2" :fill="color" points="802,0.3 1119.3,0.3 1125.3,6.3 795.6,6.3"/>
      <polygon opacity="0.7" :fill="color" points="1058.7,12 1090.6,12 1102.3,0.3 1070.4,0.3"/>
      <polygon opacity="0.25" :fill="color" points="432.2,37.3 557.2,37.3 562.9,31.6 437.9,31.6"/>
      <polygon opacity="0.25" :fill="color" points="1486.9,37.3 1361.8,37.3 1356.1,31.6 1481.2,31.6"/>
      <path
        :fill="color"
        d="M332.6,45.2h-59.2l-13.6-13.6c-0.6-0.6-0.6-1.5,0-2.1c0.6-0.6,1.5-0.6,2.1,0l12.7,12.7h58 c0.8,0,1.5,0.7,1.5,1.5S333.5,45.2,332.6,45.2z">
        <animate attributeName="fill" :values="`${color};transparent`" dur="1.2" begin="0.4"
                 repeatCount="indefinite"></animate>
      </path>
      <path
        :fill="color"
        d="M1713.4,4.9l22.1,22.8H1911V4.9H1713.4z M1742.1,25.7L1724,7h4.9l18.1,18.7H1742.1z M1751.2,25.7l-15.1-15.6 h4.9l15.1,15.6H1751.2z M1760.6,25.7L1748,12.7h4.9l12.6,12.9H1760.6z M1769.4,25.7l-9-9.3h4.9l9,9.3H1769.4z M1778.6,25.7 l-6.2-6.4h4.9l6.2,6.4H1778.6z M1787.7,25.7l-3.3-3.4h4.9l3.3,3.4H1787.7z"/>
      <polygon :fill="color" points="1915.9,27.7 1911,27.7 1911,4.9 1914,4.9"/>
      <rect x="1911" y="4.9" :fill="color" width="6" height="57"/>
      <polygon
        :fill="color"
        points="1646.2,44.2 1428.4,44.2 1428.4,43.2 1645.8,43.2 1667.8,21.2 1713.9,21.2 1727.6,34.9 1915.2,34.9 1915.2,35.9 1727.1,35.9 1713.5,22.2 1668.2,22.2"/>
      <path
        :fill="color"
        d="M1913.3,42.6h-147.8c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h147.8c0.3,0,0.5,0.2,0.5,0.5 S1913.5,42.6,1913.3,42.6z"/>
      <path
        :fill="color"
        d="M1206.3,126.5c-0.1,0-0.3,0-0.4-0.1c-0.2-0.2-0.2-0.5,0-0.7l58-58h263.5l8.8,8.8H1652l25.9-25.9H1914 c0.3,0,0.5,0.2,0.5,0.5s-0.2,0.5-0.5,0.5h-235.7l-25.9,25.9h-116.7l-8.8-8.8h-262.6l-57.7,57.7 C1206.5,126.4,1206.4,126.5,1206.3,126.5z"/>
      <polygon :fill="color" points="1667.7,61.8 1915.3,61.8 1914.5,53.2 1676.3,53.2"/>
      <polygon :fill="color" points="1339.3,68 1291.5,68 1231.1,7.6 1279,7.6"/>
      <polygon opacity="0.4" :fill="color" points="1609.4,28.8 1325.9,28.8 1308,10.8 1591.5,10.8"/>
      <path :fill="color"
            d="M1232.6,116.1c-0.1,0-0.3,0-0.4-0.1c-0.2-0.2-0.2-0.5,0-0.7l47.8-47.8c0.2-0.2,0.5-0.2,0.7,0s0.2,0.5,0,0.7 l-47.8,47.8C1232.9,116,1232.8,116.1,1232.6,116.1z"/>
      <path :fill="color"
            d="M1250.7,82.6c-0.4,0-0.8-0.1-1.1-0.4c-0.6-0.6-0.6-1.5,0-2.1l13.6-13.6h21c0.8,0,1.5,0.7,1.5,1.5 s-0.7,1.5-1.5,1.5h-19.8l-12.7,12.7C1251.5,82.5,1251.1,82.6,1250.7,82.6z"/>
      <path :fill="color"
            d="M1704,11.3h-396.6c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5H1704c0.3,0,0.5,0.2,0.5,0.5S1704.3,11.3,1704,11.3z"/>
      <polygon :fill="color" points="1344.3,49.8 1303.6,9 1116.2,9 1116.2,6 1304.8,6 1346.5,47.7"/>
      <polygon :fill="color" points="1374.8,49.8 1344.3,49.8 1305.9,11.3 1336.4,11.3"/>
      <polygon :fill="color" points="1132.8,13.5 1166.8,13.5 1174.3,6 1140.3,6"/>
      <polygon :fill="color" points="1105.5,15.7 1132,15.7 1141.7,6 1115.1,6"/>
      <path
        :fill="color"
        d="M1646.6,45.2h-59.2c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5h58l12.7-12.7c0.6-0.6,1.5-0.6,2.1,0 c0.6,0.6,0.6,1.5,0,2.1L1646.6,45.2z">
        <animate attributeName="fill" :values="`${color};transparent`" dur="1.2" begin="0.4"
                 repeatCount="indefinite"></animate>
      </path>
      <rect x="727.7" y="117.8" class="st1" opacity="0.3" :fill="color" width="3.8" height="20.2"/>
      <rect x="1188.3" y="117.8" opacity="0.3" :fill="color" width="3.8" height="20.2"/>
      <path
        :fill="color"
        d="M734.6,111.2h6.6v-3h-6.6c-2.5,0-4.5,2-4.5,4.5v29.4c0,2.5,2,4.5,4.5,4.5h6.6v-3h-6.6c-0.8,0-1.5-0.7-1.5-1.5 v-29.4C733.1,111.9,733.8,111.2,734.6,111.2z"/>
      <path
        :fill="color"
        d="M1186.8,112.7v29.4c0,0.8-0.7,1.5-1.5,1.5h-6.6v3h6.6c2.5,0,4.5-2,4.5-4.5v-29.4c0-2.5-2-4.5-4.5-4.5h-6.6v3 h6.6C1186.2,111.2,1186.8,111.9,1186.8,112.7z"/>
      <polygon :fill="color" points="529.3,94.2 511.5,94.2 489,71.7 506.8,71.7">
        <animate attributeName="fill" :values="`${color};transparent`" dur="1.1" begin="1.0"
                 repeatCount="indefinite"></animate>
      </polygon>
      <polygon :fill="color" points="555,94.2 537.2,94.2 514.7,71.7 532.5,71.7">
        <animate attributeName="fill" :values="`${color};transparent`" dur="1.1" begin="0.8"
                 repeatCount="indefinite"></animate>
      </polygon>
      <polygon :fill="color" points="579.4,94.2 561.5,94.2 539.1,71.7 556.9,71.7">
        <animate attributeName="fill" :values="`${color};transparent`" dur="1.1" begin="0.6"
                 repeatCount="indefinite"></animate>
      </polygon>
      <polygon :fill="color" points="605,94.2 587.2,94.2 564.8,71.7 582.6,71.7">
        <animate attributeName="fill" :values="`${color};transparent`" dur="1.1" begin="0.4"
                 repeatCount="indefinite"></animate>
      </polygon>
      <polygon :fill="color" points="629,94.2 611.2,94.2 588.8,71.7 606.6,71.7">
        <animate attributeName="fill" :values="`${color};transparent`" dur="1.1" begin="0.2"
                 repeatCount="indefinite"></animate>
      </polygon>
      <polygon points="654.7,94.2 636.9,94.2 614.5,71.7 632.3,71.7">
        <animate attributeName="fill" :values="`${color};transparent`" dur="1.1" begin="0.1"
                 repeatCount="indefinite"></animate>
      </polygon>
      <polygon :fill="color" points="1390.7,94.2 1408.5,94.2 1431,71.7 1413.2,71.7">
        <animate attributeName="fill" :values="`${color};transparent`" dur="1.1" begin="1" repeatCount="indefinite">
        </animate>
      </polygon>
      <polygon :fill="color" points="1365,94.2 1382.8,94.2 1405.3,71.7 1387.5,71.7">
        <animate attributeName="fill" :values="`${color};transparent`" dur="1.1" begin="0.8"
                 repeatCount="indefinite"></animate>
      </polygon>
      <polygon :fill="color" points="1340.6,94.2 1358.5,94.2 1380.9,71.7 1363.1,71.7">
        <animate attributeName="fill" :values="`${color};transparent`" dur="1.1" begin="0.6"
                 repeatCount="indefinite"></animate>
      </polygon>
      <polygon :fill="color" points="1315,94.2 1332.8,94.2 1355.2,71.7 1337.4,71.7">
        <animate attributeName="fill" :values="`${color};transparent`" dur="1.1" begin="0.4"
                 repeatCount="indefinite"></animate>
      </polygon>
      <polygon :fill="color" points="1291,94.2 1308.8,94.2 1331.2,71.7 1313.4,71.7">
        <animate attributeName="fill" :values="`${color};transparent`" dur="1.1" begin="0.2"
                 repeatCount="indefinite"></animate>
      </polygon>
      <polygon :fill="color" points="1265.3,94.2 1283.1,94.2 1305.5,71.7 1287.7,71.7">
        <animate attributeName="fill" :values="`${color};transparent`" dur="1.1" begin="0.1"
                 repeatCount="indefinite"></animate>
      </polygon>

      <rect x="749.4" y="122.1" :fill="color" width="8.7" height="11.5">
        <animate attributeName="fill" :values="`transparent;${color}`" dur="1.7428491551961136s" begin="1.6"
                 repeatCount="indefinite"></animate>
      </rect>
      <rect x="764.7" y="122.1" :fill="color" width="8.7" height="11.5">
        <animate attributeName="fill" :values="`transparent;${color}`" dur="1.7428491551961136s" begin="1.5"
                 repeatCount="indefinite"></animate>
      </rect>
      <rect x="780.1" y="122.1" :fill="color" width="8.7" height="11.5">
        <animate attributeName="fill" :values="`transparent;${color}`" dur="1.7428491551961136s" begin="1.4"
                 repeatCount="indefinite"></animate>
      </rect>
      <rect x="795.4" y="122.1" :fill="color" width="8.7" height="11.5">
        <animate attributeName="fill" :values="`transparent;${color}`" dur="1.7428491551961136s" begin="1.3"
                 repeatCount="indefinite"></animate>
      </rect>
      <rect x="1117.4" y="122.1" :fill="color" width="8.7" height="11.5">
        <animate attributeName="fill" :values="`transparent;${color}`" dur="1.7428491551961136s" begin="1.3"
                 repeatCount="indefinite"></animate>
      </rect>
      <rect x="1132.7" y="122.1" :fill="color" width="8.7" height="11.5">
        <animate attributeName="fill" :values="`transparent;${color}`" dur="1.7428491551961136s" begin="1.4"
                 repeatCount="indefinite"></animate>
      </rect>
      <rect x="1148.1" y="122.1" :fill="color" width="8.7" height="11.5">
        <animate attributeName="fill" :values="`transparent;${color}`" dur="1.7428491551961136s" begin="1.5"
                 repeatCount="indefinite"></animate>
      </rect>
      <rect x="1163.4" y="122.1" :fill="color" width="8.7" height="11.5">
        <animate attributeName="fill" :values="`transparent;${color}`" dur="1.7428491551961136s" begin="1.6"
                 repeatCount="indefinite"></animate>
      </rect>
      <rect x="810.7" y="120.2" :fill="color" width="8.7" height="15.4">
        <animate attributeName="fill" :values="`transparent;${color}`" dur="1.7428491551961136s" begin="1.2"
                 repeatCount="indefinite"></animate>
      </rect>
      <rect x="826.1" y="120.2" :fill="color" width="8.7" height="15.4">
        <animate attributeName="fill" :values="`transparent;${color}`" dur="1.7428491551961136s" begin="1.1"
                 repeatCount="indefinite"></animate>
      </rect>
      <rect x="841.4" y="120.2" :fill="color" width="8.7" height="15.4">
        <animate attributeName="fill" :values="`transparent;${color}`" dur="1.7428491551961136s" begin="1.0"
                 repeatCount="indefinite"></animate>
      </rect>
      <rect x="856.7" y="120.2" :fill="color" width="8.7" height="15.4">
        <animate attributeName="fill" :values="`transparent;${color}`" dur="1.7428491551961136s" begin="0.9"
                 repeatCount="indefinite"></animate>
      </rect>
      <rect x="872.1" y="120.2" class="st1" :fill="color" width="8.7" height="15.4">
        <animate attributeName="fill" :values="`transparent;${color}`" dur="1.7428491551961136s" begin="0.8"
                 repeatCount="indefinite"></animate>
      </rect>

      <rect x="887.4" y="118.2" :fill="color" width="8.7" height="19.4">
        <animate attributeName="fill" :values="`transparent;${color}`" dur="1.7428491551961136s" begin="0.7"
                 repeatCount="indefinite"></animate>
      </rect>

      <rect x="902.7" y="118.2" :fill="color" width="8.7" height="19.4">
        <animate attributeName="fill" :values="`transparent;${color}`" dur="1.7428491551961136s" begin="0.6"
                 repeatCount="indefinite"></animate>
      </rect>

      <rect x="918.1" y="118.2" :fill="color" width="8.7" height="19.4">
        <animate attributeName="fill" :values="`transparent;${color}`" dur="1.7428491551961136s" begin="0.5"
                 repeatCount="indefinite"></animate>
      </rect>

      <rect x="933.4" y="118.2" :fill="color" width="8.7" height="19.4">
        <animate attributeName="fill" :values="`transparent;${color}`" dur="1.7428491551961136s" begin="0.4"
                 repeatCount="indefinite"></animate>
      </rect>

      <rect x="948.7" y="118.2" :fill="color" width="8.7" height="19.4">
        <animate attributeName="fill" :values="`transparent;${color}`" dur="1.7428491551961136s" begin="0.3"
                 repeatCount="indefinite"></animate>
      </rect>

      <rect x="964.1" y="118.2" :fill="color" width="8.7" height="19.4">
        <animate attributeName="fill" :values="`transparent;${color}`" dur="1.7428491551961136s" begin="0.3"
                 repeatCount="indefinite"></animate>
      </rect>

      <rect x="979.4" y="118.2" :fill="color" width="8.7" height="19.4">
        <animate attributeName="fill" :values="`transparent;${color}`" dur="1.7428491551961136s" begin="0.4"
                 repeatCount="indefinite"></animate>
      </rect>


      <rect x="994.7" y="118.2" :fill="color" width="8.7" height="19.4">
        <animate attributeName="fill" :values="`transparent;${color}`" dur="1.7428491551961136s" begin="0.5"
                 repeatCount="indefinite"></animate>
      </rect>

      <rect x="1010.1" y="118.2" :fill="color" width="8.7" height="19.4">
        <animate attributeName="fill" :values="`transparent;${color}`" dur="1.7428491551961136s" begin="0.6"
                 repeatCount="indefinite"></animate>
      </rect>

      <rect x="1025.4" y="118.2" :fill="color" width="8.7" height="19.4">
        <animate attributeName="fill" :values="`transparent;${color}`" dur="1.7428491551961136s" begin="0.7"
                 repeatCount="indefinite"></animate>
      </rect>

      <rect x="1056.1" y="120.2" :fill="color" width="8.7" height="15.4">
        <animate attributeName="fill" :values="`transparent;${color}`" dur="1.7428491551961136s" begin="0.8"
                 repeatCount="indefinite"></animate>
      </rect>

      <rect x="1040.7" y="120.2" :fill="color" width="8.7" height="15.4">
        <animate attributeName="fill" :values="`transparent;${color}`" dur="1.7428491551961136s" begin="0.9"
                 repeatCount="indefinite"></animate>
      </rect>

      <rect x="1071.4" y="120.2" :fill="color" width="8.7" height="15.4">
        <animate attributeName="fill" :values="`transparent;${color}`" dur="1.7428491551961136s" begin="1.0"
                 repeatCount="indefinite"></animate>
      </rect>

      <rect x="1086.7" y="120.2" :fill="color" width="8.7" height="15.4">
        <animate attributeName="fill" :values="`transparent;${color}`" dur="1.7428491551961136s" begin="1.1"
                 repeatCount="indefinite"></animate>
      </rect>

      <rect x="1102.1" y="120.2" :fill="color" width="8.7" height="15.4">
        <animate attributeName="fill" :values="`transparent;${color}`" dur="1.7428491551961136s" begin="1.2"
                 repeatCount="indefinite"></animate>
      </rect>


    </svg>
    <div class="my-dv-header1__content" :style="svgStyle">
      <slot></slot>
    </div>
  </Box>
</template>

<script>
  import Header from '../../mixins/Header'


  export default {
    name: 'MyDvHeader1',
    mixins: [Header]
  }
</script>

<style lang="scss">
  @import "../../style/vars";


  @include b(dv-header1) {
    @include e(content) {
      position: absolute;
      width: 100%;
      top: 0;
      height: 147px;
      line-height: 120px;
      text-align: center;
      font-size: 50px;
      font-weight: 600;
      text-shadow: $--dv-shadow;
    }
  }
</style>

