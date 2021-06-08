const { arraySubset } = require("./arraySubset")

const pArr = [1,2,3,4,5,6];
const pSub = [3,4,5]

describe("Array Subset challenge", () => {
    it("returns true for a subset", () => {
        expect(arraySubset(pArr,pSub)).toBeTruthy();
    })
})