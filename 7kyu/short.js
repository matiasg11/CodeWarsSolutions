function findShort(s){
  let say = s.split(" ")
  say.sort((a,b)=>a.length - b.length)
  
  return say[0].length
}
