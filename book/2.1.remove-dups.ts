import {LinkedListNode, createLinkedList} from '@/utils/linked-list'

const setup = () => createLinkedList([1, 2, 3, 4, 5, 6, 5, 7, 8, 9, 0, 10, 11])

/**
 * Remove duplicates — WITH temporary buffer
 *
 * Time: O(n)
 * Space: O(n)
 */
{
  const {head} = setup()

  head.print()

  const removeDuplicates = (head: LinkedListNode<number>) => {
    const occurrences: Record<number, boolean> = {}

    let current: LinkedListNode<number> = head
    let next = head.next

    while (next !== undefined) {
      if (occurrences[next.value]) {
        current.next = next.next
      } else {
        occurrences[next.value] = true
        current = next
      }
      next = next.next
    }
  }

  removeDuplicates(head)

  head.print()
}

console.log('\n------------------------------------\n')

/**
 * Remove duplicates — WITHOUT temporary buffer
 *
 * Time: O(n^2)
 * Space: O(1)
 */
{
  const {head} = setup()

  const removeDuplicates = (start?: LinkedListNode<number>) => {
    let head = start

    while (head) {
      let current: LinkedListNode<number> = head
      let next = head.next

      while (next !== undefined) {
        if (head.value === next.value) {
          current.next = next.next
        } else {
          current = next
        }
        next = next.next
      }

      head = head.next
    }
  }

  removeDuplicates(head)

  head.print()
}
