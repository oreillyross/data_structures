const assert = require('assert')

const str = 'aabb'
const str1 = 'abcdefghijklmnopqrstuvwxyz'
const str2 = 'abcdefghijklmnapqrsauvwxyz'

function no_repeat(str) {
  let windowStart = 0;
  let maxLength = 0;
  let charIndexMap = {};

  for(let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let rightChar = str[windowEnd];
    
    if (rightChar in charIndexMap) {
      windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1)
    }
    charIndexMap[rightChar] = windowEnd;
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
  }

  return maxLength

  
}

 assert(no_repeat(str) === 2)
console.log(no_repeat(str2))