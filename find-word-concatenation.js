


function find_word_concat(str, words) {
  if (words.length === 0 || words[0].length === 0) {
    return []
  }

  let wordFrequency = {};

  words.forEach(word => {
    if (!(word in wordFrequency)) {
      wordFrequency[word] = 0;
    }
    wordFrequency[word] += 1
  }) 

  const resultIndices = [],
        wordsCount = words.length;
        wordLength = word[0].length;

  for (let i = 0; i < (str.length - wordsCount * wordLength) + 1; i++) {
    const wordSeen = {};
    for (let j = 0; j < wordsCount; j++) {
      next_word_index = i + j * wordLength;
    word = str.substring(next_word_index, next_word_index + wordLength);
    if (!(word in wordFrequency)) {
      break;
    }

    if (!(word in wordSeen)) {
      wordSeen[word] = 0
    }
    wordSeen[word] += 1;
   }

   if (wordSeen[word] > (wordFrequency[word] || 0)) {
     break;
   }
    
   if (j + 1 === wordsCount) {
     resultIndices.push(i) 
   } 
  }      
  return resultIndices;
}

console.log(find_word_concat('catfoxcat', ['cat', 'fox']));

