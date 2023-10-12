# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def sortedArrayToBST(self, nums):
        """
        :type nums: List[int]
        :rtype: TreeNode
        """
        if not nums:
            return None

        length = len(nums)

        if length == 1:
            return TreeNode(nums[0], None, None)

        if length == 2:
            return TreeNode(nums[0], None, TreeNode(nums[1], None, None))

        middle = (length - 1) // 2

        return TreeNode(
            nums[middle], 
            self.sortedArrayToBST(nums[:middle]),
            self.sortedArrayToBST(nums[middle+1:]),
        )