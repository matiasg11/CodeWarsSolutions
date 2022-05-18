/*Sixteen circles
Sixteen circles with radius r are placed as shown in the picture. r is an integer and ≥ 1.

circles
Find the radius of the shaded circle in the centre, rounded to two decimal places.*/

function sixteenCircles(r) {
return (Math.round(r*((2**(0.5)+3**(0.5))-2)*100))/100}
