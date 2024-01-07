import { LinkedList } from '@/utils/linked-list'

const linkedList = new LinkedList(1)

linkedList.appendToTail(2)
const thirdNode = linkedList.appendToTail(3)
linkedList.appendToTail(4)
linkedList.appendToTail(5)
linkedList.print()

const deleteMiddleNode = (node: typeof linkedList.head) => {
  const next = node.next
  if (!next) {
    throw new Error('deleteMiddleNode must be used on middle node!')
  }

  node.value = next.value
  node.next = next.next
}

deleteMiddleNode(thirdNode)
// Should be: 1 -> 2 -> 4 -> 5
linkedList.print()
