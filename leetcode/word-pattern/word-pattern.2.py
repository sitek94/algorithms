class Solution(object):
    def wordPattern(self, pattern, s):
        """
        :type pattern: str
        :type s: str
        :rtype: bool
        """
        words = s.split(" ")

        # False when number of letters in pattern doesn't match number of words
        if len(pattern) != len(words):
            return False

        # False when number of unique letters doesn't match number of unique words
        if len(set(pattern)) != len(set(words)):
            return False

        # False when number of unique word-letter pairs doesn't match number of unique letters
        if len(set(zip(words, pattern))) != len(set(pattern)):
            return False
        
        # Otherwise it must be true
        return True
