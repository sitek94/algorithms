import {
  LinkedListNode,
  createLinkedList,
  printLinkedList,
} from '@/utils/linked-list'
import {inspect} from 'util'
// import {inspect} from 'bun'

const setup = () => createLinkedList([3, 5, 8, 5, 10, 2, 1])

/**
 * Assumptions
 * - Return two linked lists
 */
{
  const linkedList = setup()
  type Node = typeof linkedList.head

  const partition = (n: number, head: Node) => {
    let left = new LinkedListNode<number | null>(null)
    let right = new LinkedListNode<number | null>(null)

    let leftCurrent = left
    let rightCurrent = right

    let current: Node | undefined = head

    while (current) {
      if (current.value < n) {
        leftCurrent.next = current
        if (leftCurrent.value === null) {
          leftCurrent.value = current.value
        } else {
          leftCurrent = current
        }
      } else {
        rightCurrent.next = current
        if (rightCurrent.value === null) {
          rightCurrent.value = current.value
        } else {
          rightCurrent = current
        }
      }
      current = current.next
    }

    leftCurrent.next = undefined
    rightCurrent.next = undefined

    return {
      left,
      right,
    }
  }

  const {left, right} = partition(5, linkedList.head)

  left && printLinkedList(left)
  right && printLinkedList(right)
}

/**
 * Approach 2, same assumptions, simpler implementation
 */
{
  const linkedList = setup()
  type Node = typeof linkedList.head

  const partition = (n: number, node: Node) => {
    let head = node
    let tail = node
    let current = node

    while (current) {
      if (current.value < n) {
        let temp = current.next
        current.next = head
        head = current
        current = temp!
      } else {
        tail.next = current
        tail = current
        current = current.next!
      }
    }

    // Close 
    tail.next = undefined

    return head
  }

  const head = partition(5, linkedList.head)

  printLinkedList(head)
}
