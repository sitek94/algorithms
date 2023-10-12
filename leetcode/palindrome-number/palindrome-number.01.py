class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        # Negatives can't be palindrome, because of leading "-" sign
        if x < 0:
            return False

        original_x = x
        reversed_x = 0

        while x != 0:
            reversed_x = reversed_x * 10 + x % 10
            x //= 10

        return original_x == reversed_x