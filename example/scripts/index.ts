import { app, createCanvas, getContext } from '@/utils/index.js'
import Stage from '@/Application/Stage'
import Render from '@/Application/Render'
import { BlockLayer } from '@/Layer'

app.data.winW = window.innerWidth / 2
app.data.winH = window.innerHeight
const winW = app.data.winW
const winH = app.data.winH

const canvas = createCanvas()
const ctx = getContext(canvas, winW, winH)
document.body.append(canvas)

const stage = new Stage(ctx, { width: winW, height: winH, background: 'red' })
const render = new Render(stage)
console.log(stage)
console.log(render)

const box = new BlockLayer({ top: 20, left: 50, width: 50, height: 50, background: 'green' })
stage.appendChild(box)
