// 全局变量
export const app = {
  data: {}
};

/****************************************
 * canvas 相关功能
 ***************************************/
export function createCanvas() {
  return document.createElement('canvas');
}
export function getContext(canvas, width, height) {
  canvas = canvas || createCanvas();
  canvas.width = width || 750;
  canvas.height = height || 1334;
  return canvas.getContext('2d');
}
export const useTempCanvas = (() => {
  const canvas = createCanvas();
  return function(raw_ctx, func) {
    const w = raw_ctx.canvas.width;
    const h = raw_ctx.canvas.height;
    const ctx = getContext(canvas, w, h);
    ctx.clearRect(0, 0, w, h);
    ctx.save();
    func && func(ctx, raw_ctx);
    raw_ctx.drawImage(canvas, 0, 0, w, h);
    ctx.restore();
  };
})();

// 获取 canvas 字体大小
export const getFontSize = ctx => {
  return parseFloat(ctx.font.split(' ')[0]);
};

// 获取文本宽度
export const getTextWidth = (ctx, text) => {
  return ctx.measureText(text).width;
};

/****************************************
 * 常用方法
 ***************************************/

// 是否为空
export const isEmpty = obj => {
  if (obj === null || obj === undefined) return true;
  return Object.keys(obj).length < 1;
};

// 返回数字
export function returnNumber(...args) {
  for (let value of args) {
    value = parseFloat(value);
    if (!isNaN(value)) return value;
  }
}

// 连字符
export function hyphenate(str) {
  return str.replace(/\B([A-Z])/g, '-$1').toLowerCase();
}
// 驼峰
export function camelize(str) {
  return str.toLowerCase().replace(/-(\w)/g, (_, s) => (s ? s.toUpperCase() : ''));
}
// 首字母大写
export function toFirstUpperCase() {
  return this.slice(0, 1).toUpperCase() + this.slice(1).toLowerCase();
}
// 首字母小写
export function toFirstLowerCase() {
  return this.slice(0, 1).toLowerCase() + this.slice(1);
}
