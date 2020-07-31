import {merge} from '../utils/lib'
import defaultImage from '$ui/assets/img/placeholder.png'

const defaultIcon = 'F M927.51552691 838.62786695c0 47.2488403-13.46404948 ' +
  '87.64098874-40.51681552 121.42577956S827.28315862 1010.66849916 ' +
  '789.25968555 1010.66849916H234.74031445c-38.14814019 ' +
  '0-70.68625975-16.95472896-97.73902584-50.61485265-27.05276608-33.78479083-40.' +
  '51681555-74.3016064-40.51681552-121.42577956 0-36.77680182 1.74533977-71.55892963 ' +
  '5.48535346-104.22171634 3.74001377-32.66278669 10.47203848-65.57490761 ' +
  '20.44540848-98.73636283 9.97336998-33.03678807 22.68941672-61.46089255 ' +
  '38.02347305-85.02297911s35.77946482-42.88549093 61.08689117-57.72087878c' +
  '25.30742634-14.83538786 54.47953352-22.44008246 87.39165447-22.44008245 ' +
  '56.72354179 55.47687053 124.41779055 83.15297224 203.20741339 83.15297225' +
  's146.48387165-27.67610172 203.20741345-83.15297225c32.91212094 0 61.95956' +
  '103 7.48002749 87.39165445 22.44008245 25.30742634 14.83538786 45.62816768 ' +
  '34.15879219 61.08689115 57.72087878 15.33405633 23.68675371 28.05010309 ' +
  '51.86152393 38.02347306 85.02297911 9.97336998 33.03678807 16.83006183 ' +
  '65.948909 20.44540846 98.73636283 3.4906795 32.66278669 5.23601926 67.4449' +
  '1451 5.23601923 104.22171634zM688.27931447 86.38643594C737.02416025 135.131' +
  '28176 761.33424957 193.84949755 761.33424957 262.66575043s-24.31008934 127.534' +
  '46866-73.0549351 176.27931446S580.8162529 512 512 512s-127.53446866-24.310089' +
  '34-176.27931447-73.05493511S262.66575043 331.48200331 262.66575043 262.665750' +
  '43s24.31008934-127.53446866 73.0549351-176.27931449S443.1837471 13.33150084 512 ' +
  '13.33150084s127.53446866 24.31008934 176.27931447 73.0549351z'


export const normal = {
  node: {
    // 节点形状
    figure: 'Circle',
    // 宽度，默认自适应
    width: undefined,
    // 高度，默认自适应
    height: undefined,
    // 背景颜色
    fill: '#c6e5ff',
    // 边框样式
    stroke: '#8ecafd',
    // 文本/icon颜色
    color: '#599ad1',
    // 形状外的文本颜色
    textColor: '#595959',
    // 边框厚度
    strokeWidth: 2,

    // 鼠标经过时背景颜色
    hoverFill: '#e7f3fc',
    // 鼠标经过时边框颜色
    hoverStroke: '#8ecafd',
    // 鼠标经过时文本和icon颜色
    hoverColor: '#599ad1',

    // 选中时背景颜色
    selectedFill: '#8ecafd',
    // 选中时边框颜色
    selectedStroke: '#8ecafd',
    // 选中时文本和icon颜色
    selectedColor: '#fff',

    // 禁用时背景颜色
    disabledFill: '#efefef',
    // 禁用时边框颜色
    disabledStroke: '#dfdfdf',
    // 禁用时文本和icon颜色
    disabledColor: '#c3c3c3',
    // 默认图标
    geometryString: defaultIcon,
    // 默认图片
    imageSource: defaultImage
  },
  link: {
    color: '#a3b1bf',
    hoverColor: '#788694',
    selectedColor: '#4d5761',
    disabledColor: '#dfdfdf',
    strokeWidth: 2
  },
  group: {
    figure: 'RoundedRectangle',
    fill: 'rgba(3,160,250,0.03)',
    stroke: 'rgba(3,160,250,0.4)',
    color: 'rgba(3,160,250)',
    strokeWidth: 1
  },
  tooltip: {
    // 形状
    figure: 'RoundedRectangle',
    // 背景颜色
    fill: 'rgba(0,0,0,0.7)',
    // 文本颜色
    color: '#fff',
    // 描边
    stroke: 'rgba(0,0,0,0)'
  }

}

export const color1 = merge({}, normal, {
  node: {
    fill: '#f8c7c5',
    stroke: '#9f504d',
    color: '#9f504d',

    hoverFill: '#fbe8e7',
    hoverStroke: '#9f504d',
    hoverColor: '#9f504d',

    selectedFill: '#9f504d',
    selectedStroke: '#9f504d',
    selectedColor: '#fff'
  }
})

export const color2 = merge({}, normal, {
  node: {
    fill: '#9ca7ae',
    stroke: '#2f4554',
    color: '#2f4554',

    hoverFill: '#ced2d4',
    hoverStroke: '#2f4554',
    hoverColor: '#2f4554',

    selectedFill: '#2f4554',
    selectedStroke: '#2f4554',
    selectedColor: '#fff'
  }
})

export const color3 = merge({}, normal, {
  node: {
    fill: '#b8d7db',
    stroke: '#61a0a8',
    color: '#61a0a8',

    hoverFill: '#e7ebec',
    hoverStroke: '#61a0a8',
    hoverColor: '#61a0a8',

    selectedFill: '#61a0a8',
    selectedStroke: '#61a0a8',
    selectedColor: '#fff'
  }
})

export const color4 = merge({}, normal, {
  node: {
    fill: '#e7dccb',
    stroke: '#ca8622',
    color: '#ca8622',

    hoverFill: '#f5eee5',
    hoverStroke: '#ca8622',
    hoverColor: '#ca8622',

    selectedFill: '#ca8622',
    selectedStroke: '#ca8622',
    selectedColor: '#fff'
  }
})
