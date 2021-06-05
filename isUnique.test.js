const {isUnique, isUnique2} = require("./isUnique")
/*
  Write a function which takes a string and returns true or false if the characters
  are all unique. 

*/

describe("isUnique", () => {
    it("is a unique string", () => {
        expect(isUnique("abcdefghijklmn")).toBeTruthy()
    })

    it("is not a unique string", () => {
        expect(isUnique("abcdefgheas")).toBeFalsy()
    })
})

describe("isUnique2", () => {
    it("is a unique string", () => {
        expect(isUnique2("abcdefghijklmn")).toBeTruthy()
    })

    it("is not a unique string", () => {
        expect(isUnique2("abcdefgheas")).toBeFalsy()
    })
})