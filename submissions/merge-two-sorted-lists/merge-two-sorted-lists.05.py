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

        while a and b:
            a_less_or_equal_b = a.val <= b.val
            b_less_or_equal_a = b.val <= a.val
            
            if a_less_or_equal_b:
                if not head:
                    head = a 
                if current:
                    current.next = a
                current = a
                a = a.next

            if b_less_or_equal_a:
                if not head:
                    head = b
                if current:
                    current.next = b
                current = b
                b = b.next

        if a:
            current.next = a
        if b:
            current.next = b
        
        return head