// es5 way using pure javascript 
const triplet_sum = function(arr) {

  arr.sort((a,b) => a - b );
  const triplets = [];
  for (let i = 0; i < arr.length; i++) {
    // skip duplicates
    if (i > 0 && (arr[i] === arr[i - 1])) {
      continue;
    }   
     search_pair(arr, -arr[i], i + 1, triplets)
  }
  return triplets;
}

function search_pair(arr, target_sum, left, triplets) {
  let right = arr.length - 1;
  while (left < right) {
    const current_sum = arr[left] + arr[right];
    if (current_sum === target_sum) { // found triplet
       triplets.push([-target_sum, arr[left], arr[right]])
       left += 1;
       right -= 1;
       while (left < right && arr[left] === arr[left] - 1) {
         left += 1;
       }
       while (left < right && arr[right] === arr[right] - 1) {
         right -= 1;
       }
    } else if (target_sum > current_sum) {
      left +=1;
    } else {
      right -= 1;
    }
  }
}

// es6 fancy pants
const triplet_sum_es6 = function(arr) {

}

// should return [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
//console.log(triplet_sum_es6[-3, 0, 1, 2, -1, 1, -2])

console.log(triplet_sum([-3, 0, 1, 2, -1, 1, -2]))