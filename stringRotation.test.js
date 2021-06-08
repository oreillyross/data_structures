const { stringRotation } = require("./stringRotation")

describe("strong rotation challenge", () => {
    it("matches a rotated string", () => {
        expect(stringRotation("somestring", "ringsomest"))
    })
})