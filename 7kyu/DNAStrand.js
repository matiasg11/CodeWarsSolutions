function DNAStrand(dna){
  
  let adn = dna.split("")
  let answer = []
  for(let i=0; i<adn.length; i++){
  
  switch (adn[i]){
      case "T":
      answer.push("A")
      break;
      case "A":
      answer.push("T")
      break;
      case "C":
      answer.push("G")
      break;
      case "G":
      answer.push("C")
      break;
  }
    }
  return answer.join("")
}
