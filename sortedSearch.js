function sortedSearch(arr, search) {
  let startIndex = 0;
  let endIndex = arr.length - 1;

  if (search < arr[startIndex] || search > arr[endIndex]) {
    return -1;
  }

  while (true) {
    if (arr[startIndex] === search) {
      return startIndex;
    }

    if (arr[endIndex] === search) {
      return endIndex;
    }

    const middleIndex = Math.floor((startIndex + endIndex) / 2);

    if (search > arr[middleIndex]) {
      startIndex = middleIndex + 1;
    } else if (search < arr[middleIndex]) {
      endIndex = middleIndex - 1;
    } else {
      return middleIndex;
    }
  }
}

module.exports = { sortedSearch };
