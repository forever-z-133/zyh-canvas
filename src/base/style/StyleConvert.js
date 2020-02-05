import { returnNumber } from '@/utils';
import { addPrefix, one2four, one2three } from './tools';

/**
 * 样式计算中心
 * 即子元素与 padding 与 paddingLeft 等的转化计算过程
 */
export default class StyleConvert {
  convert(oldStyle, dom) {
    const newStyle = this;
    for (const attr in newStyle) {
      let newValue = newStyle[attr];
      let oldValue = oldStyle[attr];
      delete newStyle[attr];
      // 先拆，比如 padding 改变则 paddingLeft 改变
      // 再合，比如 paddingLeft 改变则 padding 改变
      if (attr === 'padding') {
        addPrefix(oldStyle, 'padding', one2four(newValue));
      } else if (attr === 'margin') {
        addPrefix(oldStyle, 'margin', one2four(newValue));
      } else if (attr === 'border') {
        addPrefix(oldStyle, 'margin', one2three(newValue));
      } else if (attr === 'background') {
      } else {
        dom[attr] = newValue;
      }
    }
  }
}
