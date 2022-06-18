function tourney(array) {
  
    if (array.length < 2) return [array]
    
    let answer = array.length % 2 ? array.slice(-1) : []

    for (let i = 0; i < array.length - 1; i += 2) {
       array[i] < array[i+1] ? answer.push(array[i+1]) : answer.push(array[i]) 
    }

    return [array].concat(tourney(answer))
}
