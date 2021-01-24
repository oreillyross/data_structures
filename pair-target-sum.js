function pair_target_sum(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let currentSum = arr[left] + arr[right];
    if (target === currentSum) {
      return [left, right]
    }  

    if (target > currentSum) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return [-1,-1]


}

console.log(pair_target_sum([1,2,3,4], 6))