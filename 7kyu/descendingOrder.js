/*Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321*/


function descendingOrder(n){
  //First, separate the number into its digits
  let arr = n.toString().split("")
  //Then make the largest number possible, aka sort them from largest to smallest
  let num = arr.sort((a,b)=>b-a)
  //Return the complete number,  as a number
  return parseInt(num.join(""))
}
