/**
 * 样式绘制中心
 */
export default function StyleRender (ctx, style, dom) {
  const { x, y, width, height } = dom
  ctx.rect(x, y, width, height)
  // 背景
  ctx.fillStyle = style.backgroundColor
  ctx.fill()
  // 边框
  const borderWidth = parseFloat(style.borderWidth) || 0
  if (borderWidth) { // lineWidth 设 0 也还是 1，所以只能这么搞了
    ctx.strokeStyle = style.borderColor
    ctx.lineWidth = borderWidth
    ctx.stroke()
  }
}
