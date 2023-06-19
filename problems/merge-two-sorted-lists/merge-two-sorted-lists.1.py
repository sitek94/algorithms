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

        if a.val <= b.val:
            a.next = self.mergeTwoLists(a.next, b)
            return a
            
        else:
            b.next = self.mergeTwoLists(a, b.next)
            return b



   

            