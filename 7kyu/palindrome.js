var palindromeChainLength = function(n) {
  let counter = 0
  while (isPalindrome(n) == false){
    let m = Number(String(n).split("").reverse().join(""))
    n = n+m
    counter++
  }
  return counter;
};

function isPalindrome(n){
  let str = String(n)
  let rts = String(n).split("").reverse().join("")
  return str == rts
}
