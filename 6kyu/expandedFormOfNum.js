function expandedForm(num) {
  num=num.toString().split("")
  
  let dot = num.indexOf(".")
  
  for (let i=0; i<dot; i++){
    if(num[i] != 0){
    num[i] = num[i]*(10**(dot-i-1))
  }}
  for(let i=dot+1; i<num.length; i++){
    if(num[i]!=0) {
    num[i] = `${num[i]}/${10**(i-dot)}`
  }}
  
  num.splice(dot,1)
  while (num.includes("0")){
    num.splice(num.indexOf("0"),1)
  }
  
  let answer = num.join(" + ")
  return answer
  
}
