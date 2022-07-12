function findUniq(arr) {
 //All the numbers are the same except for 1
  //If I take the first three as a sample, I can know which is the regular number.
  //Then I have to find the only one different.
  let reg = 0
  let sub = arr.slice(0,3)
  if(sub[0]==sub[1] || sub[0]==sub[2]){
     reg = sub[0]
  }else if(sub[1]==sub[2]){
     reg = sub[1]
  }
  
  let result = arr.filter((a)=> a != reg)
  return result[0]
}
