Here is your JavaScript code converted into a properly formatted Markdown file with code sections and indentation preserved.

---

### **JavaScript Objects and Memory Concepts**  

#### **Introduction**  
An object is a representation of a real-world entity like a car, person, or laptop. It consists of **key-value pairs**. In JavaScript, almost everything is an instance of an object.

---

### **Creating an Object**  
```javascript
const user = {
   x: 10,
   firstName: 'Chirag',
   lastName: 'Arora',
   age: 23,
};

// console.log(user)
```

---

### **Adding a New Property to the Object**  
```javascript
user.height = 182;
```

---

### **Deleting a Property from the Object**  
```javascript
delete user.lastName;
```

---

### **Copying Objects and the Issue with Reference Assignment**  

#### **Task:**  
- Create `user1` with the given properties.
- Copy `user1` into `user2`.
- Change the `firstName` of `user2` to **Sahil** and print both objects.

```javascript
const user1 = {
   id: 9232,
   firstName: 'Chirag',
   age: 23
}

const user2 = user1;
user2.firstName = 'Sahil'; // Now both user1 and user2 have firstName = Sahil. Why?
```

---

### **Stack vs Heap Memory**  
In JavaScript, memory is managed in two ways:  

1. **Stack Memory**: Stores variables with static values (`string`, `number`, `boolean`).  
2. **Heap Memory**: Stores objects and arrays (dynamic structures).  

When we assign `user2 = user1`, JavaScript copies the **reference (address)** of `user1` into `user2`. Both `user1` and `user2` now point to the same object in the heap.

---

### **Solution: Creating an Independent Copy Using Spread Operator**  
The **spread operator (`...`)** helps create a new object with a separate memory reference.

```javascript
const user3 = {
   ...user1
};
user3.firstName = 'Chirag'; // Now both user1 and user3 have different memory addresses.
```

---

### **Shallow Copy Issue with Nested Objects**  
What if we add an **object** as a property inside `user1`?

```javascript
user1.address = {
   h: 2,
   s: 21,
   city: 'Delhi'
};

const user4 = {
   ...user1
};

// Changing address in user4
user4.address.h = 45; 
```

#### **Problem:**
The change is reflected in both `user1` and `user4`. Why?  
- The spread operator only performs a **shallow copy**, meaning:
  - Static values (like `firstName`, `age`) get a new address.
  - **Nested objects (like `address`) still share the same memory reference**.

---

### **Deep Copy Solution Using JSON**  
To fully clone an object (including nested objects), we can use **JSON serialization**.

```javascript
// Step 1: Convert user1 into a JSON string
const user1KaString = JSON.stringify(user1);

// Step 2: Convert the string back into an object
const user5 = JSON.parse(user1KaString);

// Changing address in user5
user5.address.h = 99; // Now, user1 remains unchanged.
```

---

### **Serialization & Deserialization**  
- **Serialization**: Converting an object into a string (e.g., `JSON.stringify()`).  
- **Deserialization**: Converting a string back into an object (e.g., `JSON.parse()`).  

---

### **Final Output**
```javascript
console.log(user1);
console.log(user1KaString);
console.log(user5);
```

---

### **Conclusion**  
- **Shallow copy**: Uses the spread operator (`...`), but nested objects still share memory.  
- **Deep copy**: Uses `JSON.stringify()` and `JSON.parse()` to create a fully independent copy.  

Hope this helps! 🚀

# Understanding JavaScript Prototypes Through Arrays

JavaScript is a versatile and powerful language, but some of its concepts can be a bit confusing, especially for beginners. One such concept is **prototypes**. To understand how prototypes work, let’s break it down using a simple example involving arrays.

---

## Let’s Start with an Array

Consider the following code:

```javascript
const mySkills = ['HTML', 'CSS', 'Javascript'];
```

Here, we’ve created an array called `mySkills` that holds three strings. Arrays are one of the most commonly used data structures in JavaScript, and they come with a lot of built-in functionality.

---

## Adding an Element to the Array

Now, let’s add another element to this array using the `push()` method:

```javascript
mySkills.push('Tailwind CSS');
```

After this line executes, `mySkills` will look like this:

```javascript
['HTML', 'CSS', 'Javascript', 'Tailwind CSS']
```

---

## Breaking Down the Code

At first glance, this seems straightforward, but let’s analyze this line carefully:

```javascript
mySkills.push('Tailwind CSS');
```

### Why Are We Using a Dot (.) to Access `push`?

In JavaScript, the dot notation (`.`) is typically used to access properties or methods of an object. For example:

```javascript
const person = { name: 'John', age: 30 };
console.log(person.name); // Accessing the 'name' property
```

So, why are we using `.` to access the `push()` method on an array? This brings us to an important realization: **in JavaScript, everything is an object**.

---

## Arrays Are Objects Too

Yes, you read that right! Arrays in JavaScript are essentially objects under the hood. This is why we can use dot notation to access methods like `push()`, `pop()`, `slice()`, and so on. These methods are part of the array object’s prototype.

---

## Where Do These Methods Come From?

Here’s where things get interesting. We never defined the `push()` method ourselves, nor did we explicitly create the `Array` object. So, how does JavaScript know what `push()` does?

This is where **prototypes** come into play.

---

## What Are Prototypes?

In JavaScript, every object has a hidden property called `[[Prototype]]` (often referred to as the prototype). This prototype is like a blueprint that defines the methods and properties available to that object.

When you create an array, JavaScript automatically sets up its prototype to be `Array.prototype`. This `Array.prototype` object contains all the built-in methods like `push()`, `pop()`, `map()`, `filter()`, and more.

So, when you call `mySkills.push('Tailwind CSS')`, JavaScript looks for the `push()` method on the `mySkills` array. If it doesn’t find it directly on the array, it looks up the prototype chain and finds it on `Array.prototype`.

---

## Why Are Prototypes Useful?

Imagine having to write all the logic for every array operation from scratch. You’d need to write functions to add elements, remove elements, iterate over arrays, and so on. This would be time-consuming and repetitive.

Thankfully, JavaScript’s prototype system saves us from this hassle. Someone (the creators of JavaScript) has already written these methods for us and attached them to the `Array.prototype`. This allows us to use these methods effortlessly, making our code cleaner and more efficient.

---

## A Quick Recap

1. **Arrays are objects**: In JavaScript, arrays are a type of object, which is why we can use dot notation to access their methods.
2. **Prototypes are blueprints**: Every object in JavaScript has a prototype that defines its methods and properties.
3. **Built-in methods come from prototypes**: Methods like `push()`, `pop()`, and `map()` are defined on `Array.prototype`, which is why we can use them on any array.

---

## Final Thoughts

Prototypes are a fundamental concept in JavaScript, and understanding them can help you write better, more efficient code. They allow JavaScript to be a highly flexible and powerful language, enabling us to build complex applications without reinventing the wheel.

So, the next time you use an array method like `push()`, remember that it’s all thanks to prototypes working behind the scenes!

---

 ## Eraser Links
-  [HTML](https://app.eraser.io/workspace/iZgXlFx51QbosAoxqrUQ)
- [CSS Grids](https://app.eraser.io/workspace/pjz1SKuhQJ43kxOr63Hr)
- [Polyfill](https://app.eraser.io/workspace/fvOzneJ3s0olaYoetMru)
- [Object Proptype](https://app.eraser.io/workspace/MSKrHtmZxpvUgZqn5qGq)
 - [23 FEB](https://app.eraser.io/workspace/tDSQohysDkk7i9cioQGX)
 - [25 feb](https://app.eraser.io/workspace/lzmyfFQS1GM75NmeJoE9)