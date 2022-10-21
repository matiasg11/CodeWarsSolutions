function digPow(n, p){
  //We have a number n with a number of digits. We need to split this number into several digits.

  //We have a number p, to which the first digit will be powered. Then it goes increasing by 1.

  //Once we have every digit to the correct power, we need to sum that.

  //And finally, check if it is entirely divisible by the first number n
  
  //If it is, the answer is the quotient of that division. If not, return -1
  
  let num = n.toString().split("").map((a)=>parseInt(a))
  for(let i=0; i<num.length; i++){
    num[i]=num[i]**p
    p++
  }
  let sum = num.reduce((a,b)=>a+b,0)
  
  if (sum%n != 0){
    return -1
  }else{
    return sum/n
  }
}
