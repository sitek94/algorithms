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
        
        current = None
        head = None

        small, large = (a, b) if a.val < b.val else (b, a)
        
        while small and large:
            if small.val <= large.val:
                if not head:
                    head = small 
                if current:
                    current.next = small
                current = small
                small = small.next
            else:
                small, large = large, small

        if small or large:
            current.next = small or large

        return head