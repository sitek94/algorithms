class Solution(object):
    def searchInsert(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        min_index = 0
        max_index = len(nums)

        while True:
            current_index = int((max_index + min_index) / 2)
            value = nums[current_index]

            if value == target:
                return current_index
            elif value < target and current_index == min_index:
                return current_index + 1
            elif value > target and current_index == max_index:
                return current_index
            elif value > target:
                max_index = current_index
            elif value < target:
                min_index = current_index
            else:
                return current_index
