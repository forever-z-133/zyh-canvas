/**
 * 首页
 */
import BlockBox from '../../comp/BlockBox';
import InlineBox from '../../comp/InlineBox';
import { app } from '../../libs/utils';

export default class Index extends BlockBox {
  constructor(style) {
    super(style);

    this.style.backgroundColor = 'pink';
    const inline = new InlineBox({
      width: 100,
      height: 200,
      left: 50,
      backgroundColor: 'red',
    });
    this.appendChild(inline);
    // for (var attr in inline.style) {
    //   console.log(attr, inline.style[attr])
    // }
  }
}