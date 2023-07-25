# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def hasPathSum(self, root, targetSum):
        """
        :type root: TreeNode
        :type targetSum: int
        :rtype: bool
        """
        if not root:
            return False

        return self.hasSum(root, targetSum)

    def hasSum(self, root, targetSum):
        if not root.left and not root.right and targetSum - root.val == 0:
            return True

        return root.left and self.hasSum(root.left, targetSum - root.val) \
            or root.right and self.hasSum(root.right, targetSum - root.val)