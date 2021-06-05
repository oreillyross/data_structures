const {flattenArray} = require("./flattenArray")

const oneLevelDeepArray = [1,2,[3,5],3]
const moreLevelsDeep = [1,2,3,[3,4,[6,7]],4]

describe("Flatten Array", () => {
    it("flattens one level deep", () => {
        expect(flattenArray(oneLevelDeepArray)).toEqual([1,2,3,5,3])
    })

    it("flattens more than one level deep", () => {
        expect(flattenArray(moreLevelsDeep)).toEqual([1,2,3,3,4,6,7,4])
    })
})