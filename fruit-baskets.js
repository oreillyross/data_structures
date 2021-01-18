// start by finding the longest subarray with no more than two  distinct kinds. 
// this is same problem as longest substring with distint k problem
// declare windowStart, maxLength (for subarray storage) and a hashmap called fruitTypes
// loop through array with windowEnd pointer
// store rightFruit from current pointer
// check if its in fruit hashmap, if not add it with 0 count
// then outside if add 1 to the count
// shrink the sliding window from the left side until less than two types in window.
// because we know there are only two baskets we can hardcode the K variable that would normally be passed in to the value of 2.
// windowStart pointer increase by 1 to shrink it.
// update maxLength storage
// outside for loop return maxLength
// Big O in time O(n) and space O(1)



const fruit = ['A', 'A', 'A', 'B', 'A', 'C']


function fruit_baskets(arr) {
  let windowStart = 0;
  let maxLength = 0;
  let fruitBaskets = {};

  for(let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
     let rightFruit = arr[windowEnd];
     if (!(rightFruit in fruitBaskets)) {
       fruitBaskets[rightFruit] = 0
     } 
     fruitBaskets[rightFruit] += 1;
     // now shrink if more than two
     while (Object.keys(fruitBaskets).length > 2) {
       let leftFruit = arr[windowStart]
       fruitBaskets[leftFruit] -= 1;
       if (fruitBaskets[leftFruit] === 0) {
         delete fruitBaskets[leftFruit]
       }
       windowStart += 1
     }
     maxLength = Math.max(maxLength, windowEnd - windowStart + 1)

  }

  return maxLength;

}


const val = fruit_baskets(fruit)

console.log(val)
