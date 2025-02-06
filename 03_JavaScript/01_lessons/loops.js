const teas = ['green', 'oolong', 'white', 'rose', 'ginger', 'mint', 'chamomile']

for(let i=0; i<teas.length; i++) {
   console.log(`Tea at index ${i} is ${teas[i]}`)
}


let myArray = [1,2,3,4,5,6]

function sumOfArray(array) {
   let sum = 0;
   for(let h=0; h<array.length; h++){
      sum = sum + array[h]
   }
   return sum;
}

console.log(sumOfArray(myArray))
console.log(!(2020%4) )