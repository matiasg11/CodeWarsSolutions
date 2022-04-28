/*Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1*/

function sameCase(a, b){
  let regex = /[A-Za-z]/
  let mayus = /[A-Z]/
  let minus = /[a-z]/
  if (regex.test(a)==true && regex.test(b)==true){
    if (minus.test(a)==minus.test(b)||mayus.test(a)==mayus.test(b)){
      return 1
  } else{
    return 0
  }}
  else {
  return -1;}
}
