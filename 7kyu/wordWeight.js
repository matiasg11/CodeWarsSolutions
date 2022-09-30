function wordsToMarks(string){
  let s = string.split("")
  let m = s.map((a,i)=> string.charCodeAt(i)).reduce((acc,b)=>acc+b,0) - 96*s.length
  return m
  
}
