String.prototype.camelCase=function(){
  if (this == ""){
    return ""
  }
  let arr = this.trim().split(" ") 
  for (let i = 0; i<arr.length; i++){
    let m = arr[i].split("")
    arr[i] = (m[0].toUpperCase() + m.slice(1).join(""))
    
  }
  return arr.join("")
}
