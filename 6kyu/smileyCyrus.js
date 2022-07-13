//return the total number of smiling faces in the array
function countSmileys(arr) {
  let s1 = [":)"
  ,":D"
  ,";)"
  ,";D"
  , ":-)"
  , ":-D"
  , ";-)"
  , ";-D" 
  , ":~)"
  , ":~D"
  , ";~)"
  , ";~D"]
  
  let smiley = 0
  
  for(let i=0; i<arr.length; i++){
    if (s1.includes(arr[i])){
      smiley++
    }
  }
  
  return smiley
  
}
