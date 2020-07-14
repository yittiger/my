import { extendOption } from '../util/fun';
/**
 * @function horPanel 水平布局
 * @param {*} $ 
 * @param {*} go 
 * @param {*} options 
 */
export default function($, go, options) {
  const defaultProps = {
    background: 'rgba(0, 0, 0, 0)',
    alignment: go.Spot.Center
  };
  const _options = extendOption(defaultProps, options);
  return $(
    go.Panel,
    go.Panel.Horizontal,
    _options.props,
    ..._options.parts,
    _options.events,
    ..._options.binding
  );
}
