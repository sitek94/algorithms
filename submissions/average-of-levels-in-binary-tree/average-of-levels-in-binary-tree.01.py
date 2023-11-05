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

        queue = deque([(current_level, root)])

        while queue:
            level, node = queue.popleft()

            if current_level != level:
                result.append(sum(current_values) / len(current_values))
                current_values = []
                current_level = level

            current_values.append(float(node.val))            

            if node.left:
                queue.append((level + 1, node.left))
            if node.right:
                queue.append((level + 1, node.right))            

        if current_values:
            result.append(sum(current_values) / len(current_values))

        return result