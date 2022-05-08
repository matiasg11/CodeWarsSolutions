/*We need the ability to divide an unknown integer into a given number of even parts — or at least as even as they can be. The sum of the parts should be the original value, but each part should be an integer, and they should be as close as possible.

Example code:

splitInteger(20, 6)  // returns [3, 3, 3, 3, 4, 4]
Complete the function so that it returns an array of integer representing the parts. Ignoring the order of the parts, there is only one valid solution for each input to your function!

(Also, there is no reason to test for edge cases: the input to your function will always be valid for this kata.)*/

/**
 * Returns a [parts]-length array of equal or nearly equal
 * integers that add up to [num].
 */
var splitInteger = function(num, parts) {
  let value = Math.floor(num/parts)
  let ans = []
  for (let i=0; i<parts; i++){
    ans.push(value)
  }
  
  
  
  for (let i = ans.length-1; i>0;  i--){
    if (ans.reduce((acc, val)=> (acc+val),0) == num){
      return ans
    }else {
      ans[i]++
    }
  }
  return ans
}

//This has been my most vomity code so far. Frankenstein couldn't make it better
