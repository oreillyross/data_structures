// https://www.educative.io/courses/grokking-the-coding-interview/N0o9QnPLKNv 

function find_perm(str, pattern) {
  let matched = 0;
  let charFrequency = {};
  let windowStart = 0;

for (let i = 0; i < pattern.length; i++) {
  const chr = pattern[i]
  if (!(chr in charFrequency)) {
    charFrequency[chr] = 0;
  }
  charFrequency[chr] += 1
}

for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
  const rightChar = str[windowEnd];
  if (rightChar in charFrequency) {
    charFrequency[rightChar] -= 1
  }
  if (charFrequency[rightChar] === 0) {
    matched += 1
  }


if (matched === Object.keys(charFrequency).length) {
  return true;
}


if (windowEnd >= pattern.length - 1) {
  const leftChar = str[windowStart];
  windowStart += 1
  if (leftChar in charFrequency) {
    if (charFrequency[leftChar] === 0) {
      matched -= 1;
      } 
      charFrequency[leftChar] += 1;
    }

  }

  
}
return false;
}

console.log(find_perm('cbaaoidbaf', 'abc'))