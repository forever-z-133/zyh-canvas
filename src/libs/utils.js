/**
 * 公共方法
 */

 // 全局变量
export const app = {
  data: {},
};

// 首字母大写
String.prototype.toFirstUpperCase = function() {
  return this.slice(0, 1).toUpperCase() + this.slice(1).toLowerCase();
}

// 数组是否为空
export const isEmpty = (obj) => {
  if (obj == void 0 || isNaN(obj)) return true;
  return Object.keys(obj).length < 1;
}

// 获取 canvas 字体大小
export const getFontSize = (ctx) => {
  return parseFloat(ctx.font.split(' ')[0]);
}

// 获取文本宽度
export const getTextWidth = (ctx, text) => {
  return ctx.measureText(text).width;
}

// 使用临时 canvas 绘制
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