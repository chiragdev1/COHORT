function multiplyTwoNum(num1, num2) {
   return num1 * num2
}

console.log(typeof multiplyTwoNum)

let numberofGuest = 7
let pizzaSize;

if(numberofGuest <= 2){
   pizzaSize = 'small'
}else if(numberofGuest <= 5) {
   pizzaSize = 'medium'
}else {
   pizzaSize = 'large'
}

console.log(pizzaSize)