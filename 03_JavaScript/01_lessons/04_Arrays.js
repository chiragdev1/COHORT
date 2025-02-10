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

// Practice all array methods

// Adding elements

// add new element at the end
teas.push('Orange Tea')
// add new element at the start/beginning
teas.unshift('Dandelion Tea')
// in the middle
teas.splice(3,0, 'Jasmine Tea')


// REMOVE element
// from the end
teas.pop()
// from the start
teas.shift()
// from middle
teas.splice(2,1)

// UPdate element
teas[1] = 'Dandelion Tea'
console.log(teas)

// Static methods
// forEach, map, filter, sort, reduce, from, isArray, at, concat, copyWithin, entries, every, fill, filter, find, findIndex, findLast, findLastIndex, flat, flatMap, includes, indexOf, join, keys, lastIndexOf, pop, push, reduce, reduceRight, reverse, shift, slice, some, toLocaleString, toREversed, toSorted, toSpliced, toString, unshift, values, with,

console.log(Array(2,3,4,5))