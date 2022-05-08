/*The alphabetized kata
Re-order the characters of a string, so that they are concatenated into a new string in "case-insensitively-alphabetical-order-of-appearance" order. Whitespace and punctuation shall simply be removed!

The input is restricted to contain no numerals and only words containing the english alphabet letters.

Example:

alphabetized("The Holy Bible") // "BbeehHilloTy"*/

function alphabetized(s) {
  let string = s.split("")
  let result = []
  for (let i = 65; i<=90; i++){
    for (let j = 0; j<string.length; j++){
      if (string[j].toUpperCase()==String.fromCharCode(i)){    
        //Now I see it could be also done with charCodeAt. 
        //I spent a lot of time looking for this inverse function, but at least I learnt something new
        result.push(string[j])
      }
    }
  }
  return result.join("")
}
