// To understand prototypes we will create an array
const mySkills = ['HTML', 'CSS', 'Javascript']

// We will add another element using push
mySkills.push('Tailwind CSS')
// We will analyze the baove line carefully
// Why are we using . to access a function(method) in array

// Ususally these . are used to access a property or method of an object. right?
// Howcome we are treating mySkills array as an object on line 5. This is because everything in javascript is an object.
// Next weird thing abiut line 5 is that we are accessing a method push() that we never defined. By that logic we never defined Array, yet we use like anything.
// How?

// this is where prototypes comes in. Someone wrote these objects for us to use and he was kind enough to add the methods we use so much.
// Imagine having to write every bit of logic to add, delete, update, iterate, process every array. It will be interesting but time-consuming.