unction isValidChess960 (pieces) {
  if ((pieces.lastIndexOf("R") > pieces.lastIndexOf("K") && pieces.indexOf("R") < pieces.lastIndexOf("K")) && (pieces.lastIndexOf("B")%2 == 0 && pieces.indexOf("B")%2 != 0 || pieces.indexOf("B")%2 == 0 && pieces.lastIndexOf("B")%2 != 0)){
  return true
    }else{
    return false
}}
