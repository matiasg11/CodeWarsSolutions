//Take an array and log the proportion of positives, negatives and zeros.

function plusMinus(arr) {
    let pos = 0, neg = 0, zero = 0
    for (let i = 0; i<arr.length; i++){
        if (arr[i]>0){
            pos++
        }else if (arr[i]<0){
            neg++
        }else{
            zero++
        }
    }
    
    let posR = (pos/arr.length).toFixed(6)
    let negR = (neg/arr.length).toFixed(6)
    let zeroR = (zero/arr.length).toFixed(6)
    
    console.log(posR)
    console.log(negR)
    console.log(zeroR)

}
