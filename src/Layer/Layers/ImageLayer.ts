import BaseLayer, { ILayerBaseData } from './BaseLayer'

interface IImageLayerData extends ILayerBaseData {
  backgroundImage?: string
}

const ImageLayerDefaultData: IImageLayerData = {
  top: 0,
  left: 0,
  width: 0,
  height: 0,
  backgroundImage: ''
}

class ImageLayer extends BaseLayer<IImageLayerData> {
  defaultData = ImageLayerDefaultData
  data = ImageLayerDefaultData

  render (ctx: CanvasContext): void {
  }
}
export default ImageLayer
