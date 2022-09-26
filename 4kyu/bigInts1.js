function sumStrings(a, b) {
    var result = ''
    var carry = 0  //We are going to sum number by number. Therefore I need to know if I have to carry an unit.
  //Both numbers to be summed are split to become an array. 
  a = a.split('')
  b = b.split('')
  
  //While one of the numbers has still digits to be summed...
  while (a.length>0 || b.length>0 || carry>0) {
    //The carry would be the "units" summed from both numbers
    carry += ~~a.pop() + ~~b.pop() //The double tilde is a faster substitute for Math.floor 
    result = carry % 10 + result
    carry = carry > 9
  }

  
  while (result[0]==0){
   result = result.split("")
    result.shift()
   result = result.join("")
  }
  return result
}
