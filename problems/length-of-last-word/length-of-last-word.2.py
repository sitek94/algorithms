class Solution(object):
    def lengthOfLastWord(self, s):
        """
        :type s: str
        :rtype: int
        """
        tail = len(s) - 1
        last_word_length = 0

        while s[tail] == " ":
            tail -= 1

        while tail >= 0 and s[tail] != " ":
            last_word_length += 1
            tail -= 1

        return last_word_length