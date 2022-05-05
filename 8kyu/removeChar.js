/*It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
You're given one parameter, the original string. You don't have to worry with strings with less than two characters.*/

function removeChar(str){
  let s = str.split("")
 if (str.length>0){
   s.pop()
   s.shift()
 }
  return s.join("")
};


