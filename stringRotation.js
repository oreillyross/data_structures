/*
The key to solving this challenge is to think how two strings concatenated appear to the system
One can then simply run the includes function passing in the secons string to see the rotated text 
in the concatenated string 1
*/
function stringRotation(str1, str2) {
  return str1.length === str2.length && (str1 + str1).includes(str2);
}

module.exports = { stringRotation };
