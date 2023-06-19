class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        i = 0

        while i < len(nums) - 1:
            j = i + 1
            a = nums[i]

            while j < len(nums):
                b = nums[j]

                if a + b == target:
                    return [i, j]

                j += 1

            i += 1
                    