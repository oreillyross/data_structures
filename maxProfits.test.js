const { maxProfits } = require("./maxProfits")

describe("Maxprofits", () => {
    it("returns the maximum profit made", () => {
        expect(maxProfits([10, 7, 5, 8, 11, 9])).toEqual(6)
    })
    it("returns 0 as no profit can be made", () => {
        expect(maxProfits([10,10,10])).toEqual(0)
    })
})