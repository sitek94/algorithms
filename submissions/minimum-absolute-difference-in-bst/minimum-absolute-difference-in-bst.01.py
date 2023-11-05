# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def getMinimumDifference(self, root):
        """
        :type root: TreeNode
        :type difference: int
        :rtype: int
        """
        values = self.dfs(root)

        diff = float("inf")
        i = 0

        while i < len(values) - 1:
            current = values[i]
            next = values[i + 1]

            current_diff = next - current

            if current_diff < diff:
                diff = current_diff

            i += 1
        
        return diff


    # Ordered DFS
    def dfs(self, root):
        if root is None:
            return []

        return self.dfs(root.left) + [root.val] + self.dfs(root.right)