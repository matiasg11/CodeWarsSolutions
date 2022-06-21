function newAvg(arr, newavg) {
   let sum = arr.reduce((a,b)=> a+b,0)
   let final = newavg * (arr.length+1)
   let answer = Math.ceil(final-sum)
   
   return answer > 0 ? answer : error
}
