class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        indexes = {}

        for i, v in enumerate(nums):
            if v in indexes:
                indexes[v].append(i)
            else:
                indexes[v] = [i]

        for values in indexes.values():

            if len(values) > 1:
                for i in values:
                    for j in values:
                        if i == j:
                            continue
                        
                        if abs(i - j) <= k:
                            return True

        return False
