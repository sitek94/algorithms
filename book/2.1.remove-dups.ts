import {LinkedListNode, createLinkedList} from '@/utils/linked-list'

const setup = () => createLinkedList([1, 2, 3, 4, 5, 6, 5, 7, 8, 9, 0, 10, 11])

/**
 * Remove duplicates — WITH temporary buffer
 *
 * Time: O(n)
 * Space: O(n)
 */
{
  const linkedList = setup()

  linkedList.print()

  const removeDuplicates = (head: LinkedListNode<number>) => {
    const occurrences = new Set<number>()

    let current: LinkedListNode<number> = head
    let next = head.next

    while (next !== undefined) {
      if (occurrences.has(next.value)) {
        current.next = next.next
      } else {
        occurrences.add(next.value)
        current = next
      }
      next = next.next
    }
  }

  removeDuplicates(linkedList.head)

  linkedList.print()
}

console.log('\n------------------------------------\n')

/**
 * Remove duplicates — WITHOUT temporary buffer
 *
 * Time: O(n^2)
 * Space: O(1)
 */
{
  const linkedList = setup()

  linkedList.print()

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

  removeDuplicates(linkedList.head)

  linkedList.print()
}

/**
 * Slightly cleaner solution without using additional variable for `next`
 */
{
  const linkedList = setup()

  linkedList.print()

  const removeDuplicates = (head?: LinkedListNode<number>) => {
    let current = head

    while (current) {
      let runner: LinkedListNode<number> = current

      while (runner.next) {
        if (current.value === runner.next.value) {
          runner.next = runner.next.next
        }

        runner = runner.next!
      }

      current = current.next
    }

    return true
  }

  removeDuplicates(linkedList.head)

  linkedList.print()
}
