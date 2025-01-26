import {LinkedListNode, createLinkedList} from '@/utils/linked-list'

const getNotPalindrome = () => createLinkedList(['a', 'b', 'c', 'd', 'e', 'f'])
const getPalindrome = () =>
  createLinkedList(['a', 'b', 'c', 'd', 'c', 'b', 'a'])

type Node = LinkedListNode<string>

{
  const isPalindrome = (head: Node) => {
    // recursion go
    console.log(head.value)

    if (head.next) {
      isPalindrome(head.next)
    }

    console.log(head.value)

    return true
  }

  const palindrome = getPalindrome()
  const notPalindrome = getNotPalindrome()

  // console.assert(isPalindrome(palindrome.head) === true)
  console.assert(isPalindrome(notPalindrome.head) === false)
}
