/**
 * 样式构造期
 */
import StyleConvert from './StyleConvert';
import defaultStyle from '../libs/defaultStyle.json';
export default function CSSStyleDeclaration(dom) {
  const sc = new StyleConvert();
  let obj = {};
  obj.convert = () => sc.convert(obj, dom);
  obj = new Proxy(obj, {
    set: function (target, key, value, receiver) {
      sc[key] = value;
      target[key] = value;
      return receiver;
    },
    get: function(target, key) {
      if (key in target) return target[key];
      return defaultStyle[key];
    }
  });
  return obj;
}