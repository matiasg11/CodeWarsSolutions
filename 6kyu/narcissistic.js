//MatiasG11
function narcissistic(value) {
  let pot = value.toString().length
  let num = value.toString().split("")
  let count = 0
  
  for (let i=0; i<num.length; i++){
    count += num[i]**pot
  }
  
  return count == value
}
