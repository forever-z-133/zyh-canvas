/**
 * 块级盒子
 */
import Sprite from '../base/Sprite';
import { app } from '../libs/utils';
export default class BlockBox extends Sprite {
  constructor(style) {
    super(style);
  }
  init() {
    this.x = this.parent ? this.parent.x : 0;
    this.y = this.parent ? this.parent.y : 0;
    const _height = this.child.reduce((re, el) => re + el.height, 0);
    this.width = parseFloat(this.style.width) || app.data.winW;
    this.height = parseFloat(this.style.height) || _height;
  }
}