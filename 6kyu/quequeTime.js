function queueTime(customers, n) {
  let q = []
  
  //Build an array of lengths for each queue
  for(let i=0; i<n; i++){
    q.push(0)
  }
  
  //Take each customer and add it to a queue. Always to the shortest queue.
  //Then the longest queue will be the total time.
  while (customers.length>0){
    q = q.sort((a,b)=>a-b)
    q[0] += (customers.shift())
  }
  
  return Math.max(...q)
  
}
