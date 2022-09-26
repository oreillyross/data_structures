const {highestFrequency } = require("./highestFrequency")

const strings = [
    "fjgk",
    "abc",
    "afc",
    "abc",
    "dbc",
]

describe("Highest frequency test", () => {
    it("returns the abc string as highest freq", () => {
        expect(highestFrequency(strings)).toEqual("abc")
    })
    it("returns the ffb as most common string", () => {
        expect(highestFrequency(["ffb", "asd", "ffb", "asd"])).toEqual("ffb")
    })
})