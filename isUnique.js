/* NOTES
  for (const i in str) {} - use this for getting the index of a string or array
  for (const val of arr) {} - use this for iterating and getting the value 
  forEach - good for immutable iteration but cannot break out early, works on arrays
*/

// Time O(n^2) because the lastIndexOf is inside the for...loop
function isUnique(str) {
    // Brute force Approach, check if the lastindex of the current iterated char
    // is that same as the index being iterated, or is it referring to a char later
    // in the iteration that is different.
  for (let idx = 0; idx < str.length; idx++) {
    //   console.log(idx)
    //   console.log(str)
    //   console.log(str.lastIndexOf(str[idx]) !== idx)
      if (str.lastIndexOf(str[idx]) !== idx) return false
    }
  
    // [...str].forEach((char, idx, arr) => {
    //    console.log(str)
    //    console.log(idx)
    //    console.log(str.lastIndexOf(char))
    //    if (str.lastIndexOf(char) !== idx) return false; 
    // })

    // for (let i = 0; i < str.length; i++) {
    //     if (str.lastIndexOf(str[i]) != i) return false;
    // }
    return true
    
}
const value = isUnique("abca")
value


// Second Attempt to first sort str and exit early if we find two adjacent chars that
// are the same
// Time complexity of sort algorithm is O(n * log(n)) + the forl loop we get 
// O(n + n * log(n)) becomes O(n * log(n))

function isUnique1(str) {
  const sortedStr = [...str].sort().join("");
  for (let i = 0; i < str.length; i++) {
      if (sortedStr[i] === str[i - 1]) return false;
  }
  return true;
}

const value1 = isUnique1("abbcd")
value1

/* We can do better, lets use a hashing aolgorithm. So if we use Set then we can iterate
  only once over the string and each time add the char to a Set, check if we find the char
  in the set then immediately return false.
*/

function isUnique2(str) {
    const chars = new Set();

    for(let idx in str) {
        if (chars.has(str[idx])) return false;
        
        chars.add(str[idx]);
    }
    
    return true;

}

// A slightly less efficient, as the function can't short-circuit if it finds a reeated char
// but this one is a one liner.

function isUnique3(str) {
    return (new Set(str).size === str.length)
}

const val3 = isUnique3("abc")
val3

const val2 = isUnique2("adbc")
val2

module.exports = {isUnique, isUnique1, isUnique2}