function colourAssociation(array){
  let result = {}
    let arr = []
  for (let i=0; i<array.length; i++){
    let result = {}
    result[String(array[i][0])]=String(array[i][1])
     arr.push(result)
  }
  return arr
  }
