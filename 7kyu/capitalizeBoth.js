function capitalize(s){
  let a1 = [], a2 = []
  
  for (let i=0; i<s.length; i++){
    if (i%2 == 0){
      a1.push(s[i].toUpperCase())
      a2.push(s[i].toLowerCase())
    }else{
      a2.push(s[i].toUpperCase())
      a1.push(s[i].toLowerCase())
    }
  }
  return [a1.join(""), a2.join("")]
};
