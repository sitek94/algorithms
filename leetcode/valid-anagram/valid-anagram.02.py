class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        # new 
        return "".join(sorted(s)) == "".join(sorted(t))