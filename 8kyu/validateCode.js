function validateCode (code) {
  let m = String(code).split("")
  if (m[0]=="1" || m[0]=="2" || m[0] =="3"){
    return true
  }
  return false
}
