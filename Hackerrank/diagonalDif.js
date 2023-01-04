//Calculate the absolute difference between the sums of the 2 main diagonals in a square matrix.

function diagonalDifference(arr) {
    // Write your code here
    let d1 = 0, d2 = 0;
    
    for(let i=0; i<arr.length; i++){
        d1 += parseInt(arr[i][i])
        d2 += parseInt(arr[i][arr.length-i-1])
    }
    
    console.log(Math.abs(d1-d2))
    return Math.abs(d1-d2)
    
}
