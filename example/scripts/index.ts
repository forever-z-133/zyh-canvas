import App from '@/app.js'
import { app, createCanvas, getContext } from '@/utils/index.js'

import '@/utils/global.js'

/**
 * 页面初始入口
 */

app.data.winW = 750
app.data.winH = 1334
const winW = app.data.winW
const winH = app.data.winH

const canvas = createCanvas()
const ctx = getContext(canvas, winW, winH)
document.body.append(canvas)

new App(canvas, ctx, winW, winH)
