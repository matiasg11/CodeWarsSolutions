// Return the output array, and ignore all non-op characters
function parse( data )
{
 let ans = [] 
 let value = 0
 for (let i=0; i<data.length; i++){
   switch(data[i]){
       case "i":
          value=value+1
          break;
       
       case "s":
          value *= value
          break;
       
       case "d":
          value--
          break;
       
       case "o":
          ans.push(value)
          
          break;
   }
 }
  return ans
}
