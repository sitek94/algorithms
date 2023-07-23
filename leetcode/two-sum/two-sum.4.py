class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        complements = {}

        for i, n in enumerate(nums):
            complement_index = complements.get(n)
            
            if complement_index != None:
                return [i, complement_index]

            else:
                complements[target - n] = i
        