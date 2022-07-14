function DNAtoRNA(dna) {
 let d = dna.split("")
 for(let i=0; i<d.length; i++){
   if (d[i]=="T"){
     d[i]="U"
   }
 }
  return d.join("")
}
Best Practices0Clever0
 0ForkCompare with your solutionLink
