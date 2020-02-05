import Sprite from '@/base/Sprite';

export default class TextNode extends Sprite {
  constructor(text, style) {
    super(style);
    this.innerText = text;
    this.outerText = text;
  }
  customDraw(ctx) {
    const { innerText, x, y } = this;
    const { color, fontSize, fontFamily } = this.style;
    ctx.font = `${fontSize} ${fontFamily}`;
    ctx.fillStyle = color;
    ctx.textBaseline = 'top';
    ctx.fillText(innerText, x, y);
  }
}
