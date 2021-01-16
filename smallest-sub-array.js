// In this exercise the problem is stated  as find the minimum
// contiguous array which has sum greater than or equal to S
// Use the sliding window pattern and do these steps
// Iterate over array
// start adding up sum
// check with a while loop if sum >= S then
// save current min, using Math.min
// reduce the element at start of sliding window
// move the window start up on place.
// exit for loop and return min
// O(n) time O(1) space

const array = [1,4,5,6,3,2]
const S = 17

function smallest_sub_array(S, arr) {
  let windowStart = 0;
  let sum = 0;
  let min = Infinity;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    sum = sum + arr[windowEnd];
    while (sum >= S) {
      min = Math.min(min, windowEnd - windowStart + 1)
      sum = sum - arr[windowStart]
      windowStart = windowStart + 1
    }

  } 
  
  if (min === Infinity) {
    return 0
  }

  return min;
}

const value = smallest_sub_array(S, array)

console.log(value)