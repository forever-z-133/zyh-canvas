
export const addCanvasContextProxy = (context: any): CanvasContext => {
  // const proxy = new Proxy(context, {
  //   get: function (target, propKey: string, receiver) {
  //     console.log(`getting ${propKey}!`)
  //     console.log(`getting ${propKey}!`, target[propKey])
  //     console.log(`getting ${propKey}!`, Reflect.get(target, propKey, receiver))

  //     return Reflect.get(target, propKey, receiver)
  //   },
  //   set: function (target, propKey: string, value, receiver) {
  //     console.log(`setting ${propKey}!`)
  //     return Reflect.set(target, propKey, value, receiver)
  //   }
  // })
  const proxy = context

  proxy.setFillStyle = (fillStyle: string) => {
    context.fillStyle = fillStyle
  }

  return proxy
}
