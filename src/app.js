/**
 * 绘制插件初始入口
 */
import Index from './pages/index/index';

export default class Main {
  constructor(canvas, ctx, width, height) {
    const MainPage = new Index({ width, height });
    
    (function loop() {
      ctx.clearRect(0, 0, width, height);
      MainPage.render(ctx);
      requestAnimationFrame(loop);
    })();
  }
}