function maxProfit(prices: number[]): number {
  let maxProfit = 0
  let minPrice = Infinity
  let minPriceIndex = -1
  let maxPrice = 0
  let maxPriceIndex = -1

  for (let i = 0; i < prices.length; i++) {
    let currentPrice = prices[i]

    if (currentPrice < minPrice) {
      minPrice = currentPrice
      minPriceIndex = i
    }

    if (currentPrice > maxPrice || minPriceIndex > maxPriceIndex) {
      maxPrice = currentPrice
      maxPriceIndex = i
    }

    let currentProfit = maxPrice - minPrice
    if (currentProfit > maxProfit) {
      maxProfit = currentProfit
    }
  }

  return maxProfit
}