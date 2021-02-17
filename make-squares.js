/* 

Given a sorted array, create a new array containing squares of all the numbers of 
the input array in the sorted order.

This is a straightforward question. The only trick is that we can have negative numbers in the input array, 
which will make it a bit difficult to generate the output array with squares in sorted order.

An easier approach could be to first find the index of the first non-negative number in the array. 
After that, we can use Two Pointers to iterate the array. One pointer will move forward to iterate the non-negative numbers, 
and the other pointer will move backward to iterate the negative numbers. At any step, whichever number gives us a 
bigger square will be added to the output array. 

Since the numbers at both ends can give us the largest square, an alternate approach could be to use two pointers 
starting at both ends of the input array. At any step, whichever pointer gives us the bigger square, 
we add it to the result array and move to the next/previous number according to the pointer. 

*/

//ES6 way

function es6_make_squares(arr) {
   return arr.map(v => v * v)
}

// old school

function make_squares(arr) {
  const n = arr.length;
  squares = Array(n).fill(0);
  let highestSquaredIdx = n - 1;
  let leftIdx = 0;
  let rightIdx = n - 1;

  while (leftIdx <= rightIdx) {
      let leftSquare = arr[leftIdx] * arr[leftIdx];
      let rightSquare = arr[rightIdx] * arr[rightIdx];

      if (leftSquare > rightSquare) {
          squares[highestSquaredIdx] = leftSquare;
          leftIdx += 1;
      } else {
          squares[highestSquaredIdx] = rightSquare;
          rightIdx -= 1;
      }

    highestSquaredIdx -= 1;    
  }
  
  return squares;
}

const input = [-1,2,-3,4]

console.log(es6_make_squares(input))
console.log(make_squares(input))

