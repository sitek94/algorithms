import {
  LinkedListNode,
  createLinkedList,
  printLinkedList,
} from '@/utils/linked-list'

const setup = () => createLinkedList([3, 5, 8, 5, 10, 2, 1])

/**
 * Partition a linked list around a value N, such that all nodes less than x come before all nodes greater than or equal to N.
 *
 * Assumptions
 * - Return a linked list
 * - Order of nodes doesn't matter
 * - Partition value will always be in the linked list
 *
 * Solution with Head and Tail pointers (see Excalidraw file with visualization)
 *
 * Time: O(n) - we have to visit every node
 * Space: O(1) - we're not creating any new data structures
 */
{
  const linkedList = setup()
  type Node = typeof linkedList.head

  const partition = (n: number, node: Node) => {
    let head = node
    let tail = node

    while (node) {
      let next = node.next

      if (node.value < n) {
        node.next = head
        head = node
      } else {
        tail.next = node
        tail = node
      }
      node = next!
    }

    // Close
    tail.next = undefined

    return head
  }

  const head = partition(5, linkedList.head)

  printLinkedList(head)
}

/**
 * Initial approach
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
