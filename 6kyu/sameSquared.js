/*Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.*/

function comp(array1, array2){
  //I have to check if the elements in array 2 are the square of the elements in array 2
  
  //First the boobie trap: Are they equal in length? 
  if((array1 == null) || (array2 == null) || (array1.length != array2.length) ){
    return false
  }
  
  //Then we check the elements. We can sort them, since both will have to be in the same order.
  let a1 = array1.sort((a,b)=>a-b)
   let a2 = array2.sort((a,b)=>a-b)
   
   for(let i=0; i<a1.length; i++){
     if (a1[i]**2 != a2[i]){
       return false
     }
   }
  
  return true
  
}
