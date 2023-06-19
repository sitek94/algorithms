class Solution(object):
    def summaryRanges(self, nums):
        """
        :type nums: List[int]
        :rtype: List[str]
        """
        if not nums:
            return []

        if len(nums) == 1:
            return [str(nums[0])]

        result = []
        rest = nums[1:]
        start = current = nums[0]

        for num in rest:
            if num == current + 1:
                current = num
            elif start == current:
                result.append([start])
                start = num
                current = num
            else:
                result.append([start, current])
                start = num
                current = num

        if start == current:
            result.append([start])
        else:
            result.append([start, current])

        new_result = []

        for arr in result:
            new_result.append("->".join(str(x) for x in arr))

        return new_result

