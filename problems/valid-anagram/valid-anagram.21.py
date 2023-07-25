class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        counts_s = {}
        counts_t = {}

        for i in range(len(s)):
            counts_s[s[i]] = counts_s.get(s[i], 0) + 1
            counts_t[t[i]] = counts_t.get(t[i], 0) + 1

        # TIL, I didn't know that it's possible in Python 
        return counts_s == counts_t
        