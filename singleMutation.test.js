const { singleMutation } = require("./singleMutation");

const str1 = "abc";
const str2 = "abcd";

describe("singleMutation challenge", () => {
  it("should return true", () => {
    expect(singleMutation(str1, str2)).toBeTruthy();
  });
});
