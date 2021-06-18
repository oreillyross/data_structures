function isBalanced(str) {
  const openStack = [];
  const open = "({[";
  const closed = ")}]";
  const matches = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  for (let char of str) {
    if (open.includes(char)) {
      openStack.push(char);
    } else if (closed.includes(char)) {
      const lastOpenChar = openStack.pop();
      if (matches[char] !== lastOpenChar) return false;
    }
  }
  return !openStack.length;
}

module.exports = { isBalanced };
