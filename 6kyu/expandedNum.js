function expandedForm(num) {
  let number = String(num).split("")
  let result = ""
  
  for (let i=0; i<number.length; i++){
    if (number[i] != 0){
      let partial = number[i] * (10**(number.length-1-i))
      result += `${partial}`
      if (i != (number.length-1)){
        result += ` + `
      }
    }
  }
  return  result.slice(-3) == " + " ? result.slice(0,-3) : result
}
