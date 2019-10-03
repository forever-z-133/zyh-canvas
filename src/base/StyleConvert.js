/**
 * 样式计算中心
 */
export default class StyleConvert {
  convert(oldStyle, dom) {
    const newStyle = this;
    for (const attr in newStyle) {
      const newValue = newStyle[attr];
      const oldValue = oldStyle[attr];
      delete newStyle[attr];
      if (attr === 'padding') {
        this.addPrefix(oldStyle, 'padding', this.one2four(newValue));
      } if (attr === 'left') {
        newValue = parseFloat(newValue);
        oldValue = parseFloat(oldValue);
        dom.x += newValue - oldValue;
        dom.child.forEach(el => {
          el.x += newValue - oldValue;
        });
      } else {
        oldStyle[attr] = newValue;
        dom.child.forEach(el => {
          // el['x'] = newValue;
        });
      }
      window.test(20, dom.x, attr, newStyle, oldStyle);
      delete newStyle[attr];
    }
  }
  // 诸如 padding 转为 t/r/b/l 四个值
  one2four(str) {
    const temp = str.split(' ');
    let top, right, bottom, left;
    if (temp.length === 1) [top, right = top, bottom = top, left = top] = temp;
    if (temp.length === 2) [top, right, bottom = top, left = right] = temp;
    if (temp.length === 3) [top, right, bottom, left = right] = temp;
    if (temp.length === 4) [top, right, bottom, left] = temp;
    return { top, right, bottom, left };
  }
  // 将 left 改为 paddingLeft 之类的
  addPrefix(style, pre, data) {
    if (!pre || !data) throw new Error('缺少相应入参');
    for (const attr in data) {
      const newAttr = pre + attr.toFirstUpperCase();
      style[newAttr] = data[attr];
    }
  }
}