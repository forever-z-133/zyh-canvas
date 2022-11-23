import { createId } from '../../utils/index.js'
import ParentComponent from '../ParentComponent'

class BlockComponent extends ParentComponent {
  id = ''
  tagName = 'BLOCK'

  constructor () {
    super()

    this.id = createId()
  }
}
export default BlockComponent
