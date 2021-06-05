function dedupe(str) {
  let dupChars = {}
  let newStr = []
    for (let char of str) {
        if (!dupChars[char]) {
            dupChars[char] = true;
            newStr.push(char)
        }
    }
    return newStr.join("")
}

module.exports = {dedupe}