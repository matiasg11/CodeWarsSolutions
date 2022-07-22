function validParentheses(parens) {
  let arr = parens.split("")
  
  for (let m=0; m<10;m++){
    if (arr.length>=0){
      for (let i=0; i<arr.length; i++){
        if (arr[i]=="(" && arr[i+1]==")"){
          arr.splice(i,2)
      }}}}
  
  return arr.length == 0 ? true:false
}
