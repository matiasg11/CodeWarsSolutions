function isPythagoreanTriple(integers) {
  let int = integers.sort((a,b)=>a-b)
  return (Math.sqrt(int[0]**2+int[1]**2) == int[2])
}
