/**
 * This is the single mutation challenge. The key to this challenge is the double
 * condition for...loop
 *
 * Steps to complete:
 * 1. declare a function that takes two strings
 * 2. first check the abs difference between the lengths
 *    to see if they are more than 2 chars difference
 *   then can immediatelly return false.
 * 3. declare a variable to track number of mutations
 * 4. create a double condition for loop to loop through
 *    the two strings, tracking each with an i an j
 *    index count. use an or statement for the condition
 *    to ensure both strings are looped through to the
 *    end.
 * 5. Need to also account for strings being one digit
 *    longer but still might match due to subsitution
 *
 *
 *
 */

function singleMutation(str1, str2) {
  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  }

  let mutations = 0;

  for (let i = 0, j = 0; i < str1.length || j < str2.length; i++, j++) {
    if (str1[i] !== str2[j]) {
      mutations++;
      if (mutations > 1) {
        return false;
      }
      if (str1.length > str2.length) {
        j--;
      } else if (str1.length < str2.length) {
        i--;
      }
    }
  }
  return true;
}

module.exports = { singleMutation };
