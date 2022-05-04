function order(words){
  //Input: A string of words with numbers in between
  //These numbers represent the order (1-based) where the word should go.
  //The words are separated by spaces. SPLIT
  //LOOP through them to identify the numbers
  //PUSH them into a new array in the correct order
  let substrings = words.split(" ")
  let result = []
  for(let i=1; i<=substrings.length; i++){
    for (let j=0; j<substrings.length; j++){
    if (substrings[j].includes(i)){
      result.push(substrings[j])
    }
  }
    }
  return result.join(" ")
}
