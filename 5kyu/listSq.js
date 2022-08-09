function listSquared(m, n) {
    let answer = []
    for (let i=m; i<=n; i++){
      let divisors = []
        for(let j=1; j<=n; j++){
          if (i%j == 0 ){
            divisors.push(j)
          }
        }
      let sq = divisors.map((a)=> a**2).reduce((b,c)=>b+c,0)
      let root = Math.sqrt(sq)
      if (root%1==0){
        answer.push([i,sq])
      }
    }
  return answer
}
