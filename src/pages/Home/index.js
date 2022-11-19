/**
 * 首页
 */
import BlockBox from '@/comp/BlockBox.js'
import InlineBox from '@/comp/InlineBox.js'

export default class Index extends BlockBox {
  constructor (style) {
    super(style)

    this.style.backgroundColor = 'pink'
    const inline = new InlineBox({
      width: 100,
      height: 200,
      backgroundColor: 'red'
    })
    this.appendChild(inline)
  }
}
