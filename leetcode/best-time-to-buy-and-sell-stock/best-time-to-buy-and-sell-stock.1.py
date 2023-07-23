class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        max_profit = 0
        min_price = float('inf')

        for current_price in prices:
          if current_price < min_price:
            min_price = current_price

          current_profit = current_price - min_price

          if current_profit > max_profit:
            max_profit = current_profit
 
        return max_profit
