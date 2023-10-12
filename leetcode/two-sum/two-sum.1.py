class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        complements = {}

        for i, n in enumerate(nums):
            if n in complements:
                return [complements[n], i]

            else:
                complements[target - n] = i