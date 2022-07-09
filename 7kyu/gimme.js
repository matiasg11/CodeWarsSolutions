function gimme (triplet) {
  let tri = []
  
  for(let i=0; i<triplet.length; i++){
    tri[i]=triplet[i]
  }
  tri = tri.sort((a,b)=>a-b)
  return triplet.indexOf(tri[1])
}
