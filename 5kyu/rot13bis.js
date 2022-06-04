function rot13(str) {
  let arr = str.split("")
  let decypher = []
  for (let i=0; i<arr.length; i++){
    if (arr[i].charCodeAt() < 123 && arr[i].charCodeAt()>96){
      let code = (arr[i].charCodeAt()+13)>122 ? (arr[i].charCodeAt()-13) : (arr[i].charCodeAt()+13)
      console.log(arr[i],code, String.fromCharCode(code))
      decypher.push(String.fromCharCode(code))
      }
    else if (arr[i].charCodeAt() < 91 && arr[i].charCodeAt()>64){
      let code = (arr[i].charCodeAt()+13)>90 ? (arr[i].charCodeAt()-13) : (arr[i].charCodeAt()+13)
      console.log(arr[i],code, String.fromCharCode(code))
      
      decypher.push(String.fromCharCode(code))
      }
    else{
      decypher.push(arr[i])
    }
  
  }
  return decypher.join("")
}
//Double work to be useful for both lowercase and uppercase.