import BaseLayer, { ILayerBaseData } from './BaseLayer'

interface IBlockLayerData extends ILayerBaseData {
  backgroundColor?: string
  opacity?: number
  borderRadius?: string
}

const BlockLayerDefaultData: IBlockLayerData = {
  top: 0,
  left: 0,
  width: 0,
  height: 0,
  backgroundColor: 'transparent',
  opacity: 1,
  borderRadius: 'none'
}

class BlockLayer extends BaseLayer<IBlockLayerData> {
  defaultData = BlockLayerDefaultData
  data = BlockLayerDefaultData

  render (ctx: CanvasContext): void {
    const { top, left, width, height, backgroundColor } = this.data

    if (!width || !height) return

    ctx.setFillStyle(backgroundColor)
    ctx.fillRect(top, left, width, height)
  }
}
export default BlockLayer
