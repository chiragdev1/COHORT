
// Typecast a string into number using at least 3 ways. Mention pros, cons and usecases of each

   const str = '29'
   const str2 = '82z'
   const str3 = 'a24'

   const numFromStr = Number(str) // 29
   const numFromStr2 = Number(str2) // NaN
   const numFromStr3 = Number(str3) // NaN
   // Number(str) is used when the string only contains digits (no letters, symbols)

   // parseInt is used when we have a string like '82323jaskdfiadf' where digits preceed letters/symbols and we want only the number part. parseInt will only return a number till last digit (82323).
   const numFromStrUsingParseInt = parseInt(str) // 29
   const numFromStr2UsingParseInt = parseInt(str2) // 82
   // console.log(parseInt('83a82')) // 83
   const numFromStr3UsingParseInt = parseInt(str3) // NaN


// Typecast a number into a string in 3 ways. Mention pros, cons and usecases for each.

   // String, toString, 
   const num = 892
   const str9 = String(num) // '892'
   const str8 = num.toString() // '892'
   const jsonStr = JSON.stringify(num) // '892'
   // console.log(jsonStr, typeof jsonStr) // '892' string

// What is Math in js. Explain its methods, uses, pros, cons.

   // Math is a built in library used to perform mathematical operations like roundoff, max, min, random, floor, ceil

   // Random number between a range
   function randomNumberGenerator(min, max){
      const result = Math.floor(Math.random() * (max - min + 1) + min)
      return result
   }

   // setInterval(() => randomNumberGenerator(10, 20), 500)

   Math.floor(9.01323) // 9
   Math.ceil(9.999) // 10
   // console.log(Math.max(839, 92392, 239239, 23923,9, false)) // 239239
   // console.log(Math.max(839, 92392, 239239, 23923,9, 'false')) // NaN
   // console.log(Math.max(839, 92392, 239239, 23923,9, [1,2,3,4])) // NaN
   // console.log(Math.max(839, 92392, 239239, 23923,9, {isTrue: true})) // NaN
   // console.log(Math.max(0, true )) // 1
   // console.log(Math.max(0, 'true' )) // NaN
   // console.log(Math.max(0, '1' )) // 1
   // console.log(Math.max(0, '18294' )) // 18924

// What is Date and time in JS? Explain its methods, pros, cons, usecases.
   // toLocaleString, toLocaleDateString, toLocaleTimeString, .now, 


// What is object destructuring? How is it done? What can be destructured?

   const testObject = {
      name: 'Chirag',
      age: 32,
      country: 'India'
   }
   // const {name, age} = testObject // Chirag 32
   const { userName, age} = testObject // undefined 32
   // the variable name should be === object key


// You are given an array of expenses. Create a function that returns a report on categoryTotalExpense as [ {}, {}] format.
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

   function CategorywiseExpenses(expenses) {
      const report = []
      // Iterate through the array
      expenses.forEach( (expense) => {

         // Check if category present in report
         const categoryInReport = report.find( (item) => item.hasOwnProperty(expense.category))

         // Update the amount if present and push the category if not present
         if(categoryInReport){
            categoryInReport[expense.category] += expense.amount
         }else {
            report.push( { [expense.category] : expense.amount } )
         }

      })
      // return report
      return report
   }
   const categoryWiseReport = CategorywiseExpenses(expenses)
   // console.log(categoryWiseReport)

// You are given an array of tasks. Your have to return a sorted array of incomplete tasks.
let tasks = [
   { description: "Write report", completed: false, priority: 2 },
   { description: "Send email", completed: true, priority: 3 },
   { description: "Prepare presentation", completed: false, priority: 1 },
   { description: "Complete practice.js", completed: false, priority: 1 },
   { description: "Clear Backlogs", completed: false, priority: 2 },
   { description: "Write Articles", completed: false, priority: 3 },
];

   const sortedIncompleteTasks = tasks
         .filter( (task) => task.completed == false)
         .sort( (a, b) => a.priority - b.priority)
   // console.log(sortedIncompleteTasks)

 //From the given array of movies, Return a array of objects containing movie title and average rating.
let movieRatings = [
   { title: "Now you see me", ratings: [8, 9, 7] },
   { title: "Harry Potter: Sorcerer's Stone", ratings: [5, 5, 4] },
   { title: "Movie C", ratings: [3, 4, 2] },
   { title: "Movie D", ratings: [8, 7, 10] },
   { title: "Movie E", ratings: [5, 7, 4] },
];

const averageMovieRatings = movieRatings.reduce( (report, movie) => {
   const averageRating = (movie.ratings.reduce( (acc, curr) => acc + curr) / movie.ratings.length).toFixed(2)
   report.push( { title: movie.title, avgRating: averageRating })
   return report
},[])

// console.log(averageMovieRatings)


// Sort the following array in ascending and descending order
const rankings = [1, 6, 3, 5, 2, 3, 6, 4, 9, 239, 999, 23, 1, 0, 10, 11]
   rankings.sort( (a,b) => a - b)
   // const descendingRankings = rankings.sort( (a,b) => b - a)
   // console.log(rankings)


// What is call method in JS? How and why is it used? Mention its pros, cons.
   // It is a built in javascript method that allows us to call a function on a object as its method, without adding it in its scope. 
   const person1 = {
      userName: 'Chirag Singhania',
      greet: function(){
         console.log(`Hello ${this.userName}, Welcome aboard!`)
      }
   }

   const person2 = {
      userName: 'Sahil Batra'
   }

   person1.greet()
   person1.greet.call(person2)

// What is bind method in JS? How and why is it used? Mention its pros, cons.

// What is apply method in JS? How and why is it used? Mention its pros, cons.

// What is setTimeout? Where does it come froma? What is it used for? Explain its mechanism and working.

// What is setInterval? Where does it come froma? What is it used for? Explain its mechanism and working.

// What is event Loop? How does it work?

// What is a promise in JS? How does it work? Where is it used.


// What is hoisting? Are let variables hoisted? 

// what is the difference b/w debouncing, throttling, delaying?

// Enable negative indexing in JS.

// What is proxy in JS? What are its uses?

// Read the content of a text file and create a backup.txt file with the same content. Delete the original text file.

// Write custom promise to perform the above task.

// What is async await ? why should i use them instead of promises.

// Explain the following terms: .then .catch .finally try catch finally

// Write a polufill for promise.

