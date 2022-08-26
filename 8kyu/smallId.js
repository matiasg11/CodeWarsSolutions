function nextId(ids){
  let id = ids.sort((a,b)=>a-b)
  for(let i=0; i<ids.length-1; i++){
    if (id[0]!=0){
      return 0
    }
    if (id[i]+1 != id[i+1]  && id[i]!= id[i+1]){
      console.log(id[i])
      return id[i]+1
    }
    
  }
  
  return ids[ids.length-1]+1;
}
