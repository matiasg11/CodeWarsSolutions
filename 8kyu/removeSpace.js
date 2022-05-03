/*Simple, remove the spaces from the string, then return the resultant string.*/


function noSpace(x){
 let newx = []
 for (let i=0; i<x.length; i++){
   if (x[i]!=" "){
     newx.push(x[i])
   }
 }
  return newx.join("")
}
