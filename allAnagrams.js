/* 
This is the brute force approach, simple but Big 0 is n * log(s)

function allAnagrams(strings) {
	const sortedStrings = strings.map(str => str.split("").sort().join(""))
	for (let str of sortedStrings) {
		if (str !== sortedStrings[0]) {
			return false;
		}
	}
	return true;
}
*/

const assert = require("assert");

function allAnagrams(strings) {
  function getCharCount(str) {
    const charCount = {};

    for (let char of str) {
      if (charCount[char] === undefined) {
        charCount[char] = 1;
      } else {
        charCount[char]++;
      }
    }
    return charCount;
  }
  if (strings.length === 0) {
    return true;
  }
  for (let str of strings) {
    if (str.length !== strings[0].length) {
      return false;
    }
  }

  const firstCharCount = getCharCount(strings[0]);
  for (let str of strings) {
    const charCount = getCharCount(str);
    for (let idx in charCount) {
      if (charCount[idx] !== firstCharCount[idx]) {
        return false;
      }
    }
  }

  return true;
}

module.exports = { allAnagrams };
