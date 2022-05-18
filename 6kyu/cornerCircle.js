/*A circle with radius r is placed in a right angled corner, where r is an integer and ≥ 1.

circles
What is the radius of the smaller circle, rounded to two decimal places?*/

function cornerCircle(r) {
    return +(r*(3-2*2**(0.5))).toFixed(2)
}
