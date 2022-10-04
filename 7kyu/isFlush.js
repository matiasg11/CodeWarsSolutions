function isFlush(cards) {
  let result = cards.every((a)=>a.includes("S")) || (cards.every((a)=>a.includes("D"))) || (cards.every((a)=>a.includes("C"))) || cards.every((a)=>a.includes("H"))
  console.log(result)
  return result ;
}
