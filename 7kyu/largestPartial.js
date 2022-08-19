function solution(digits){
  let str = String(digits)
  let partial = 0
  for (let i=0; i<str.length-4; i++){
    if (str.slice(i,i+5) > partial){
      partial = str.slice(i,i+5)
    }
  }
  return parseInt(partial)
}
