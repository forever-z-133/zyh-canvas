
declare global {
  export interface Layer {
    width: number
    height: number
    render(context: CanvasContext): void
  }

  export interface Component {
    id: string
    tagName: string
  }
}

export {}
