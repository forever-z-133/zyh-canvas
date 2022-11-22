import BaseComponent from './BaseComponent'

class ParentComponent extends BaseComponent {
  children: Component[]

  appendChild (element: Component): void {
    this.children.push(element)
  }

  cloneNode (deep?: boolean): Component {
    const newComp = new ParentComponent()
    Object.keys(this).forEach(key => {
      newComp[key] = this[key]
    })
    if (!deep) newComp.children.length = 0

    return newComp
  }

  insertBefore (element: Component, reference: Component): void {
    const index = this.children.findIndex(e => e === reference)
    if (index > -1) this.children.splice(index - 1, 0, element)
  }

  removeChild (element: Component): void {
    const index = this.children.findIndex(e => e === element)
    if (index > -1) this.children.splice(index, 1)
  }

  replaceChild (element: Component, reference: Component): void {
    const index = this.children.findIndex(e => e === reference)
    if (index > -1) this.children.splice(index, 1, element)
  }
}
export default ParentComponent
