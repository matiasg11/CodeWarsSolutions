function switcheroo(x){
  let s = x.split("")
  for (let i=0; i<s.length; i++){
    if (s[i] == "a"){
      s[i] = "b"
      continue
    }
    if (s[i] == "b"){
      s[i]="a"
    }
  }
  return s.join("")
}
