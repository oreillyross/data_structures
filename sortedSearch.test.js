const { sortedSearch} = require("./sortedSearch")

describe("SortedSearch", () => {
	it("returns index 3 for given sorted array and index",() => {
		expect(sortedSearch([1,3,6,13,17], 13)).toEqual(3)
	})
	it("returns -1 as its not in the array", () => {
            expect(sortedSearch([1,3,6,13,17], 12)).toEqual(-1)
	})
})