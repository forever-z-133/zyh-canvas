
class BlockLayer implements Layer {
  width = NaN
  height = NaN
  background = 'transparent'

  constructor (style: Style) {
    const { width, height, background } = style || {}

    this.width = width
    this.height = height
    this.background = background
  }

  render (ctx: CanvasContext): void {
    const { width, height, background } = this

    if (!width || !height) return

    ctx.setFillStyle(background)
    ctx.fillRect(0, 0, width, height)
  }
}
export default BlockLayer
