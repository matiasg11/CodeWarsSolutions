function reverseLetter(str) {
  let ans = []
  for (let i=str.length-1; i>=0; i--){
    if (/[a-zA-Z]/.test(str[i])){
      ans.push(str[i])
    }
  }
  return ans.join("")
}
