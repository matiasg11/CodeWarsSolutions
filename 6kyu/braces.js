function validBraces(braces){
  //Input: string
  //Check if every brace open is closed in the correct place.
  //There is a way to do it with with +1 and -1 values, but I like making them together and deleting them.
  let array = braces.split("")  //I make it into an array to manipulate each character
  
  for (let m=0; m<10; m++){
    if (array.length>0){
      for(let i=0; i<array.length; i++){
        if (array[i]=="(" && array[i+1]==")"){
        array.splice(i,2)
    }
        if (array[i]=="[" && array[i+1]=="]"){
            array.splice(i,2)
    }
        if (array[i]=="{" && array[i+1]=="}"){
            array.splice(i,2)
    }
  }
  }}
  
  
  //Output: Boolean
  return array.length == 0 ? true:false
}
