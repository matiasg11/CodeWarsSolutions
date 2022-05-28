    


function candiesToBuy( kids ){
  
  //I need to give the same amount of candy to each kid. 
  //The kata asks for the minimum amount to buy, so you can give them the same amount to each one. 
  //No candy left behind!
  //In math terms, I have to find the minimum common multiple from 1 to the number of kids.
  function leastCommonMultiple(min, max) {
    function range(min, max) {
        let arr = [];
        for (let i = min; i <= max; i++) {  //I make an array of numbers from min to max
            arr.push(i);
        }
        return arr;
    }

    function gcd(a, b) {
        return !b ? a : gcd(b, a % b);  //Calculation of the greatest common denominator
    }

    function lcm(a, b) {
        return (a * b) / gcd(a, b);   //Calculation of the least common denominator (which is the multiplication divided by the GCD)
    }

    let multiple = min;
    range(min, max).forEach(function(n) {   //Calculate the least common denominator for each number in the range.
        multiple = lcm(multiple, n);
    });

    return multiple;
}

return leastCommonMultiple(1, kids);  //Calculate all this between 1 and the number of kids. 
  }
