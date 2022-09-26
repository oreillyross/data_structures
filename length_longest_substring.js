const assert = require('assert')

const k = 1;
const str = 'aabbcb'
const result = 3

function length_longest(str, k) {
  
  let maxLength = 0;
  let windowStart = 0;
  let maxRepeatLetterCount = 0;
  let frequencyMap = {};

for (let windowEnd = 0; windowEnd < str.length; windowEnd++){
  const rightChar = str[windowEnd]
  if (!(rightChar in frequencyMap)) {
    frequencyMap[rightChar] = 0;
  }
  frequencyMap[rightChar] += 1
  
  if ((windowEnd - windowStart + 1 - maxRepeatLetterCount) > k) {
    const leftChar = str[windowStart]
    frequencyMap[leftChar] -= 1
    windowStart += 1
  }
  maxRepeatLetterCount = Math.max(maxRepeatLetterCount, frequencyMap[rightChar])
  maxLength = Math.max(maxLength, windowEnd - windowStart + 1)  
}

  return maxLength
}

assert(length_longest(str, k)  === result)


