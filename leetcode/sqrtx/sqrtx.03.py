class Solution(object):
    def mySqrt(self, x):
        """
        :type x: int
        :rtype: int
        """
        i = 1

        while True:
            product = i * i

            if product == x:
                return i

            if product > x:
                return i - 1

            i += 1