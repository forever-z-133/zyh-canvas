import BaseLayer, { ILayerBaseData } from './BaseLayer'

interface ITextLayerData extends ILayerBaseData {
  text?: string
}

const TextLayerDefaultData: ITextLayerData = {
  top: 0,
  left: 0,
  width: 0,
  height: 0,
  text: ''
}

class TextLayer extends BaseLayer<ITextLayerData> {
  defaultData = TextLayerDefaultData
  data = TextLayerDefaultData

  render (ctx: CanvasContext): void {
  }
}
export default TextLayer
