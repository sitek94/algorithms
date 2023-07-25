# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        queue = deque([(root.left, root.right)])

        while queue:
            pair = queue.popleft()
            left, right = pair

            if (left and not right) or (right and not left):
                return False

            if left and right: 
                if left.val != right.val:
                    return False
        
                queue.extend([(left.left, right.right), (left.right, right.left)])

        return True

        
            