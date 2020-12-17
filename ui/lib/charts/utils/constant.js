/**
 * 默认主题
 * @type {string}
 */
export const DEFAULT_THEME = {
  color: ['#37A2DA', '#32C5E9', '#67E0E3', '#9FE6B8', '#FFDB5C', '#ff9f7f',
    '#fb7293', '#E062AE', '#E690D1', '#e7bcf3', '#9d96f5', '#8378EA', '#96BFFF']
}

/**
 * 值轴位置映射
 * @type {{x: string[], y: string[]}}
 */
export const SERIES_LABEL_POSITION = {
  x: ['left', 'right'],
  y: ['bottom', 'top']
}

/**
 * 饼图默认 labelLine
 * @type {{length2: number, length: number, smooth: number}}
 */
export const PIE_LABEL_LINE = {
  smooth: 0.2
}
/**
 * 饼图玫瑰类目默认样式
 * @type {{shadowBlur: number, shadowColor: string}}
 */
export const PIE_ROSE_ITEM_STYLE = {
  shadowBlur: 10,
  shadowColor: 'rgba(0, 0, 0, 0.5)'
}
