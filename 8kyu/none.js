function none(arr, fun){
  return (arr.every((a)=>fun(a)==false))
}
