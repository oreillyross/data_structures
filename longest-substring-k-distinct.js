// Find the longest substring with K distinct characters

const str = 'aabdfhhfd';
const K = 2;



function longest_substring(k, str) {

let windowStart = 0;
let maxLength = 0;
charFrequency = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let rightChar = str[windowEnd]
    if (!(rightChar in charFrequency)) {
      charFrequency[rightChar] = 0;
    }
    charFrequency[rightChar] += 1
    while (Object.keys(charFrequency).length > k) {
      // while the distinct count greater than keys
      const leftChar = str[windowStart];
      charFrequency[leftChar] -= 1;
      if (charFrequency[leftChar] === 0) {
        delete charFrequency[leftChar]
      }
      windowStart += 1
      
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1)

  }

  return maxLength
}

const count = longest_substring(K, str)

console.log(count)