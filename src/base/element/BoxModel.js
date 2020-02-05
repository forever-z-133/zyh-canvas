import Sprite from '@/base/element/Sprite';

export default class Box extends Sprite {
  constructor(style) {
    this.clientWidth = 0;
    this.clientHeight = 0;
    this.offsetWidth = 0;
    this.offsetHeight = 0;
    this.scrollWidth = 0;
    this.scrollHeight = 0;
  }
  customDraw() {
    
  }
}
