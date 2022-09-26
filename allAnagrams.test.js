const { allAnagrams } = require("./allAnagrams")

describe("All Anagrams challenge", () => {
  it("should return true for valid anagrams", () => {
    expect(allAnagrams(["abcd", "bcda", "dcab"])).toBeTruthy();
  });
  it("should return false for non-valid anagrams", () => {
    expect(allAnagrams(["abcd", "bcra", "dbca"])).toBeFalsy();
  });
});
