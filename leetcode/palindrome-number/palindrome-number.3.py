class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        # Negatives can't be palindrome, because of leading "-" sign
        if x < 0:
            return False

        if x == 0:
            return True

        original_x = x

        # Build reversed x by going through each digit of x and adding it to the reversed_x string
        reversed_x = ""

        while x != 0:
            reminder = x % 10
            x = (x - reminder) / 10
            reversed_x += str(reminder)

        # Check if the original number is equal to the reversed number
        return original_x == int(reversed_x)
