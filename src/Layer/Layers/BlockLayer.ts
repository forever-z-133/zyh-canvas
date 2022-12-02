
interface BlockLayerData {
  top?: number
  left?: number
  width?: number
  height?: number
  background?: string
  backgroundColor?: string
  opacity?: number
  borderRadius?: number
}

class BlockLayer implements Layer {
  top = 0
  left = 0
  width = 0
  height = 0
  background = 'transparent'

  constructor (data: BlockLayerData) {
    const { top = 0, left = 0, width = 0, height = 0, background = 'transparent' } = data || {}

    this.top = top
    this.left = left
    this.width = width
    this.height = height
    this.background = background
  }

  render (ctx: CanvasContext): void {
    const { top, left, width, height, background } = this

    if (!width || !height) return

    ctx.setFillStyle(background)
    ctx.fillRect(top, left, width, height)
  }
}
export default BlockLayer
