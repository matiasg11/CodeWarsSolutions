function getAge(birthDate, nowDate) {
  if (birthDate == undefined || nowDate == undefined){
    return 1
  }
  let age = nowDate.getFullYear() - birthDate.getFullYear()
 if (nowDate.getMonth() < birthDate.getMonth() || (nowDate.getMonth() == birthDate.getMonth() && nowDate.getDate() < birthDate.getDate())) {
  age--;
}
  
  return age
}
//First calculate it roughly and then check if the person already had its birthday for the year. 
