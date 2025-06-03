foodList = ['Burger','apple','salad']

newFoodList = foodList.filter((food) => food !== 'Burger')
// console.log(newFoodList) // ['apple','salad']

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
// console.log(longestTeaName)
// console.log(teas)

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
// console.log(teas)

// Static methods
// forEach, map, filter, sort, reduce, from, isArray, at, concat, copyWithin, entries, every, fill, filter, find, findIndex, findLast, findLastIndex, flat, flatMap, includes, indexOf, join, keys, lastIndexOf, pop, push, reduce, reduceRight, reverse, shift, slice, some, toLocaleString, toREversed, toSorted, toSpliced, toString, unshift, values, with,

// console.log(Array(2,3,4,5))

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const arr2 = ["a", "b", "c", "d"];

// const whichArrWillBePassedInThis = arr.map( (item) => console.log(item), arr2) // we cannot pass this manually, it picks the arr we called the map method on. NO Override/

// Find the most active user
userActivity = [
   { user: "Chirag", activityCount: 9 },
   { user: "Anirudh", activityCount: 49 },
   { user: "Kashish", activityCount: 66 },
];

const mostActiveUser = userActivity.reduce((maxUser, user) => {
   maxUser = maxUser.activityCount < user.activityCount ? user : maxUser;
   return maxUser;
});

// console.log(mostActiveUser)

// CAtegory wise expense report
const expenses = [
   { desciption: "Groceries", amount: 200, category: "Food" },
   { desciption: "Electricity Bill", amount: 2000, category: "Utilities" },
   { desciption: "Dinner", amount: 300, category: "Food" },
   { desciption: "Internet Bill", amount: 500, category: "Health" },
   { desciption: "Internet Bill", amount: 500, category: "Utilities" },
   { desciption: "Internet Bill", amount: 500, category: "Utilities" },
   { desciption: "Internet Bill", amount: 5000, category: "Investment" },
   { desciption: "Internet Bill", amount: 300, category: "Transport" },
   { desciption: "Internet Bill", amount: 5000, category: "Investment" },
   { desciption: "Internet Bill", amount: 300, category: "Transport" },
];

const categoryTotalExpense = expenses.reduce((report, expense) => {
   // const existingObject = report.find( item => item.hasOwnProperty(expense.category))

   // if(existingObject){
   //    existingObject[expense.category] += expense.amount
   // }else {
   //    report.push( {[expense.category]: expense.amount} )
   // }

   report[expense.category] += expense.amount;
   return report;
}, []);

const categoryTotal = expenses.reduce((report, expense) => {
   // const isAlreadyAdded = report.hasOwnProperty(expense.category)

   // if(isAlreadyAdded){
   //    report[expense.category] += expense.amount
   // }else {
   //    report[expense.category] = expense.amount
   // }
   report[expense.category] = (report[expense.category] || 0) + expense.amount;
   return report;
}, {});

// console.log(categoryTotal);
// console.log(categoryTotalExpense)
const expectedResult = [{ Food: 500 }, { Utilities: 2500 }];

// Get the incomplete tasks in a sorted way according to priority
let tasks = [
   { description: "Write report", completed: false, priority: 2 },
   { description: "Send email", completed: true, priority: 3 },
   { description: "Prepare presentation", completed: false, priority: 1 },
];

const sortedIncompleteTasks = 
      tasks.filter( task => task.completed == false)
      .sort( (task1, task2) => task1.priority - task2.priority)

// console.log(sortedIncompleteTasks)

// Get avergae movie rating
let movieRatings = [
   { title: "Movie A", ratings: [4, 5, 3] },
   { title: "Movie B", ratings: [5, 5, 4] },
   { title: "Movie C", ratings: [3, 4, 2] },
   { title: "Movie D", ratings: [8, 7, 10] },
   { title: "Movie E", ratings: [5, 7, 4] },
];
const averageMovieRatings = movieRatings.map( (movie) => {
   const report = []
   const averageRating = (movie.ratings.reduce( (sum, rating) => sum + rating)/movie.ratings.length).toFixed(2)
   report.push( {title: movie.title, averageRating: averageRating} )
   return report
})

console.log(averageMovieRatings)