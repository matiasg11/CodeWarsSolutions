

function partsSums(ls) {
  
  
    let total = ls.reduce((a,b)=>a+b,0)
    let result = [total]

    for(let i=0;i<ls.length; i++){
      total = total - ls[i]
      result.push(total)
    }
  
  //result.push(0)
  return result
}
