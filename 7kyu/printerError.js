function printerError(s) {
 s = s.split("")
  let count = 0
  for(let i=0; i<s.length; i++){
    if ("abcdefghijklm".includes(s[i])){
      count++
    }
  }
  return `${s.length-count}/${s.length}`
}
