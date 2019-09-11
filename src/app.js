import Main from './main';
import { app } from './libs/utils';

/**
 * 页面初始入口
 */

window.test = function(length, ...args) {
  if (!this.xxx || this.xxx < length) {
    console.log(...args);
    this.xxx = ++this.xxx || 1;
  }
}

const canvas = document.createElement('canvas');
const winW = canvas.width = 750;
const winH = canvas.height = 1334;
const ctx = canvas.getContext('2d');
document.body.append(canvas);

app.data.winW = winW;
app.data.winH = winH;

new Main(canvas, ctx, winW, winH);