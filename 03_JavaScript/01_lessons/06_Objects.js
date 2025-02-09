// An object is a representation of real-world object like car, person, laptop. It consist of key:value pairs. In a nutshell, everything in javascript is an instance of object.

const user = {
   x: 10,
   firstName: 'Chirag',
   lastName: 'Arora',
   age: 23,

}
// console.log(user)

// Adding a new key:value pair to user
user.height = 182 // 

// Deleting lastName from person
delete user.lastName

// task: Create a user1 with the above properties, copy this user to user2 and change the name os user2 to Sahil. Print both objects.

const user1 = {
   id:9232,
   firstName: 'Chirag',
   age: 23
}

const user2 = user1

user2.firstName = 'Sahil' // Now both user1 and user2 have the firstName= Sahil. Why?

// This is where the concept of stack and heap memory comes in. 
// The stack stores variables. If the value is a static value(string, number, boolean) then it is stored in stack memory. But if it is an dynamic(array or object which can grow dynamically after declaration) then stack stores the address of this array. This address comes from HEAP memory.
// When we say const user2 = user1, then the user2 stores the address of user1 in the stack. Therefore any changes made in either one is reflected in both.

// Solution
// Use spread operator (...) this comes in handy when the object has thousands of properties and methods(believe me they do) we cannot copy each property manually. So a kind develper made spread operator to save our time. Thank god he did.
const user3 = {
   ...user1
}
user3.firstName = 'Chirag'
// Now both have different heap memory address

// BUT what if we add andother object to the user1 as property
user1.address = {
   h:2,
   s:21,
   city:'Delhi'
}

const user4 = {
   ...user1
}
// Lets change the address of user4
user4.address.h = 45 // change is reflected in both user1 and user4 beacouse the heap address of of both the address property is same.
// This type of copy is called shallow copy. Here only static properties are given new address. Now what about dynamic properties. Is there a way to solve this?

//spread operator is not the answer

// JSON comes to the rescue. It adds more steps and ocupy more memory but it creates a deep copy(everything property and method has different heap address)

// First we convert the user1 into a static dataStructure (string)
const user1KaString = JSON.stringify(user1)
// Second convert it back into object and store it in user5
const user5 = JSON.parse(user1KaString)

// Lets see if it worked🤔

user5.address.h = 99 // Hooray it works😁

// Fun fact: This conversion of object to string is called SERIALIZATION (heavy word). And string to object is called (think about it) ............................DESERIALIZATION


console.log(user1)
console.log(user1KaString);
console.log(user5);
