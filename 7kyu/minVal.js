function minValue(values){
  return m = Number(Array.from(new Set(values)).sort((a,b)=>a-b).join(""))
}
