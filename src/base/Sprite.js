/**
 * 所有元素节点的基础
 */
import CSSStyleDeclaration from './CSSStyleDeclaration';
import StyleRender from './StyleRender';
import { useTempCanvas } from '../libs/utils';
let domId = 0;
export default class Sprite {
  constructor(style) {
    this.domId = ++domId;
    this.style = new CSSStyleDeclaration(this);

    this.inited = false;

    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;

    this.child = [];
    this.parent = void 0;
    
    for (const attr in style) {
      this.style[attr] = style[attr];
    }
  }
  init() {
    this.x = this.parent ? this.parent.x : 0;
    this.y = this.parent ? this.parent.y : 0;
    const [ width, height ] = this.child.reduce((re, el) => {
      re[0] += el.width; re[1] += el.height; return re;
    }, [0, 0]);
    this.width = this.style.width || width;
    this.height = this.style.height || height;
  }
  draw(ctx) {
    // 绘制本节点
    useTempCanvas(ctx, this._draw.bind(this));

    // 绘制子节点
    if (this.child.length) {
      this.child.forEach(el => el.draw(ctx));
    }
  }
  _draw(ctx) {
    if (!this.inited) {
      this.inited = true;
      this.child.forEach(el => {
        el.init && el.init(ctx);
      });
      this.init && this.init(ctx);
    }

    // 将 padding 转为 paddingLeft 等
    this.style.convert(this);
    
    // 各式公共样式的处理，如背景/边框等
    StyleRender(ctx, this.style, this);

    // 各节点特有的绘制方案
    if (this.customDraw) {
      this.customDraw(ctx);
    }
  }
  addChild(el) {
    el.parent = this;
    this.child.push(el);
    // 部分样式被子级继承
    ['fontSize', 'textAlign'].forEach(attr => {
      el.style[attr] = this.style[attr];
    });
  }
  removeChild(el) {
    this.child = this.child.filter(item => item !== el);
  }
}