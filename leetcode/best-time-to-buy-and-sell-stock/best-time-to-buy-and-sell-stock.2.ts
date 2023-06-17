function maxProfit(prices: number[]): number {
  let maxProfit = 0
  let minPrice = Infinity

  for (let i = 0; i < prices.length; i++) {
    let currentPrice = prices[i]

    if (currentPrice < minPrice) {
      minPrice = currentPrice
    }

    let currentProfit = currentPrice - minPrice

    if (currentProfit > maxProfit) {
      maxProfit = currentProfit
    }
  }

  return maxProfit
}