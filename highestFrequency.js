function highestFrequency(strings) {
    
  const frequencies = {}
  let maxFrequency = 0
  let mostFrequentString = strings[0];
  
  for (let str of strings) {
      if (frequencies[str] === undefined) {
          frequencies[str] = 1;
      } else {
          if (frequencies[str] > maxFrequency) {
              maxFrequency = frequencies[str];
              mostFrequentString = str;
          }
      }
  }

  return mostFrequentString;
}

module.exports = {highestFrequency}