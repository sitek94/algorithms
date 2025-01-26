import {LinkedList, LinkedListNode, createLinkedList} from '@/utils/linked-list'

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
 * Solution quick and dirty but works
 *
 * @UP I think that's actually cheating, because in the book they say about not
 * converting linked list to number and then back to linked list.
 */
{
  const setup = () => {
    const {head: a} = createLinkedList([6, 1, 7])
    const {head: b} = createLinkedList([2, 9, 5])

    return {a, b}
  }
  type Node = ReturnType<typeof setup>['a']

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

  // summed.print()
}

/**
 * Sum Linked Lists
 *
 * Assumptions
 * - Digits are stored in reverse order
 *
 * Solution - carry the one
 */
{
  const setup = () => {
    const {head: a} = createLinkedList([7, 1, 6])
    const {head: b} = createLinkedList([5, 9, 2])

    return {a, b}
  }
  type Node = ReturnType<typeof setup>['a']

  const {a, b} = setup()

  const sumLists = (headA?: Node, headB?: Node) => {
    let outputLinkedList = new LinkedList(0)

    let output = outputLinkedList.head
    let a = headA
    let b = headB
    let carry = 0

    while (a || b) {
      let sum = (a?.value || 0) + (b?.value || 0) + carry
      let reminder = sum % 10

      carry = Math.floor(sum / 10)
      output.value = reminder

      if (a) a = a.next
      if (b) b = b.next
      if (a || b) {
        output.next = new LinkedListNode(0)
        output = output.next
      }
    }

    return outputLinkedList
  }

  const output = sumLists(a, b)

  // output.print()
}

/**
 * Sum Linked Lists
 *
 * Assumptions
 * - Digits are stored in forward order
 *
 * Solution - carry the one
 */
{
  const setup = () => {
    const {head: a} = createLinkedList([6, 1, 7])
    const {head: b} = createLinkedList([2, 9, 5])

    return {a, b}
  }
  type Node = ReturnType<typeof setup>['a']

  const {a, b} = setup()

  const sumLists = (headA?: Node, headB?: Node) => {
    let outputLinkedList = new LinkedList(0)

    let current = outputLinkedList.head
    let a = headA
    let b = headB
    let carry = 0

    while (a || b) {
      let sum = (a?.value || 0) + (b?.value || 0)
      let reminder = sum % 10

      carry = Math.floor(sum / 10)

      if (a) a = a.next
      if (b) b = b.next

      if (carry) {
        current.value = current.value + carry
      }
      current.next = new LinkedListNode(reminder)
      current = current.next
    }

    return outputLinkedList
  }

  const output = sumLists(a, b)

  output.print()
}
