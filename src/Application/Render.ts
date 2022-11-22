import Stage from './Stage'

class Render {
  stage: Stage
  private _timer: number = NaN

  constructor (stage: Stage) {
    this.stage = stage

    this._loop = this._loop.bind(this)
    this.frame = this.frame.bind(this)

    this._loop()
  }

  private frame (): void {
    const elements = this.stage.elements

    if (elements.length < 1) return

    const ctx = this.stage.context
    const { width, height } = this.stage.options

    ctx.clearRect(0, 0, width, height)

    // console.group()
    elements.forEach(element => {
      element.render(ctx)
      // console.log(element)
    })
    // console.groupEnd()
  }

  private _loop (): void {
    this.frame()
    this._timer = requestAnimationFrame(this._loop)
  }

  start (): void {
    this._loop()
  }

  pause (): void {
    if (this._timer) {
      cancelAnimationFrame(this._timer)
    }
  }

  resume (): void {
    this._loop()
  }
}
export default Render
