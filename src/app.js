/**
 * 绘制插件初始入口
 */
import Home from '@/pages/Home/index';

export default class Main {
  constructor(canvas, ctx, width, height) {
    const MainPage = new Home({ width, height });

    (function loop() {
      ctx.clearRect(0, 0, width, height);
      MainPage.render(ctx);
      requestAnimationFrame(loop);
    })();
  }
}
