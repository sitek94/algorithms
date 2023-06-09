class Solution(object):
    def summaryRanges(self, nums):
        """
        :type nums: List[int]
        :rtype: List[str]
        """
        result = []
        current_range = []

        for i in range(len(nums)):
            a = nums[i]
            b = nums[i + 1] if i < len(nums) - 1 else None

            # If range is valid, append both items to current range. We don't 
            # care if the item is already in current range, because when formatting
            # it we're going to take only first and last item.
            if b != None and a + 1 == b:
                current_range.append(a)
                current_range.append(b)

            # If there is something in current range, append it
            # to the result and reset current range
            elif current_range:
                result.append(self.format(current_range))
                current_range = []

            # Append only a to result, e.g. in first iteration for [0, 2],
            # or when last index wouldn't make it to the range.
            else:
                result.append(self.format(a))
                
        return result

    """
    Format number or range
    """
    def format(self, r):
        if isinstance(r, int):
            return str(r)
            
        return str(r[0]) + "->" + str(r[-1])

