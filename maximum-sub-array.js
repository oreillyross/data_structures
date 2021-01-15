// Naieve Brut force approach
const arr = [1,44,6,2,4,6,2,4,24,62,4,62,46,24,6,2,4,6,2,4,6,2]
const k = 2

function max_sub_brute(k, arr) {
  let maxSum = 0;
  let windowSum = 0;

  for(let i = 0; i < arr.length - k + 1; i++) {
     windowSum = 0;
     for(let j = i; j < i + k; j++) {
       windowSum += arr[j]
     }
     maxSum = Math.max(windowSum, maxSum)
  }
  return maxSum
}
//===================================
//Better solution with O(n) time and O(1) space

function max_sub(k, arr) {
  let maxSum = 0;
  let windowSum = 0;
  let windowStart = 0;

  for(let window_end = 0; window_end < arr.length; window_end++) {
    windowSum += arr[window_end];
    // slide window needs to stretch out first
    if (window_end >= k) {
       windowSum -= arr[windowStart]
       maxSum = Math.max(windowSum, maxSum)
       windowStart += 1
    }
  }
  return maxSum;
}




console.log(max_sub_brute(k, arr))
console.log(max_sub(k, arr))