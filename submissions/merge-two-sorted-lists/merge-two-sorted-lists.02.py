# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def mergeTwoLists(self, a, b):
        """
        :type list1: Optional[ListNode]
        :type list2: Optional[ListNode]
        :rtype: Optional[ListNode]
        """
        if not a or not b:
            return a or b
        
        small, large = (a, b) if a.val < b.val else (b, a)
        head = small
        tail = None

        while small and large:
            if small.val <= large.val:
                if tail:
                    tail.next = small
                tail = small
                small = small.next

                if not small:
                    tail.next = large

            else:
                small, large = large, small

        return head