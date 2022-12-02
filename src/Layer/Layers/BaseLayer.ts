
export interface ILayerBaseData {
  top: number
  left: number
  width: number
  height: number
}

const BaseLayerDefaultData = { top: 0, left: 0, width: 0, height: 0 }

class BaseLayer<T extends ILayerBaseData> {
  defaultData: T = BaseLayerDefaultData
  data: T = BaseLayerDefaultData

  constructor (initialData?: T) {
    const reallyData: T = Object.assign({}, this.defaultData, initialData)
    Object.keys(reallyData).forEach(key => {
      this.data[key] = reallyData[key]
    })
  }

  render (ctx: CanvasContext): void {}
}
export default BaseLayer
