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