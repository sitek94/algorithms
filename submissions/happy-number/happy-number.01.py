class Solution:
    def isHappy(self, n: int) -> bool:
        memo = []

        while n not in memo:
            memo.append(n)
            
            digits = list(str(n))
            n = sum(int(d) ** 2 for d in digits)

            if n == 1:
                return True

        return False