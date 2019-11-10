/**
 * 样式构造期
 * 即 dom.style 对象
 */
import StyleConvert from './StyleConvert';
import defaultStyle from '../libs/defaultStyle.json';

export default function CSSStyleDeclaration(dom) {
  const sc = new StyleConvert();
  let style = {};
  style.convert = () => sc.convert(style, dom);
  style = new Proxy(style, {
    set: function (target, key, value, receiver) {
      sc[key] = value;  // 外显结果，比如给予 padding，但其实并未处理
      if (value != target[key]) {
        target[key] = value; // 临时赋值，在下个渲染周期进行处理，比如给的 target.padding='0' 会转为 sc.padding='0px 0px 0px 0px'
      }
      return receiver;
    },
    get: function(target, key) {
      if (key in target) return target[key];
      return defaultStyle[key];
    }
  });
  return style;
}