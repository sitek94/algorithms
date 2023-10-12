# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def invertTree(self, root):
        """
        :type root: TreeNode
        :rtype: TreeNode
        """

        # Base case
        if not root:
            return root

        # Swap
        root.left, root.right = root.right, root.left

        # Invert children
        self.invertTree(root.left)
        self.invertTree(root.right)

        # Inverted tree
        return root