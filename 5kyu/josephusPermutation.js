function josephus(n,k){
//   let g = []
  let result = []
//   for(let i=1; i<=n ; i++){
//     g.push(i)
//   }
  let p = 0
  while (n.length>=1){
    p = (p + k - 1) % n.length
    result.push(n[p])
    n.splice(p,1)
  }
  
  return result
}
