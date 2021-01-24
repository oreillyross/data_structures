function find_perm_ind(str, pattern) {

  let charFrequency = {};
  let matched = 0;
  let windowStart = 0;

  for(let i = 0; i < pattern.length; i++) {
    let char = pattern[i];
    if (!(char in charFrequency)) {
      charFrequency[char] = 0;
    }
    charFrequency[char] += 1
  }

  let resultIndices = [];
  
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let rightChar = str[windowEnd];
    if (rightChar in charFrequency) {
      charFrequency[rightChar] -= 1;
    }
    if (charFrequency[rightChar] === 0) {
      matched += 1;
    }
    if (matched === Object.keys(charFrequency).length) {
    // have we found an anagram match
    resultIndices.push(windowStart)
  }

  if (windowEnd >= pattern.length - 1) {
    let leftChar = str[windowStart];
    windowStart += 1;
    if (leftChar in charFrequency) {
      if (charFrequency[leftChar] === 0) {
        matched -= 1;
      }
      charFrequency[leftChar] += 1;
    }
  }
  }


  return resultIndices;



}

console.log(find_perm_ind('aabcabcad', 'ab'))