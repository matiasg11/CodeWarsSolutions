function inArray(array1,array2){
  return array1.filter((x) => array2.some((y) => y.includes(x))).sort()
}

//Filtro los elementos "X" del array 1 tales que "algunos elementos del array 2" incluyan a tal elemento X
//Ordenarlos alfabeticamente
