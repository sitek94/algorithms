# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def averageOfLevels(self, root):
        """
        :type root: TreeNode
        :rtype: List[float]
        """
        current_level = 0
        current_values = []
        result = []

        queue = [(current_level, root)]

        while queue:
            level, item = queue.pop(0)

            if current_level != level:
                result.append(sum(current_values) / len(current_values))
                current_values = []
                current_level = level

            current_values.append(float(item.val))            

            if item.left:
                queue.append((level + 1, item.left))
            if item.right:
                queue.append((level + 1, item.right))            

        if current_values:
            result.append(sum(current_values) / len(current_values))

        return result