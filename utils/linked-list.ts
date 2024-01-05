export class LinkedList<T> {
  public head: LinkedListNode<T>

  constructor(value: T) {
    this.head = new LinkedListNode(value)
  }
}

export class LinkedListNode<T> {
  public next?: LinkedListNode<T>

  constructor(public value: T) {}

  appendToTail(value: T) {
    let lastNode = this as LinkedListNode<T>

    while (lastNode.next) {
      lastNode = lastNode.next
    }

    const newNode = new LinkedListNode(value)
    lastNode.next = newNode

    return newNode
  }

  print() {
    const values: T[] = []
    let node: LinkedListNode<T> | undefined = this

    while (node?.value !== undefined) {
      values.push(node.value)
      node = node.next
    }

    console.log(values.join(' -> '))
    console.log()
  }
}

export const createLinkedList = <T>(values: T[]) => {
  const [head, ...tail] = values
  const linkedList = new LinkedList(head)

  tail.forEach(value => linkedList.head.appendToTail(value))

  return linkedList
}
