/**
 * 首页
 */
import BlockBox from '../../comp/BlockBox';
import TextNode from '../../comp/TextNode';
import InlineBox from '../../comp/InlineBox';
import { app } from '../../libs/utils';
const { data: { winW } } = app;

export default class Index extends BlockBox {
  constructor(style) {
    super(style);

    this.style.backgroundColor = 'pink';
    const inline = new InlineBox({
      fontSize: '50px',
      backgroundColor: 'red',
    });
    // inline.addChild(new TextNode('xx'));
    this.addChild(inline);
    // this.addChild(new TextNode('120px', {
    //   color: 'white',
    //   borderWidth: '5px'
    // }));

    // let direction = 10;
    // setInterval(() => {
    //   var x = parseFloat(inline.left) + direction;
    //   if (x >= winW - inline.width || x <= 0) direction = -direction;
    //   inline.left = x;
    // }, 50);
  }
}