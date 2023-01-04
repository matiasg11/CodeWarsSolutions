//Return an array with the frequency of the elements

function countingSort(arr) {
    // Write your code here
 
    let result = new Array(100).fill(0)
    arr.map((item) => result[item]++)


    console.log(result)
    return result
}
