

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

function calculateGrade(score) {
   if(score >= 90){
      return 'A'
   } else if(score >= 80) {
      return 'B'
   } else if(score >= 70) {
      return 'C'
   }else if(score >= 60) {
      return 'D'
   }else return 'F'
}
let marks = 59

const grade = calculateGrade(marks)
console.log(grade)