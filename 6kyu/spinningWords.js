/*Description:
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"*/

function spinWords(string){
  //TODO Have fun :)
  let array = string.split(" ")  //Split each word in the array
  let stringy = []  //Create a new array to store the string with reversed words
  for (let i = 0; i<array.length; i++){
    if (array[i].length >=5){   //Check the words longer than 5 characters
      
      drow = array[i].split("").reverse().join("")  //Split them into letters, reverse and join
      stringy.push(drow)//push into the new array
    }
    else {
      stringy.push(array[i])  //The unreversed words have to be included as well
    }
  }
  return stringy.join(" ")  //return the joint 
}
