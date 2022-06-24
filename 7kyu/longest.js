function longest(s1, s2) {
 let result = s1.concat(s2)
 result = new Set(result)
  let answer = []
 for (element of result){
   answer.push(element)
 } 
  return answer.sort((a,b)=>a.localeCompare(b)).join("")
}
