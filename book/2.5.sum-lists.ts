import {createLinkedList} from '@/utils/linked-list'

const setup = () => {
  const {head: a} = createLinkedList([6, 1, 7])
  const {head: b} = createLinkedList([2, 9, 5])

  return {a, b}
}
type Node = ReturnType<typeof setup>['a']

/**
 * Sum Linked Lists
 *
 * Assumptions
 * - Function arguments are two linked lists
 * - Each node of linked lists contains a single digit
 * - Add two numbers and return the sum as linked list
 *
 * E.g.
 *   (6 -> 1 -> 7) + (2 -> 9 -> 5) = (9 -> 1 -> 2)
 *
 * WIP Solution quick and dirty but works
 */
{
  const {a, b} = setup()

  const sumLists = (headA: Node, headB: Node) => {
    let sumA = sumList(headA)
    let sumB = sumList(headB)

    let sum = sumA + sumB
    let digits = String(sum).split('').map(Number)

    return createLinkedList(digits)
  }

  const sumList = (head: Node) => {
    let value = ''
    let n = head
    while (n) {
      value += String(n.value)
      n = n.next!
    }

    return +value
  }

  const summed = sumLists(a, b)

  summed.print()
}
