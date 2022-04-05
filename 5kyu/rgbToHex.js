/*Description:
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3*/

//Probably there is a one-line version of this code, but I did it all by myself

function rgb(r, g, b){
  // complete this function  
//Check the max value at 255
  if (r >=255){
    r=255;
  }
  if (g >=255){
    g=255;
  }
  if (b >=255){
    b=255;
  }
  //Check the min value at 0
  if (r <0){
    r=0;
  }
  if (g <0){
    g=0;
  }
  if (b <0){
    b=0;
  }
  //Determine the first values of each color
  let r1 = Math.floor(r/16)
  let g1 = Math.floor(g/16)
  let b1 = Math.floor(b/16)
  //Determine the rest of the value
  let r2 = r%16;
  let g2 = g%16;
  let b2 = b%16;
  
  //Create an array with the values
  let array = []
  
  array.push(r1)
  array.push(r2)
  array.push(g1)
  array.push(g2)
  array.push(b1)
  array.push(b2)
  
  //Convert the values into letters if they are above 10
  for (let i=0; i<array.length; i++){
    let num = array[i]
    switch(num){
        case 10:
          array[i] = "A";
          break;
        case 11:
          array[i]  = "B";
          break;
        case 12:
          array[i]  = "C";
          break;
        case 13:
          array[i]  = "D";
          break;
        case 14:
          array[i]  = "E";
          break;
        case 15:
          array[i]  = "F";
          break;
    }
  }
  //Profit
  return array.join("")
  
  
}
