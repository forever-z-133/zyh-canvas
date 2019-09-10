import Sprite from '../base/Sprite';
import {
  getFontSize,
  getTextWidth
} from '../libs/utils';
export default class TextNode extends Sprite {
  constructor(text, style) {
    super(style);
    this.text = text;
  }
  init(ctx) {
    const { fontSize, fontFamily } = this.style;
    ctx.font = `${fontSize} ${fontFamily}`;
    this.width = getTextWidth(ctx, this.text);
    this.height = getFontSize(ctx);
    this.x = this.parent ? this.parent.x : 0;
    this.y = this.parent ? this.parent.y : 0;
  }
  customDraw(ctx) {
    const { text, x, y } = this;
    const { color, fontSize, fontFamily } = this.style;
    ctx.font = `${fontSize} ${fontFamily}`;
    ctx.fillStyle = color;
    ctx.textBaseline = 'top'
    ctx.fillText(text, x, y);
  }
}