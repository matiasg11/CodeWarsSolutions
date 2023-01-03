//For an array with an odd number of elements, find the median.

function findMedian(arr) {

    //The input array has an odd number of elements.
    //Its length will be odd and, since the first element is in position 0, 
    //I need to answer with the next entire number after half the length
    let pos = Math.ceil(arr.length/2)
    //The input is unsorted => then sort it
    let a  = arr.sort((a,b)=> a-b)
     return (Number(a[pos]))
}
