import {createLinkedList} from '@/utils/linked-list'

const values = [1, 2, 3, 4, 5, 6, 5, 7, 8, 9, 0, 10, 11]
const size = values.length
const setup = () => createLinkedList(values)

/**
 * Assumptions:
 * - passing k=1 would return the last element, k=2 the second to last and so on.
 */

/**
 * Iterative approach
 *
 * In this approach I move the kth pointer ahead by the value of k. If it's impossible to move
 * it this far it means that linked list is too short for given k value.
 *
 * Once I've got kth element, I start moving both `current` and `kth` forward until kth reaches end
 * of the linked list. At that point I return current which effectively is kth element to last one.
 *
 * Time: O(n)
 * Space: O(1)
 */
{
  const {head} = setup()

  const returnKthToLast = (k: number, linkedListHead?: typeof head) => {
    let kthNode = linkedListHead
    for (let i = 0; i < k; i++) {
      if (!kthNode) {
        throw new Error(`LinkedList is shorter than k!`)
      }
      kthNode = kthNode.next
    }

    let current = linkedListHead
    while (kthNode) {
      current = current!.next
      kthNode = kthNode.next
    }

    return current
  }

  const secondToLast = returnKthToLast(2, head)

  console.log({secondToLast})
}

/**
 * Iterative approach when size of linked list is known (trivial)
 */
{
  const {head} = setup()

  const returnKthToLast = (k: number, linkedListHead?: typeof head) => {
    let current = linkedListHead

    for (let i = 0; i < size - k; i++) {
      current = current!.next
    }

    return current
  }

  const secondToLast = returnKthToLast(2, head)

  console.log({secondToLast})
}

/**
 * Recursive approach
 */
{
  const linkedList = setup()
  type Node = typeof linkedList.head

  const returnKthToLast = (k: number, head: Node) => {
    let result: Node | undefined

    const findKth = (node?: Node): number => {
      if (!node) {
        return 0
      }

      const index = findKth(node.next)
      const newIndex = index + 1

      if (newIndex === k) {
        result = node
      }

      return newIndex
    }

    findKth(head)

    return result
  }

  const secondToLast = returnKthToLast(2, linkedList.head)

  console.log({secondToLast})
}

/**
 * Recursive approach (a bit hacky)
 */
{
  const linkedList = setup()
  type Node = typeof linkedList.head

  const returnKthToLast = (k: number, head: Node) => {
    const findKth = (node?: Node): number => {
      if (!node) {
        return 0
      }

      const index = findKth(node.next)
      const newIndex = index + 1

      if (newIndex === k) {
        throw node
      }

      return newIndex
    }

    try {
      findKth(head)
    } catch (node) {
      return node
    }
  }

  const secondToLast = returnKthToLast(2, linkedList.head)

  console.log({secondToLast})
}
