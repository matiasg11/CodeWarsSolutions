//Identify the element only appearing once in the array

function lonelyinteger(a) {

    //There is only one element that appears once.
    //All the rest appear twice (at least)
    //[1,2,3,4,3,2,1] => the element appearing once is 4
    //The position of 4 would be the first and last. I can use that.
    //I have to check if the first time it appears is at the same position than the last time.
    //I also need a set of unique values

    let s = new Set(a)
    for (let e of s) {
        if (a.indexOf(e) == a.lastIndexOf(e)) {
            console.log(e)
            return e
        }
    }
}
