function bloodAlcoholContent(drinks, weight, sex, time){
  let A = drinks.ounces * drinks.abv
  let r = sex == "male"? 0.73 :0.66
  console.log(drinks, A, sex, r, time)
  return +(((A*(5.14/weight)*r)) - 0.015*time).toFixed(4)
}
