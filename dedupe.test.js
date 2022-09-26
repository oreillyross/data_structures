const {dedupe, dedupeEs6} = require("./dedupe")

describe("dedupe", () => {
    it("should remove any duplicate chars", () => {
        expect(dedupe("aaabscbdddfdd")).toEqual("abscdf")
    })

    it("should remove any duplicate chars using the new Set function", () => {
        expect(dedupeEs6("aaabscbdddfdd")).toEqual("abscdf")
    })
})