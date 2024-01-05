/**
 * Creating a singly linked list
 */
type Value = string

class Node {
  public next?: Node

  constructor(public value: Value) {}

  appendToTail(value: Value) {
    let lastNode = this as Node

    while (lastNode.next) {
      lastNode = lastNode.next
    }

    const newNode = new Node(value)
    lastNode.next = newNode

    return newNode
  }

  print() {
    const linkedList: Value[] = []
    let node: Node | undefined = this
    while (node?.value) {
      linkedList.push(node.value)
      node = node.next
    }

    console.log(linkedList.join(' -> '))
    console.log()
  }
}

const head = new Node('1')

head.appendToTail('2')
head.appendToTail('3')
head.appendToTail('4')
head.appendToTail('5')

head.print()

/**
 * Deleting a node from a singly linked list
 */
function deleteNode(head: Node, value: Value) {
  if (head.value === value) {
    return head.next
  }
  let current: Node | undefined = head
  let next = current.next

  while (current) {
    if (next?.value === value) {
      current.next = next.next
      break
    }
    current = next
    next = current?.next
  }
}

deleteNode(head, '4')

head.print()

{
  const repeat = (count: number, fn: (...args: any[]) => void) =>
    Array.from({length: count}).forEach((_, index) => fn(index))

  const head = new Node('a1')
  repeat(10, index => head.appendToTail(`a${index + 2}`))
  head.appendToTail('b1')
  repeat(10, index => head.appendToTail(`b${index + 2}`))

  head.print()

  /**
   * The "Runner" Technique
   */
  function reorderNodes(head: Node) {
    let fast: Node | undefined = head
    let slow: Node | undefined = head
    let reachedEnd = false

    while (fast && slow) {
      if (reachedEnd) {
        const tempFast: Node | undefined = fast.next
        const tempSlow: Node | undefined = slow.next

        fast.next = slow
        if (slow.next) {
          slow.next = tempFast
        }
        fast = tempFast
        slow = tempSlow
      } else {
        slow = slow.next
        fast = fast?.next?.next
      }

      // FAST reached end and SLOW is at mid point
      if (!fast && !reachedEnd) {
        fast = head
        reachedEnd = true
      }
    }

    return head
  }

  const newHead = reorderNodes(head)

  newHead.print()
}
