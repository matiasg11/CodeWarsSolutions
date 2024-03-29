/*Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case*/


let countBits = function(n) {
  //I need to pass the n to binary and then count the amount of 1s
  //n to binary
  let bin = n.toString(2)
  
  //Count the ones
  let count = 0
  for (let i = 0; i<bin.toString().length; i++){
    if (bin[i]==1){
      count++
    }
  }
  return count
};
