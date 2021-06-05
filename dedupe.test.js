const {dedupe} = require("./dedupe")

describe("dedupe", () => {
    it("should remove any duplicate chars", () => {
        expect(dedupe("aaabscbdddfdd")).toEqual("abscdf")
    })
})