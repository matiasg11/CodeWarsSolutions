/*In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.
More examples in the test cases.

Good luck!*/

function solve(s){
  let upp = /[A-Z]/
  let low = /[a-z]/
  let num = /\d/
  let spe = /\W/
  
  let result = [0,0,0,0]
  for (let i = 0; i<s.length; i++){
     if (upp.test(s[i])==true){
      result[0]++
    }
     if (low.test(s[i])==true){
      result[1]++
    }    
    if (num.test(s[i])==true){
      result[2]++
    }
     if (spe.test(s[i])==true){
      result[3]++
    }
 }
  return result
}
