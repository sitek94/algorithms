class Solution(object):
    def mySqrt(self, x):
        """
        :type x: int
        :rtype: int
        """   
        start = 0
        end = x

        while True:
            mid = float((start + end) / 2)
            product = mid * mid

            if int(product) == x:
                return int(mid)

            if product > x:
                end = mid

            if product < x:
                start = mid