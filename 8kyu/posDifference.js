function firstToLast(str,c){
 let i = str.indexOf(c)
 let l = str.lastIndexOf(c)
 return (i == -1 || l == -1) ? -1 : l-i
}
