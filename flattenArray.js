/*
  Given an an array of arrays, flatten the array into one
  Utility methods used: 
  Array.isArray

*/

function flattenArray(arr) {
  // loop through array
  // check if next element is an array then loop again
  // otherwise add element to new array
  // the recursive call makes it go multiple levels deep
  const newArr = [];
  for (let thisItem of arr) {

    if (Array.isArray(thisItem)) {
      const flatItem = flattenArray(thisItem);
      for (let flat of flatItem) {
        newArr.push(flat);
      }
    } else {
      newArr.push(thisItem);
    }
  }

  return newArr;
}

module.exports = { flattenArray };

const oneLevelDeepArray = [1, [2, [2, 5], 3], 2, 3];

const val = flattenArray(oneLevelDeepArray);
val;
