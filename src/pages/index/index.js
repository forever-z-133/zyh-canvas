/**
 * 首页
 */
import BlockBox from '../../comp/BlockBox';
import TextNode from '../../comp/TextNode';
import InlineBox from '../../comp/InlineBox';
export default class Index extends BlockBox {
  constructor(style) {
    super(style);
    this.style.backgroundColor = 'pink';
    const inline = new InlineBox({
      fontSize: '50px',
      backgroundColor: 'red',
    });
    inline.addChild(new TextNode('xx'));
    this.addChild(inline);
    // this.addChild(new TextNode('120px', {
    //   color: 'white',
    //   borderWidth: '5px'
    // }));
    setInterval(() => {
      inline.x = parseFloat(inline.x) + 1;
    }, 50);
  }
}