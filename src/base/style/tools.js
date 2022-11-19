import { camelize } from '@/utils/index.js'

// 诸如 padding 转为 t/r/b/l 四个值
export function one2four (str) {
  const temp = str.split(' ')
  let top, right, bottom, left
  if (temp.length === 1) [top, right = top, bottom = top, left = top] = temp
  if (temp.length === 2) [top, right, bottom = top, left = right] = temp
  if (temp.length === 3) [top, right, bottom, left = right] = temp
  if (temp.length === 4) [top, right, bottom, left] = temp
  return { top, right, bottom, left }
}

export function one2three (str, pre, styles) {
  const temp = str.split(' ')
  let [width, style, color] = temp
  style = style || styles[pre + style]
  color = color || styles[pre + color]
  return { width, style, color }
}

// 将 left 改为 paddingLeft 之类的
// addPrefix(styles, 'padding', { left: 0 }); // { paddingLeft: 0 }
export function addPrefix (styles, pre, data) {
  for (const attr in data) {
    if (pre === attr) continue
    const value = data[attr]
    const newAttr = camelize(`${pre}-${attr}`)
    styles[newAttr] = value
  }
  return data
}
