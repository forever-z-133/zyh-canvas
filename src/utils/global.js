/* 测试用 */
window.test = function (length, ...args) {
  if (!this.xxx || this.xxx < length) {
    console.log(...args)
    this.xxx = ++this.xxx || 1
  }
}
