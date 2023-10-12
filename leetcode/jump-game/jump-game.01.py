class Solution(object):
    def canJump(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """	
        first_index = 0
        last_index = len(nums) - 1
        i = last_index - 1

        while i >= 0:
            jump_length = nums[i]
            distance = last_index - i

            if jump_length >= distance:
                last_index = i
            
            i -= 1

        return last_index == 0