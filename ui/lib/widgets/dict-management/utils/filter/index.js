import {stampToDate} from './dateFormat';

const formatFuns = {};
let store = {}
formatFuns.stampToDate = stampToDate;

export function addFormatFilter(name) {
  formatFuns[name] = (val, errorValue) => {
    const map = store.state.dict.optionMap[name] || {};
    const defaultValue = errorValue !== undefined ? errorValue : val
    return (map[val] || {}).label || defaultValue;
  }
}

export default function (vueStore) {
  store = vueStore
  return formatFilter
}

/**
 * 会在main.js全局注册名称为formatFilter
 * @param {*} val
 * @param {*} format
 * @param {*} args
 * @example
 *   {{stamp|formatFilter('stampToDate', ['yyyy-MM-dd'])}}
 */
export function formatFilter(val, format, args = []) {
  if (format && formatFuns[format]) {
    return formatFuns[format](val, ...args);
  } else {
    return val;
  }
}
