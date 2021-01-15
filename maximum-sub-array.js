// Naieve Brut force approach
const arr = [1,4,6,2,3]
const k = 2

function max_sub(k, arr) {
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

console.log(max_sub(k, arr))