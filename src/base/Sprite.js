/**
 * 所有元素节点的基础
 * 即 dom 对象
 */
import CSSStyleDeclaration from '@/base/style/CSSStyleDeclaration';
import StyleRender from '@/base/style/StyleRender';
import { useTempCanvas } from '@/utils';
let domId = 0;

export default class Sprite {
  constructor(style) {
    this.domId = ++domId;
    this.style = new CSSStyleDeclaration(this);

    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;

    this.children = [];
    this.parent = void 0;

    for (const attr in style) {
      this.style[attr] = style[attr];
    }
  }
  render(ctx) {
    this._drawNode(ctx, this);
    const { children = [] } = this;
    children.forEach(el => el._drawNode(ctx, el));
  }
  _drawNode(raw_ctx, node) {
    const { parent } = node;
    if (!parent) {
      // 直接绘制
      node.draw(raw_ctx);
    } else {
      // 有父元素的会被裁剪
      useTempCanvas(raw_ctx, ctx => {
        node.draw(ctx);
        ctx.globalCompositeOperation = 'destination-in';
        parent.draw(ctx);
        ctx.globalCompositeOperation = 'source-over';
      });
    }
  }
  draw(ctx) {
    // 将 padding 转为 paddingLeft 等
    this.style.convert(this);

    // 各式公共样式的处理，如背景/边框等
    StyleRender(ctx, this.style, this);

    // 各节点特有的绘制方案
    if (this.customDraw) {
      this.customDraw(ctx);
    }
  }
  appendChild(el) {
    el.parent = this;
    this.children.push(el);
  }
  removeChild(el) {
    this.child = this.children.filter(child => child !== el);
  }
}
