multiplicationTable = function(size) {
  let table = []
  for (let i=1; i<=size;i++){
    let partial = []
    for(let m=1; m<=size; m++){
      partial.push(m*i)
    }
    table.push(partial)
  }
  console.log(table)
  return table
}
