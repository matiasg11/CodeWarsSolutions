function igPay(str){
    arr = str.split(" ")
    pig = []
    for (var i = 0; i < arr.length; i++) { 
        arr[i].match(/^[a-z]+$/i) ? pig.push(arr[i].substring(1) + arr[i][0] + "ay") : pig.push(arr[i])
    }
    return pig.join(' ')
} 
