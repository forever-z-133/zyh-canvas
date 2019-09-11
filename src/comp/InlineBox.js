/**
 * 内联盒子
 */
import Sprite from '../base/Sprite';
export default class InlineBox extends Sprite {
  constructor(style) {
    super(style);
  }
  init(ctx) {
    this.x = this.parent ? this.parent.x : 0;
    this.y = this.parent ? this.parent.y : 0;
    let width = 0, height = 0;
    this.child.forEach(el => {
      width += el.width;
      height += el.height;
    });
    this.width = width;
    this.height = height;
  }
  customDraw(ctx) {
  }
}