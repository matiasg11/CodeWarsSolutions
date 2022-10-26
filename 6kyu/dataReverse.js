function dataReverse(data) {
   let bytes = []
   while (data.length>0){
     bytes.push(data.slice(0,8))
     data.splice(0,8)
   }
  let result = bytes.reverse()
  return result
}

//falta el ultimo giro
