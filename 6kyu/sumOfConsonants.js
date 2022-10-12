function solve(s) {
 let m = s.replace(/[aeiou]/gi, " ").trim()
 let f = m.split(" ")
 let n = f.map((a)=>a.split(""))
 
 for (let i=0; i<n.length; i++){
   for (let j=0; j<n[i].length; j++){
     n[i][j] = n[i][j].charCodeAt(0)-96
   }
 }

  for (let i=0; i<n.length; i++){
    n[i] = n[i].reduce((a,b)=>a+b,0)
  }
  return Math.max(...n)
};
