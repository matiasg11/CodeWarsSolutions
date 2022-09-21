function validPhoneNumber(phoneNumber){
  
 let p = phoneNumber.split("")
  console.log(phoneNumber)
 let status
 let arr = [1,2,3,6,7,8,10,11,12,13]
 for (let e in arr){
  if (/d/.test(p[e] == false)){
    return false
  }
 }
  if (/\(/.test(p[0]) == false){
      return false
      }
   if (/\)/.test(p[4]) == false){
      return false
      }
    if (/-/.test(p[9]) == false){
      return false
      }
   if (phoneNumber.length != 14){
      return false
      }
 
  return true
}
