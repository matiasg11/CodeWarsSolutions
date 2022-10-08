function periodIsLate(last, today, cycleLength){
  const diffTime = Math.abs(today - last)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return diffDays > cycleLength
}
