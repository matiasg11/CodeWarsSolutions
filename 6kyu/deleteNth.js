function deleteNth(arr,n){

  let objects = {}
  let array  = arr.filter((a)=> (objects[a] = objects[a]+1 || 1) <= n )
   
 return array
}
//This is more complicated than it seems
