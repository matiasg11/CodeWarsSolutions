/*Complete the function that takes one argument, a list of words, and returns the length of the longest word in the list.

For example:

['simple', 'is', 'better', 'than', 'complex'] ==> 7
Do not modify the input list.*/

function longest(words) {
  let largo = 0
  for (let i=0; i<words.length; i++){
    if (words[i].length > largo){
      largo = words[i].length
    }
  }
  return largo
}
