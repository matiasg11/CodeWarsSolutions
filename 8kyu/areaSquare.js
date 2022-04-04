/*Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input.
Return the result rounded to two decimals.

Graph*/ 
 
//Important to know: A full perimeter around a circle would be 2*pi*radius. 
//In this case we have a quarter of circle, so the arc A is 1/2 * pi * radius
// What we want to know is radius**2

function squareArea(A){
  return (parseFloat(((2*A/Math.PI)**2).toFixed(2)))
}

//parseFloat to convert to float
//.toFixed(2) to round to 2 decimals
