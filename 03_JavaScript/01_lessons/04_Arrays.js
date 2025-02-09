foodList = ['Burger','apple','salad']

newFoodList = foodList.filter((food) => food !== 'Burger')
console.log(newFoodList) // ['apple','salad']

// find the index of an 'apple' in foodList
index = foodList.findIndex((food) => food === 'apple')
// console.log(foodList.indexOf('apple')) // 1

let teas = ['Green Tea', 'Oolong Tea', 'White Tea', 'Rose Tea', 'Ginger Tea', 'Mint Tea', 'Chamomile Tea']

let longestTeaName = ''
for(let i=0;i<teas.length;i++){
   if(teas[i].length >longestTeaName.length){
      longestTeaName = teas[i]
   }
}
console.log(longestTeaName)
console.log(teas)