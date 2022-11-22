import { BlockLayer } from '@/Layer/index'
import { addCanvasContextProxy } from './CanvasContextProxy'

interface ApplicationOptions {
  width: number
  height: number
  background?: string
}

const defaultOptions: ApplicationOptions = {
  width: 500,
  height: 500,
  background: 'transparent'
}

/**
 * 主入口
 */
class Stage {
  context: CanvasContext
  options: ApplicationOptions
  elements: Layer[] = []

  constructor (context: any, options?: ApplicationOptions) {
    this.context = addCanvasContextProxy(context)
    this.options = { ...defaultOptions, ...options }

    this.init()
  }

  init (): void {
    const { width, height, background } = this.options

    const bodyNode = new BlockLayer({ width, height, background })
    this.elements.push(bodyNode)
  }

  appendChild (element: Layer): void {
    this.elements.push(element)
  }

  removeChild (element: Layer): void {
    this.elements.push(element)
  }
}
export default Stage
