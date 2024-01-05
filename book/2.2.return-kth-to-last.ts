import {LinkedListNode, createLinkedList} from '@/utils/linked-list'

const setup = () => createLinkedList([1, 2, 3, 4, 5, 6, 5, 7, 8, 9, 0, 10, 11])

/**
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
    for (let i = 0; i <= k; i++) {
      if (!kthNode) {
        throw new Error(`LinkedList is shorter than k!`)
      }
      kthNode = kthNode.next
    }

    let current = head
    while (kthNode) {
      current = current.next!
      kthNode = kthNode.next
    }

    return current
  }

  const secondToLast = returnKthToLast(2, head)

  console.log({secondToLast})
}
