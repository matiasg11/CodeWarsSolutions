function choreAssignment(chores) {
  chores = chores.sort((a,b)=>a-b)
  let result = []
  let j = chores.length-1
  let i = 0
  for (; i<j;i++){
    result.push(chores[i]+chores[j])
    j--
  }
  return result.sort((a,b)=>a-b)
}
