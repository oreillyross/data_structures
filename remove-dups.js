const remove_dups = function(arr) {
  
let nextNonDuplicate = 1; // 1
let i = 1; // 2
while (i < arr.length) {
  if (arr[nextNonDuplicate - 1] !== arr[i]) {
    arr[nextNonDuplicate] = arr[i]
    nextNonDuplicate += 1;
  }
  i += 1
}
return nextNonDuplicate;
}

console.log(remove_dups([1,1,2,2,3,5,6,6,8,34]))

/*
  A similar problem is one where you are asked to remove duplicate elements based on a given key from an unsorted array.
  Again the Big-O will be O(n) linear time and O(1) constant in space
*/

const remove_dup = function(arr, key) {
let nextElement = 0;

arr.forEach((el, idx, array) => {
  if (el != key) {
    array[nextElement] = el;
    nextElement += 1;
  }
})

return nextElement;
}

console.log(remove_dup([1,1,5,3,2], 1))