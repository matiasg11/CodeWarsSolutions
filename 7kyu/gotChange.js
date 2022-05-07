/*Create a function that will take any amount of money and break it down to the smallest number of bills as possible. Only integer amounts will be input, NO floats. This function should output a sequence, where each element in the array represents the amount of a certain bill type. The array will be set up in this manner:

array[0] ---> represents $1 bills

array[1] ---> represents $5 bills

array[2] ---> represents $10 bills

array[3] ---> represents $20 bills

array[4] ---> represents $50 bills

array[5] ---> represents $100 bills*/

function giveChange(amount) {
  let cant = amount
  let array = [0,0,0,0,0,0]
  
    array[5] = Math.floor(cant/100)
    cant = cant - array[5]*100
    array[4] = Math.floor(cant/50)
    cant = cant - array[4]*50
    array[3] = Math.floor(cant/20)
    cant = cant - array[3]*20
    array[2] = Math.floor(cant/10)
    cant = cant - array[2]*10
    array[1] = Math.floor(cant/5)
    cant = cant - array[1]*5
    array[0] = Math.floor(cant)
    
  
  return array
}
