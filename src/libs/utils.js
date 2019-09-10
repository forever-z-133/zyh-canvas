/**
 * 公共方法
 */

export const app = {
  data: {},
};
String.prototype.toFirstUpperCase = function() {
  return this.slice(0, 1).toUpperCase() + this.slice(1).toLowerCase();
}
export const isEmpty = (obj) => {
  for (var i in obj) return false;
  return true;
}
export const getFontSize = (ctx) => {
  return parseFloat(ctx.font.split(' ')[0]);
}
export const getTextWidth = (ctx, text) => {
  return ctx.measureText(text).width;
}
export const useTempCanvas = (() => {
  const canvas = document.createElement('canvas');
  return function(raw_ctx, func) {
    const w = canvas.width = raw_ctx.canvas.width;
    const h = canvas.height = raw_ctx.canvas.height;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, w, h);
    func && func(ctx, raw_ctx);
    raw_ctx.drawImage(canvas, 0, 0, w, h);
  }
})()