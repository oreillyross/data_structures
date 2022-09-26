// this is pre-es6 way to iterate
// essential is the object to store what element has come before
// and also the array to store non-duplicate elements
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
//this uses the Set to replace the need for sepearate object and array
function dedupeEs6(str) {
  const newStr = new Set(str)
  return Array.from(newStr).join("")
}

module.exports = {dedupe, dedupeEs6}