const arr  =[1,2,3,4,5,6,7,8]
const arr2 = ['a', 'b', 'c', 'd']

// const whichArrWillBePassedInThis = arr.map( (item) => console.log(item), arr2) // we cannot pass this manually, it picks the arr we called the map method on. NO Override/

// Find the most active user
userActivity = [
   {user: 'Chirag', activityCount: 9},
   {user: 'Anirudh', activityCount: 49},
   {user: 'Kashish', activityCount: 66}
]

const mostActiveUser = userActivity.reduce( (maxUser, user) => {
    maxUser = maxUser.activityCount < user.activityCount ? user : maxUser
    return maxUser
})

// console.log(mostActiveUser)


// CAtegory wise expense report
const expenses = [
   {desciption: 'Groceries', amount: 200, category: 'Food'},
   {desciption: 'Electricity Bill', amount: 2000, category: 'Utilities'},
   {desciption: 'Dinner', amount: 300, category: 'Food'},
   {desciption: 'Internet Bill', amount: 500, category: 'Health'},
   {desciption: 'Internet Bill', amount: 500, category: 'Utilities'},
   {desciption: 'Internet Bill', amount: 500, category: 'Utilities'},
   {desciption: 'Internet Bill', amount: 5000, category: 'Investment'},
   {desciption: 'Internet Bill', amount: 300, category: 'Transport'},
   {desciption: 'Internet Bill', amount: 5000, category: 'Investment'},
   {desciption: 'Internet Bill', amount: 300, category: 'Transport'},
]

const categoryTotalExpense = expenses.reduce( (report, expense) => {
   const existingObject = report.find( item => item.hasOwnProperty(expense.category))

   if(existingObject){
      existingObject[expense.category] += expense.amount
   }else {
      report.push( {[expense.category]: expense.amount} )
   }

   // report[expense.category] += expense.amount 
   return report

}, [])

const categoryTotal = expenses.reduce( (report, expense) => {
   // const isAlreadyAdded = report.hasOwnProperty(expense.category)

   // if(isAlreadyAdded){
   //    report[expense.category] += expense.amount
   // }else {
   //    report[expense.category] = expense.amount
   // }
   report[expense.category] = (report[expense.category] || 0) + expense.amount
   return report
}, {})

console.log(categoryTotalExpense)
console.log(categoryTotal)
const expectedResult = [
   {Food: 500},
   {Utilities: 2500}
]