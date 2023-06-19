class Solution(object):
    def wordPattern(self, pattern, s):
        """
        :type pattern: str
        :type s: str
        :rtype: bool
        """
        pairs = {}
        words = s.split(" ")

        if (len(words) != len(pattern)):
            return False

        if len(set(words)) != len(set(pattern)):
            return False

        for i, letter in enumerate(pattern):
            if letter not in pairs:
                pairs[letter] = words[i]

            elif pairs[letter] != words[i]:
                return False

        return True
