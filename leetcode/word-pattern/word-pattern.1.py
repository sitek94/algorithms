class Solution(object):
    def wordPattern(self, pattern, s):
        """
        :type pattern: str
        :type s: str
        :rtype: bool
        """
        words = s.split(" ")

        return len(set(zip(words, pattern))) == len(set(pattern)) == len(set(words)) and len(pattern) == len(words)
