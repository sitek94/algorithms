# Different solution 2
class Solution(object):
    def twoSum(self, nums, target):
        complements = {}

        for i, n in enumerate(nums):
            complement_index = complements.get(n)
            
            if complement_index != None:
                return [i, complement_index]

            else:
                complements[target - n] = i