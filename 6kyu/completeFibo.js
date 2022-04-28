/*The function 'fibonacci' should return an array of fibonacci numbers. The function takes a number as an argument to decide how many no. of elements to produce. If the argument is less than or equal to 0 then return empty array

Example:

fibonacci(4) // should return  [0,1,1,2]
fibonacci(-1) // should return []*/

function fibonacci(n) {
   let result = []
   if (n>3){
     result.push(0)
     result.push(1)
     for (let i = 2; i < n; i++){
       result.push(result[i-1]+result[i-2])
     }
  }
  if (n==2){
    result.push(0)
    result.push(1)
  }
  if (n==1){
    result.push(0)
  }
   return result
}
