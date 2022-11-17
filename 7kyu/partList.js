function partlist(arr) {
    let result = []
    for (let i=1; i<arr.length; i++){
      let aux = [arr.slice(0,i).join(" "), arr.slice(i).join(" ")]
      result.push(aux)
    }
  return result
}
