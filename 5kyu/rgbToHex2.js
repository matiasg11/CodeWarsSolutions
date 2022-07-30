function rgb(r, g, b){
  
  let R = toHex(r)
  let G = toHex(g)
  let B = toHex(b)
  
  return `${R}${G}${B}`
  
  
}

function toHex(rgb){
  let m = Math.floor(rgb/16)
  let n = rgb%16
  
  if (m<0){
    m=0
  }
  if (n<0){
    n=0
  }
  if(m>15){
    m=15
    n=15
  }
 
  
  switch (m){
      case 10:
      m="A";
      break;
      case 11:
      m="B"
      break;
      case 12:
      m="C"
      break;
      case 13:
      m="D"
      break;
      case 14:
      m="E"
      break;
      case 15:
      m="F"
      break;
  }
  switch (n){
      case 10:
      n="A";
      break;
      case 11:
      n="B"
      break;
      case 12:
      n="C"
      break;
      case 13:
      n="D"
      break;
      case 14:
      n="E"
      break;
      case 15:
      n="F"
      break;
  }
  
  return `${m}${n}`
  }
