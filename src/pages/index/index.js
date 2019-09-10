/**
 * 首页
 */
import BlockBox from '../../comp/BlockBox';
import TextNode from '../../comp/TextNode';
export default class Index extends BlockBox {
  constructor(style) {
    super(style);
    this.style.backgroundColor = 'pink';
    const text = new TextNode('哈哈哈', {
      fontSize: '50px',
      backgroundColor: 'red',
    });
    this.addChild(text);
    this.addChild(new TextNode('120px', {
      color: 'white',
      borderWidth: '1px'
    }));
  }
}