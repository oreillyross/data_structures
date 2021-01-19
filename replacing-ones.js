
// O(n) time O(1) space
function replacing_ones(arr, k) {
  
  let windowStart = 0;
  let maxLength = 0;
  let maxOnes = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    if (arr[windowEnd] === 1) {
      maxOnes += 1
    }
    
    if ((windowEnd - windowStart + 1 - maxOnes) > k) {
      if (arr[windowStart] === 1) {
        maxOnes -= 1
      }
      windowStart += 1
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
  }
  return maxLength
}

console.log(replacing_ones([0,0,0,0,0,1], 2))