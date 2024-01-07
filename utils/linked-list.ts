export class LinkedList<T> {
  public head: LinkedListNode<T>

  constructor(value: T) {
    this.head = new LinkedListNode(value)
  }

  appendToTail(value: T) {
    let lastNode = this.head

    while (lastNode.next) {
      lastNode = lastNode.next
    }

    const newNode = new LinkedListNode(value)
    lastNode.next = newNode

    return newNode
  }

  print() {
    printLinkedList(this.head)
  }
}

export class LinkedListNode<T> {
  public next?: LinkedListNode<T>

  constructor(public value: T) {}
}

export const createLinkedList = <T>(values: T[]) => {
  const [head, ...tail] = values
  const linkedList = new LinkedList(head)

  tail.forEach(value => linkedList.appendToTail(value))

  return linkedList
}

export function printLinkedList<T>(head: LinkedListNode<T>) {
  const values: T[] = []
  let current: typeof head | undefined = head

  while (current?.value !== undefined) {
    values.push(current.value)
    current = current.next
  }

  console.log(values.join(' -> '))
  console.log()
}
