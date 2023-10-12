class Solution(object):
    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """
        # O(a log a + b)

        # a - number of strings in strs list
        # O(a log a)
        strs.sort()

        first = strs[0]
        last = strs[-1]
        prefix = ""

        # b - length of the shortest string
        # O(b)
        for i in range(len(first)):
            if first[i] == last[i]:
                prefix += first[i]
            else:
                break

        return prefix