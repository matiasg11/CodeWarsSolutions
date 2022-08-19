var capitals = function (word) {
	let m = word.split("")
  let result = []
  for(let i=0; i<m.length; i++){
    if (m[i]== m[i].toUpperCase()){
      result.push(i)
    }
  }
  return result
};
