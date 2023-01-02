//Sum the minimum of all the elements in the array but 1
//Sum the maximum of all the elements in the array but 1
//Log them both

function miniMaxSum(arr) {
    // Write your code here
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    
    let tot = arr.reduce((acc, val)=> acc+val,0)
    
    console.log(tot-max, tot-min)
    
}
