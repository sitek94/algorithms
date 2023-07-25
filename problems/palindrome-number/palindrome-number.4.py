class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        # Negatives can't be palindrome, because of leading "-" sign
        if x < 0:
            return False

        # Get all digits
        digits = []        
        while x != 0:
            dividend = 10
            reminder = x % dividend

            digits.append(reminder)
            
            x = (x - reminder) / 10

        # Compare each left-right digit pair
        i = 0
        while i < len(digits) / 2:
            left = digits[i]
            right = digits[-(i + 1)]

            if left != right:
                return False

            i += 1

        return True
