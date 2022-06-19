function fuelPrice(litres, pricePerLitre) {
 let discount = Math.floor(litres/2)*0.05
 if (discount > 0.25){
   discount = 0.25
 }
  
  return (Math.round(litres*(pricePerLitre-discount)*100))/100
 
}
