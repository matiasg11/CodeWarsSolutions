/*A myriad of 8kyu katas*/

//Write a function which converts the input string to uppercase.

function makeUpperCase(str) {
 return str.toUpperCase()
}

//Complete the solution so that it reverses the string passed into it.

function solution(str){
  return str.split("").reverse().join("")
}

//Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.
function getChar(c){
  return String.fromCharCode(c)
}

//Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
const quarterOf = (month) => {
  return Math.ceil(month/3)
  
}


//Very simple, given an integer or a floating-point number, find its opposite.
function opposite(number) {
  return (-number)
}
