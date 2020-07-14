import { extendOption } from './util/fun';
import { typeMap } from './panel/index';
/**
 * @function node 节点定义
 * @param {*} $
 * @param {*} go
 * @param {*} options
 */
export default function($, go, options) {
  const defaultProps = {
    background: 'rgba(0, 0, 0, 0)',
    cursor: 'pointer',
    selectionAdorned: false
  };
  const _options = extendOption(defaultProps, options);
  const type = typeMap[_options.type] || _options.type || 'Auto'
  return $(
    go.Node,
    type,
    _options.props,
    _options.events,
    ..._options.parts,
    ..._options.binding
  );
}
