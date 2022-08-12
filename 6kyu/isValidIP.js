function isValidIP(str) {
  let strings = str.split(".")
  for (let i=0; i<strings.length; i++){
    if (parseInt(strings[i]) != strings[i]){
      return false
    }
    if (/\n/.test(str) || / /.test(str)){
      return false
    }
    if ((strings[i]>0 && strings[i].startsWith("0")) ||(strings[i]==0 && strings[i].length != 1)) {
      return false
    }
  }
  return (strings.every((a)=> a>=0 && a<=255) && strings.length == 4)
}
