function createStudentProfile(name, age, grade) {
   // Return an object with name, age, and grade
   if (typeof name != 'string' || age <= 5 || !grade.endsWith("th")) {
      return "Invalid input";
   }
   return {
      name: name,
      age: age,
      grade: grade,
   };
}
let result = createStudentProfile('Mike', 6, '7th')
// console.log(result)

const obj = {
   'name': 'Chirag',
   age:23
}
// const arr = Array.from(obj.age)
// console.log(arr)
// for(let key in obj){
//    console.log(`${key}, ${obj[key]}`)
// }
// console.log(Object.entries(obj))

// console.log(Boolean(undefined), Boolean(null))

const object = {
   user:{
      address:{
         city:'New York'
      }
   }
}

function getNestedValue(obj, keyPath) {
   // Return the value from the nested object based on keyPath
   console.log('keypath', keyPath)
   console.log(JSON.parse(keyPath))
}

// const value = getNestedValue(object,'user.address.city')
// console.log(value)


let amount = 1299
function applyDiscount(amount){
   // Convert to number
   amount = Number(amount)
   if(amount > 1000){
      return Math.ceil(amount * 0.9)
   }
   else return amount
}

const finalAmount = applyDiscount(amount)
// console.log(finalAmount)

const userActivity = [
   {user: 'Chirag', activityCaount:45}, 
   {user: 'Davis', activityCaount:99}, 
   {user: 'Charlie', activityCaount:78}
]
// Find the most active user using redue

// Generate report of total expenses of individual category
// {Food: 80, Utilities: 150}
let expenses = [
   { description: "Groceries", amount: 50, category: "Food" },
   { description: "Electricity Bill", amount: 100, category: "Utilities" },
   { description: "Dinner", amount: 30, category: "Food" },
   { description: "Internet Bill", amount: 50, category: "Utilities" },
];



// Get the incomplete tasks in a sorted way according to priority
let tasks = [
   { description: "Write report", completed: false, priority: 2 },
   { description: "Send email", completed: true, priority: 3 },
   { description: "Prepare presentation", completed: false, priority: 1 },
];
 


// Give a report with average movie rating

let movieRatings = [
   {title: 'Movie A', ratings: [4, 5, 3]},
   {title: 'Movie B', ratings: [5, 5, 4]},
   {title: 'Movie C', ratings: [3, 4, 2]},
]

const report = movieRatings.map( (movie) => {
   const average = 0 || movie.ratings.reduce( (sum, cur) => sum + cur, 0)/movie.ratings.length
   return {title:movie.title, averageRating:average.toFixed(2)}
})

console.log(report)


let person1 = {
   personsName : 'ravi', 
   greet: function(){
      console.log(`Hello, ${this.personsName}`)
   }
}

let person2 = {
   personsName: 'Hitesh'
}

person1.greet.call(person2)
person1.greet.call( {personsName: 'Chirag'})

// Bind
// https://app.eraser.io/workspace/tDSQohysDkk7i9cioQGX

// 23 FEB - https://app.eraser.io/workspace/tDSQohysDkk7i9cioQGX
// HTML - https://app.eraser.io/workspace/iZgXlFx51QbosAoxqrUQ
// CSS Grids - https://app.eraser.io/workspace/pjz1SKuhQJ43kxOr63Hr
// Polyfill - https://app.eraser.io/workspace/fvOzneJ3s0olaYoetMru
// Object Proptype - https://app.eraser.io/workspace/MSKrHtmZxpvUgZqn5qGq
