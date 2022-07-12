function solution(str){
  //Make it even
  if (str.length % 2 != 0){
     str = str+"_"
   }
  
  let result = []
  let array = str.split("")
  
  for(let i=0; i<str.length; i+=2){
      result.push([array[i],array[i+1]].join(""))
  }
  
  return result
  
}
