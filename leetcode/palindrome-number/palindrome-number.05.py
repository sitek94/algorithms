class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        # First approach, convert to string and reverse
        
        return str(x) == "".join(reversed(list(str(x))))