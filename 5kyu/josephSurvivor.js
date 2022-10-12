function josephusSurvivor(n,k){
  let g = []
  for(let i=1; i<=n ; i++){
    g.push(i)
  }
  let p = 0
  while (g.length>1){
    p = (p + k - 1) % g.length
    g.splice(p,1) 
  }
  return g[0]
}
