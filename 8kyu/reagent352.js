function isValid(formula){
  if (formula.includes(1) && formula.includes(2)){
    console.log(formula)
    return false
  }
  else if (formula.includes(3) && formula.includes(4)){
    console.log(formula)
    return false
  }
  else if ((formula.includes(5) && !(formula.includes(6)) || ((!formula.includes(5)) && (formula.includes(6))))){
    console.log(formula)
    return false
  } else if (!(formula.includes(7)) && !(formula.includes(8))){
    console.log(formula)
    return false
  }else {
    console.log(formula)
    return true
  }
  
}
