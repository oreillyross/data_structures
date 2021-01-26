// O(n) time and space linear time.
const make_squares = function(arr) {

 const n = arr.length;
 squares = Array(n).fill(0);
 let highestSquaredIdx = n - 1;
 let left = 0;
 let right = n - 1;
 while (left <= right) {
   let leftSquare = arr[left] * arr[left];
   let rightSquare = arr[right] * arr[right]
   if (leftSquare > rightSquare) {
     squares[highestSquaredIdx] = leftSquare;
     left += 1
   } else {
     squares[highestSquaredIdx] = rightSquare;
     right -= 1;
   }
   highestSquaredIdx -= 1;
 }
 return squares

}

console.log(make_squares([-2,-1,2,3,5,6]))