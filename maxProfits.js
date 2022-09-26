function maxProfits(prices) {
    let minPrice = Infinity
    let maxPrice = 0

    for (let price of prices) {
        minPrice = Math.min(minPrice, price)
        maxPrice = Math.max(maxPrice, price - minPrice)
    }

    return maxPrice
}



    
    



module.exports = {maxProfits}