class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        # Test
        return "".join(sorted(s)) == "".join(sorted(t))