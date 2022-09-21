function rowWeights(array){
  let w1 = array.filter((a,i)=> i%2 == 0).reduce((acc, b) => acc+b,0)
  let w2 = array.filter((a,i)=> i%2 == 1).reduce((acc, b) => acc+b,0)
  return [w1,w2]
}
