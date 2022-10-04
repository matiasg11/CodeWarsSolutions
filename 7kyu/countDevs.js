function countDevelopers(list) {
  let eur = list.filter((a)=> (a["continent"]=="Europe" && a["language"]=="JavaScript")).length
  return eur
}
